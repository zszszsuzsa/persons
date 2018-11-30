import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_INITIAL_LIST, CONVERT_TO_JSON, SORT_ASC } from '../constants/actionTypes';

export const getInitialList = () => ({
    type: GET_INITIAL_LIST
})

export const addRow = data => ({
    type: ADD_EMPLOYEE,
    data
});

export const deleteRow = index => ({
    type: DELETE_EMPLOYEE,
    index
});

export const convert = data => ({
    type: CONVERT_TO_JSON,
    data
});

export const sortAscending = key => ({
    type: SORT_ASC,
    key
});
