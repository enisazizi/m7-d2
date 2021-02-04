
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import Details from "./components/Details"
import Favourite from './components/Favourite'
import { Route, Link } from "react-router-dom";


class App extends React.Component{
  state={
    data:null,
  }
  handleJobDetails = (body) => {
    this.setState({
      data:body
    });
    console.log(this.state.data)
  };
  render(){
    return (
      <div className="App">
       <Route
              path="/"
              exact
              render={(props) => (
                <Home {...props}  handleJobDetails={this.handleJobDetails}  />
              )}
            />
            <Route
              path="/details"
              exact
              render={(props) => (
                <Details
                  {...props}
                  jobDetails={this.state.data}
                 
                />
              )}
            />
               <Route path="/favourites" exact component={Favourite} />
            
      </div>
    );
  }
}

export default App;
