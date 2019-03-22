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


class Job extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      jobNum: 5,
    }
    this.change = this.change.bind(this)
  }

  change = (event) => {
    this.setState({jobNum: Number(event.target.value)})
  }

  render(){
    const {work} = this.props 
    let options = []
    for (let i =0; i < this.state.jobNum; i++){
      options.push(<option value={i+1}>{i+1}</option>)
    }
    return (
     <div>
       <div>
         <p>How many jobs to show?</p>
       <select onChange={this.change} value={this.state.jobNum}>
        {options}
      </select>
      </div>
       {work.slice(0,this.state.jobNum).map( (job) => {
           const {company, position, startDate, endDate, highlights, isCurrentJob} = job;
           return(
            <div className={this.props.c}>
                <DateRange startDate={startDate} endDate={endDate} isCurrentJob={isCurrentJob} />
                <h3>{company}</h3>
                <p><em>{position}</em></p>
                <ul>
                    {highlights.map((highlight,index)=>{
                        return <li key={index}>{highlight}</li>
                    })}
                </ul>
            </div>
           )
       })}
     </div>
    );
}
}

class Jobs extends React.Component {
  constructor(props){
    super(props)
  }




  render(){

  return (
    <StaticQuery
      query={jobQuery}
      render={data => {
        const { work } = data.dataJson
        const num = Object.keys(work).length;
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
          <Job work={work} num={num} />
            
            
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
      }
  }
`

export default Jobs
