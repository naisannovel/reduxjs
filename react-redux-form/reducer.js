// this file will be in redux folder

import { combineReducers } from 'redux';
import { InitialContactForm } from './forms';
import { createForms } from 'react-redux-form';

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    // --------------------------------
    ...createForms({
        feedback: InitialContactForm,
        // anotherForm: another-form-data-from-form-file
    })
    // -----------------------------
});