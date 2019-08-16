import axios from 'axios';
export const FETCH_SMURFS_GET_DATA = 'GET_DATA';
    export const FETCH_SMURFS_ADD_SMURF = 'ADD_SMURF';
  export const FETCH_SMURFS_SEND_SMURF = 'SEND_SMURF';
  

export const getData = () => dispatch => {
    axios
        .get('/smurfs/')
           
        .then(rez => dispatch({ type: FETCH_SMURFS_GET_DATA, payload: rez.data }))
        .catch(err => console.log(err))
}
export const sendSmurf = creds => {
    return dispatch => {
        axios
            .post('FETCH_SMURFS_SEND_SMURF', creds)
            .then(rez => dispatch({ type: FETCH_SMURFS_SEND_SMURF, payload: rez.data }))
            .catch(err => console.log(err))
    }
}