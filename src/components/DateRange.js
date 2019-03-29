/**
 * DateRange component that supplies DateRanges for jobs
 */
import React from "react"
import { rhythm } from "../utils/typography"
function DateRange(props){
    const {startDate, endDate, isCurrentJob} = props

    return(
        <div style={{marginBottom: rhythm(-1.8)}}>
            {(isCurrentJob ? 
             <h4>{startDate}-{new Date().getFullYear()}</h4> :
             <h4>{startDate} : {endDate}</h4>
            )}
        </div>
    )
}


export default DateRange
