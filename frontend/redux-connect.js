import React from 'react';
import myStore from '../store';
import { Provider } from 'react-re';

const reduxConnect = () => {
    return (
        <Provider store={myStore}>
            {/* Component */}
        </Provider>
    );
};

export default reduxConnect;