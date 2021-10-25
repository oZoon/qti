import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './js/core/reducers';
import Records from './js/lib/records';
import App from './js/core/app';
import { VERSION } from './js/lib/constants';

import './styles/main.css';

const store = createStore(reducers, applyMiddleware(thunk));

// const update = () => {
//     const records = new Records();
//     records.setRecord(`yeti${VERSION}`, store.getState());
// }
// store.subscribe(update);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
