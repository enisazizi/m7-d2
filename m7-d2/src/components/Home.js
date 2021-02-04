import React from 'react'
import './Home.css';
import {Form,Button} from "react-bootstrap";
import {  Link } from "react-router-dom";
import {connect} from 'react-redux'


const mapStateToProps = (state)=>state
const mapDispatchToProps = (dispatch)=>({
  addToFavourites:(body)=>
  dispatch({
    type:"ADD_JOB_TO_FAVOURITES",
    payload:body,
  }
  ),
  submitDataWithThunk: (url) =>
  
    dispatch(async (dispatch, getState ) => {
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            console.log('current state: ', getState().jobsSearch)
            if (res.ok) {
              dispatch(
                {
                  type: "GET_JOBS",
                  payload: data,
                }
              )
            } else {
              dispatch(
                {
                  type: "SET_ERROR",
                  payload: true,
                }
              )
            }
        } catch (error) {
            console.log(error)
        }
    })

})
class Home extends React.Component{

    state={
        search:null,
        data:[],
      
    }
  
 

    onChangeHandler = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) this.submitData(e);
        console.log(this.state)
        this.setState({
            search: { ...this.state.search, [e.target.id]: e.currentTarget.value },
        });
      };

    
      submitData = async (e) => {
        e.preventDefault();
        try {
                let url =  `/positions.json?description=${this.state.search.position}&location=${this.state.search.location}`
                let response = await this.props.submitDataWithThunk(url)
                   
                 
            
          
        } catch (error) {
          console.log(error);
        }
      };
   
 
       

    render(){
        let jobs = this.props.jobsSearch.jobs || []
        return(
            <div>
                {console.log(jobs,"asdadsa") }
                <Form>
                <Form.Group controlId="position">
                    <Form.Label>Enter position</Form.Label>
                    <Form.Control type="text" placeholder="Enter position"   onChange={(e) => this.onChangeHandler(e)}/>
                  
                </Form.Group>

                <Form.Group controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Germany"   onChange={(e) => this.onChangeHandler(e)} />
                </Form.Group>
               
                <Button variant="primary" type="submit" onClick={(e) => this.submitData(e)}>
                    Search
                </Button>
                <Link to="/favourites">Go To Fav</Link>
              
                </Form>
                { jobs && jobs.length >0 ? (
                        jobs.map((result,index)=>{
                            console.log(jobs[0])
                            return <div>
                                <li className="example" key={index}  onClick={() => this.props.handleJobDetails(result)} ><Link to="details"><b>Company : </b>{result.company}</Link></li>
                                <Button variant="primary"  onClick={() => this.props.addToFavourites(result)}>Add to Favourites</Button>
                        
                                </div>

                        })
                ):(
                    <h3>Nothing to show</h3>
                )
                  
                   
                }
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)