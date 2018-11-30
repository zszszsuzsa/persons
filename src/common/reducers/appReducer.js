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
				//added for sorting boolean values
				if (typeof a[key] === "boolean") {
					if (typeof b[key] === "boolean") {
						return a[key].toString().localeCompare(b[key].toString(), { numeric: true, sensitivity: 'variant' });
					}
				}
				else {
					//sorting strings
					return a[key].localeCompare(b[key], undefined, { numeric: true, sensitivity: 'variant' });
				}
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