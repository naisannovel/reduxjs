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

//-----------------------------------update-------------------------------------

export const servicePriceUpdate = (id,value,cb) => dispatch => {
    dispatch(loadingService(true));
    const { token } = isAuthenticated() ? userInfo() : "";
    axios.put(`${API}/service/${id}`,value,{
      headers: {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`,
    }
    })
    .then(response =>{
        dispatch(loadingService(false));
        dispatch(updatedService(response?.data))
        cb()
        dispatch(serviceUpdateMsg('successfully updated'));
        setTimeout(()=>dispatch(serviceUpdateMsg(null)),2000)
    })
}

//-----------------------------Delete-----------------------------------------

export const deleteService = id => dispatch =>{
    dispatch(loadingService(true));
    const { token } = isAuthenticated() ? userInfo() : "";
    axios.delete(`${API}/service/${id}`,{
        headers: {
            "Authorization": `Bearer ${token}`
        }})
    .then(response => {
            dispatch(loadingService(false));
            dispatch(removeService(id));
        })
    .catch(err => {
            dispatch(loadingService(false))})
}
