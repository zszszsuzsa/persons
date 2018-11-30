import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_INITIAL_LIST, CONVERT_TO_JSON, SORT_ASC } from '../constants/actionTypes';
import data from '../../../src/persons.json';

const appReducer = (state = { persons: [], raw: null }, action) => {
	
	switch (action.type) {
		/**
		 * getting the initial list to display from persons.json
		 */
		case GET_INITIAL_LIST: {
			if (!state.persons.persons) {
				return {
					...state,
					persons: data
				}
			}
		}

		/**
		 * Adding new person
		 */
		case ADD_EMPLOYEE: {
			state.persons.push(action.data)
			return {
				persons: state.persons
			}
		}

		/**
		 * Deleting a person
		 */
		case DELETE_EMPLOYEE: {
			return {
				persons: state.persons.filter((person, index) => index !== action.index)
			};
		}

		/**
		 * converts state object to string in json format to display in textarea
		 */
		case CONVERT_TO_JSON: {
			let init = state.persons
			let raw = JSON.stringify(init, null, 4)
			return {
				...state,
				raw: raw
			}
		}

		/**
		 * sorts the data by column (name, age, job...) by ascending order
		 */
		case SORT_ASC: {
			function compare(a, b) {
				const key = action.key;

				//checks if the data is a number or string. numbers are converted to number
				// strings converted to uppercase for comparison
				const elementA = (() => {
					if (isNaN(Number(a[key]))) {
						return a[key].toUpperCase();
					}
					else {
						return Number(a[key]);
					}
				})();
				const elementB = (() => {
					if (isNaN(Number(b[key]))) {
						return b[key].toUpperCase();
					}
					else {
						return Number(b[key]);
					}
				})();

				//comparing two elements. 
				//calling this function with sort method, elements are sorted based on comparison values
				let comparison = 0;
				if (elementA > elementB) {
					comparison = 1;
				} else if (elementA < elementB) {
					comparison = -1;
				}
				return comparison
			}
			return {
				persons: state.persons.sort(compare)
			}
		}

		default: {
			return state; // if any of the actions triggered is not defined here it will return the default state
		}
	}
};
export default appReducer;