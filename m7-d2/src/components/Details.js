import React from 'react'



class Details extends React.Component{
    render(){
        return(
            <h3>{this.props.jobDetails.company}</h3>
            
        )
    }
}
export default Details