import React from 'react';





 const SmurfsNew = props => {
  return (
    <div>
      <h4>{props.smurfs.name}</h4>
      <p>{props.smurfs.age}</p>
      <p>{props.smurfs.height}</p>
    </div>
  );
};

export default SmurfsNew;


