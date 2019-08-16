import React from 'react';
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index';


 

const SmurfForm = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addSmurf(input.value))
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">AddSmurf</button>
      </form>
    </div>
  )
}
export default SmurfForm;