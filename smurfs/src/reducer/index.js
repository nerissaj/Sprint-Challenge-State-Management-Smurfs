// import reducer from './reducer/reducer';
import {GET_NAME,SEND_SMURF} from '../actions/index';

export const initialState={
    smurf:[
        {name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0,
        gotten: false
        }
    ],
   
   
};
    export default (state = initialState, action) =>{
        switch(action.type){
            case GET_NAME:
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
        case "ADD_SMURF":
          const newSmurf = {
              name: action.payload,
              age:"",
              height:"",
              id: Date.now(),
              gotten: false
             
          };
          return {
            ...state,
            smurf: [...state.smurf, newSmurf]
          };
          
        }}