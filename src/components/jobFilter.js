import React from 'react'

class jobFilter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            jobFilter:""
        }
    }
    handleChange = (e) => {
        this.setState({
            jobFilter: e.target.value
        })
    //I will pass in an onChange function as props to this component
    this.props.onChange(event.target.value)
    }
    render() {
        return(
            <div>
                <lable htmlFor="filter">Filter by Job:</lable>
                <input type="text" id="filter"
                value={this.state.jobFilter}
                onChange={this.handleChange} />
            </div>
        )
    }
}
export default jobFilter