import {ADD_EMPLOYEE,DELETE_EMPLOYEE,GET_INITIAL_LIST} from '../constants/actionTypes';
import data from '../../../src/persons.json';

const appReducer= (state ={persons:[]}, action) => {
    //switch statement that will test every case and make the necessary changes, never mutating the state as it's being preserved always
    switch(action.type){
        case GET_INITIAL_LIST:{
            return{
                ...state,
                persons: data
            }
        }
        case ADD_EMPLOYEE:{
            return {
                ...state, // es6 epread operator to make a copy of the existing state object 
                persons: newEmployee // the state property changes accordingly to the value of the action triggered
            };
        }
        case DELETE_EMPLOYEE:{
            return {
               //TODO
            };
        }
        default:{
            return state; // if any of the actions triggered is not defined here it will return the default state
        }
    }
};
export default appReducer;