import * as actionTypes from './actionTypes';
import { API } from './baseURL';
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const isLoading = loading =>{
    return {
        type: actionTypes.AUTH_LOADING,
        payload: loading
    }
}

export const authSuccess = (token,id) =>{
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload:{
            token, id
        }
    }
}

export const authFailed = msg =>{
    return {
        type: actionTypes.AUTH_FAILED,
        payload: msg
    }
}

export const auth = (data,mode,cb)=>{
    return dispatch => {
        dispatch(isLoading(true))
        let authUrl = null;
        if(mode === 'signup'){
            authUrl = `${API}/user/signup`
        }else if(mode === 'login'){
            authUrl = `${API}/user/login`
        }
        axios.post(authUrl,data)
        .then(response =>{
            dispatch(isLoading(false))
            localStorage.setItem('token',JSON.stringify(response.data.token));
            localStorage.setItem('_id',response.data.data._id);
            const { exp } = jwt_decode(response.data.token);
            const expirationTime = new Date(exp * 1000);
            localStorage.setItem('expirationTime',expirationTime);
            dispatch(authSuccess(response.data.token,response.data.data._id));
            cb()
            
        })
        .catch(err=>{
            dispatch(isLoading(false))
            dispatch(authFailed(err.response.data))
            setTimeout(()=>dispatch(authFailed(null)),2000)
        })
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}
// ---------------------------------------------------------------------------
export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        // Logout
        dispatch(logout());
    } else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            // Logout
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
        }
    }
}

// Main component a componentDidMount ar vitor ata dispatch korte hobe
// ----------------------------------------------------------------------------

        //Auth Cases
        // case actionTypes.AUTH_SUCCESS:
        //     return {
        //         ...state,
        //         token: action.payload.token,
        //         userId: action.payload.userId,
        //     }
        // case actionTypes.AUTH_LOGOUT:
        //     return {
        //         ...state,
        //         token: null,
        //         userId: null,
        //     }