import * as actionTypes from './actionTypes';

// ---------------------GET----------------------------------

export const loadDish = dish=>{
    return {
        type: actionTypes.LOAD_DISH,
        payload: dish
    }
}

export const loadingDish = ()=>{
    return {
        type: actionTypes.LOADING_DISH
    }
}

export const fetchDish = ()=>{
    return dispatch =>{
        dispatch(loadingDish())

        setTimeout(()=>{
            dispatch(loadDish(data))            // here we will call data from server
        },2000)
    }
}

// -------------------------------------------------------------------