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

function Job(props){
    const {work} = props 
    return (
     <div>
         <button>Test</button>
       {work.map( (job) => {
           const {company, position, startDate, endDate, highlights, isCurrentJob} = job;
           return(
            <div>
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

function Jobs(props) {
    console.log(props)

    
  return (
    <StaticQuery
      query={jobQuery}
      render={data => {
        const { work } = data.dataJson
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
          <Job work={work}/>
            
            
          </div>
        )
      }}
    />
  )
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
