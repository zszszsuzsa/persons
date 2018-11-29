import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_INITIAL_LIST, CONVERT_TO_JSON } from '../constants/actionTypes';
import data from '../../../src/persons.json';

const appReducer = (state = { persons: [], raw: {} }, action) => {
    //switch statement that will test every case and make the necessary changes, never mutating the state as it's being preserved always
    switch (action.type) {
        case GET_INITIAL_LIST: {
            if (!state.persons.persons) {
                return {
                    ...state,
                    persons: data
                }
            }
        }
        case ADD_EMPLOYEE: {
            state.persons.push(action.data)
            return {
                persons: state.persons
            }
        }
        case DELETE_EMPLOYEE: {
            return {
                persons: state.persons.filter((person, index) => index !== action.index)
            };
        }
        case CONVERT_TO_JSON: {
            let init = state.persons
            let raw = JSON.stringify(init, null, 4)
            return {
                ...state,
                raw: raw
            }
        }
        default: {
            return state; // if any of the actions triggered is not defined here it will return the default state
        }
    }
};
export default appReducer;