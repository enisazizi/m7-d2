import React from 'react'
import { Card ,Button, Container} from 'react-bootstrap'
import './Details.css';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';



const mapStateToProps = (state)=>state
const mapDispatchToProps = (dispatch)=>({
  addToFavourites:(body)=>
  dispatch({
    type:"ADD_JOB_TO_FAVOURITES",
    payload:body,
  })
})

class Details extends React.Component{
  
    render(){
     
       {console.log(this.props)}
        return(
          <>
       
          <Container className="mt-5 d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.jobDetails.company_logo} />
          <Card.Body>
            <Card.Title>{this.props.jobDetails.title}</Card.Title>
            {/* <Card.Text dangerouslySetInnerHTML={{__html:this.props.jobDetails.description}}> */}
              {/* {this.props.jobDetails.description}  */}
            {/* </Card.Text> */}
            <Card.Text>
            <b>Location :{this.props.jobDetails.location}</b>
            </Card.Text>
            <Button variant="primary"  onClick={() => this.props.addToFavourites(this.props.jobDetails)}>Add to Favourites</Button>
            <Link to="/">Home</Link>
           
            <Link to="/favourites">Favourites</Link>
          
            
          </Card.Body>
        </Card>
    
        </Container>
        
           </> 
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Details)