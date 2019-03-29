/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

//import custom react components
import DateRange from "./DateRange"



class JobFilter extends React.Component{
  

  render(){
    const {change, jobNum, options} = this.props
    
    return(
      <div>
        <p>How many recent jobs to show?</p>
        <div 
        style={{
          marginRight: rhythm(2),
          marginTop: rhythm(-1)
        }}>
          <select onChange={change} value={jobNum}>
            {options}
          </select>
        </div>
      </div>
    )
  }
}

class Skills extends React.Component {
  constructor(props){
    super(props)
    this.state ={skills: []}
  }

  componentWillMount(){
    this.setState({skills: this.props.skills})
  }

  handleChange = (e) => {
    this.setState({
        skills: e.target.value
    })
  }

  render(){
  return (
  <div style={{marginLeft: rhythm(3), display: "block"}}>
  <h3>Skills</h3>
    
        {this.props.skills.map((skill)=>{
            return (
              <div style={{display: "inline-grid", marginRight: rhythm(1), marginLeft: rhythm(1)}}>
              <h5>{skill.name}</h5>
              <ul>
              {skill.keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
              </ul>
             </div>
            )
          })}
      
  </div>
  )
}
}

class Job extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      jobNum: 2,
      options: [],
    }
  }

  change = (event) => {
    this.setState({jobNum: (event.target.value)})
  }

  componentWillMount(){

    let options = []
    for (let i =0; i < this.props.num; i++){
      options.push(<option value={i+1}>{i+1}</option>)
    }
    this.setState({options: options})
  }

  render(){
    const {work} = this.props 
    
    return (
     <div>
       <h3>Experience</h3>
       <div>
         <JobFilter change={this.change} jobNum={this.state.jobNum} options={this.state.options} />
      
      </div>
       {work.slice(0,this.state.jobNum).map( (job) => {
           const {company, position, startDate, endDate, highlights, isCurrentJob} = job;
           return(
            <div >
                <DateRange startDate={startDate} endDate={endDate} isCurrentJob={isCurrentJob} />
                <h4>{company}</h4>
                <div style={{marginTop: rhythm(-1)}}>
                <span ><p><em>{position}</em></p></span>
                <ul>
                    {highlights.map((highlight,index)=>{
                        return <li key={index}>{highlight}</li>
                    })}
                </ul>
                </div>
            </div>
           )
       })}
     </div>
    );
}
}

class Jobs extends React.Component {


  render(){

  return (
    <StaticQuery
      query={jobQuery}
      render={data => {
        const { work, skills } = data.dataJson
        const num = Object.keys(work).length;
        return (
          <div
            style={{
              display: `inline`,
              marginBottom: rhythm(2.5),
            }}
          >
          <Job work={work} num={num} /> 
          <Skills skills={skills} />
          </div>
        )
      }}
    />
  )
}
}

const jobQuery = graphql`
  query jobQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
	dataJson{
        work{
          currentJob
          company
          position
          highlights
          startDate
          endDate
          highlights
        }
        skills{
          name
          level
          keywords
        }
      }
  }
`

export default Jobs
