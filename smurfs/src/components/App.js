import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {getData, sendSmurf} from '../actions/index';
import SmurfList from './SmurfList';


function App(props) {

  console.log("app props", props)
  if(!props.gotten)
    return (
      <div className="App">
        <header className="App-header">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!
         
        <button onClick={props.getData}>Get New Name</button>
       
        </div>
        </header>
      </div>
    )
    else return(
      <div className="App">
        <header className="App-header">
          <h1>{props.smurfs.name}</h1>
         
          <button onClick={props.smurfs.getData}>Get New Smurf</button>

        </header>
      </div>
    )
  }
const mapStateToProps = state =>{
  return{
    name: state.name,
    gotten: state.gotten
  }
}

export default connect(mapStateToProps, {getData})(App);
