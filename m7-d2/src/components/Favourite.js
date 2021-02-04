

import React, {Component} from "react"
import { Card,Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import {connect} from 'react-redux'
import { Link } from "react-router-dom"

const mapStateToProps = (state)=>state

const mapDispatchToProps = (dispatch)=>({
    removeFromFavourites:(id)=>
    dispatch({
        type:"REMOVE_JOB_FROM_FAVOURITES",
        payload:id,
    })

})

class Favourite extends Component {
   
    render(){
        {console.log(this.props)}
        return(
           <>
    
  <div>
    {this.props.favourite.jobs.map((job,i)=>{
      return <Container>
                  <Card.Img src={job.company_logo} className="mt-5 mr-2" style={{width:'200px'}} key={i} />
                  <Button variant="primary"  onClick={() => this.props.removeFromFavourites(job.id)}>Remove from Favourites</Button>
                  
                      
      </Container>   
    })}
    <Link to="/">Home</Link>
  </div> 
 
           </>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favourite)