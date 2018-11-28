import {ADD_EMPLOYEE,DELETE_EMPLOYEE,GET_INITIAL_LIST} from '../constants/actionTypes';

export const getInitialList=()=>({
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

// export const addEmployee=value=>dispatch=>{
//     dispatch(addRow(value));
//  };

//  export const deleteEmployee=index=>dispatch=>{
//     dispatch(deleteRow(index));
//  };