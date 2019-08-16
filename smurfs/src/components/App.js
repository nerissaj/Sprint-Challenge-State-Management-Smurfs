import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {getName, sendSmurf, addSmurf} from '../actions/index';
import  {smurfForm} from './smurfForm';

function App(props) {

  console.log("app props", props)
  if(!props.gotten)
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!
        <smurfForm />
        </div>
        <button onClick={props.getName}>Get New Name</button>
        <button onlick={props.addSmurf}dispatch(addTodo('Use Redux'))>Add Smurf</button>
      </div>
    )
    else return(
      <div className="App">
        <header className="App-header">
          <h1>{props.name}</h1>
         
          <button onClick={props.getName}>Get New Smurf</button>

        </header>
      </div>
    )
  }
const mapStateToProps = state =>{
  return{
    name: state.name,
    gotten:state.gotten
  }
}

export default connect(mapStateToProps, {getName})(App);
