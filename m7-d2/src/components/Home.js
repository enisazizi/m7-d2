import React from 'react'
import {Form,Button} from "react-bootstrap";
import { Route, Link } from "react-router-dom";
class Home extends React.Component{

    state={search:null,data:[]}


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
           let url = "/positions.json?description=python&location=new+york"
            let response = await fetch(
                `/positions.json?description=${this.state.search.position}&location=${this.state.search.location}`
              );
              let data = await response.json();
              console.log(data);
              this.setState({data})
        } catch (error) {
          console.log(error);
        }
      };
      
       

    render(){
        return(
            <div>
                <Form>
                <Form.Group controlId="position">
                    <Form.Label>Enter position</Form.Label>
                    <Form.Control type="text" placeholder="Enter position"   onChange={(e) => this.onChangeHandler(e)}/>
                  
                </Form.Group>

                <Form.Group controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Location"   onChange={(e) => this.onChangeHandler(e)} />
                </Form.Group>
               
                <Button variant="primary" type="submit" onClick={(e) => this.submitData(e)}>
                    Search
                </Button>
                </Form>
                {this.state.data && this.state.data.length>0 ?(
                    this.state.data.map((result,index)=>{
                        console.log(index)
                        return <li key={index}  onClick={() => this.props.handleJobDetails(result)} ><Link to="details">{result.company}</Link></li>
                        
                    })
                   
                ):(<h3></h3>)}
            </div>
        )
    }
}

export default Home