import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseURL } from './baseURL';

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

export const errorDishLoad = (err)=>{
    return {
        type: actionTypes.ERROR_DISH,
        payload: err
    }
}

export const fetchDish = ()=>{
    return dispatch =>{
        dispatch(loadingDish())

        axios.get(baseURL + '/url')
        .then(response => response.data)
        .then(dishes => dispatch(loadDish(dishes)))
        .catch(error => dispatch(errorDishLoad(error.message)))
    }
}

// ---------------------------POST----------------------------------------

export const dishConcat = newDish =>{
    return {
        type: actionTypes.ADD_DISH,
        payload: newDish
    }
}

export const addDish = (data)=>{
    return dispatch =>{
        const dishObj = data

        axios.post(baseURL + '/add-dish',dishObj)
        .then(response => response.data)
        .then(newDishData => dispatch(dishConcat(newDishData)))
    }
}