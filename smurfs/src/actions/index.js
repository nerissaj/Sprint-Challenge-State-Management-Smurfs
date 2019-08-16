import axios from 'axios'

export function addSmurf(text) {
    return {
      type: 'ADD_SMURF',
      text
    }
  }

export const GET_NAME = 'GET_NAME',
// SEND_SMURF = {
//     name: 'Brainey',
//     age: 200,
//     height: '5cm'
//   }
  SEND_SMURF = 'SEND_SMURF'
  

export const getName = () => dispatch => {
    axios
        .get('GET_NAME')
        .then(rez => dispatch({ type: GET_NAME, payload: rez.data }))
        .catch(err => console.log(err))
}
export const sendSmurf = creds => {
    return dispatch => {
        axios
            .post('SEND_SMURF', creds)
            .then(rez => dispatch({ type: SEND_SMURF, payload: rez.data }))
            .catch(err => console.log(err))
    }
}
