// import reducer from './reducer/reducer';
import {FETCH_SMURFS_GET_DATA,  FETCH_SMURFS_SEND_SMURF, FETCH_SMURFS_ADD_SMURF} from '../actions/index';

export const initialState={
    smurfs:[],
    isLoading:false,
    error:''
   
   
};
    export default (state = initialState, action) =>{
        switch(action.type){
            case FETCH_SMURFS_GET_DATA:
                return{
                    ...state,
                    name: action.payload,
                    gotten:true
                }
            default:
                return state
            
        };
    }
    
      export function reducer(state, action) {
        console.log('action', action);
        switch (action.type) {
        case "FETCH_SMURFS_ADD_SMURF":
          const newSmurf = {
              name: action.payload,
              age:"",
              height:"",
              id: Date.now(),
              gotten: false
             
          };
          return {
            ...state,
            smurf: [...state.smurfs, newSmurf]
          };
          
        }}
        export function AddSmurf(state = [], action) {
            switch (action.type) {
              case FETCH_SMURFS_ADD_SMURF:
                const addSmurf = action.text.trim()
                return [...state, addSmurf]
              default:
                return state
            }
          }
          export const newSmurf = createReducer([], {
            [FETCH_SMURFS_ADD_SMURF]: (state, action) => {
              const text = action.text.trim()
              return [...state, text]
            }
          })
          
         
          
          function createReducer(initialState, handlers) {
            return function reducer(state = initialState, action) {
              if (handlers.hasOwnProperty(action.type)) {
                return handlers[action.type](state, action)
              } else {
                return state
              }
            }
          }