import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions/SmurfActions';



const SmurfList = props => {
  return (
    <>
      <h1>Welcome Smurf Village</h1>
      <button onClick={props.smurfs.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Smurfs Data'
        )}
      </button>
      {props.smurfs &&
        props.smurfs.map(smurf => <div key={smurf.name} smurf={smurf} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);

