import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers'
import App from './components/App';
import './styles/index';

const store = createStore(
	reducers,
	{
		auth:{ authenticated: localStorage.getItem('token') }  //initial state
	},
	applyMiddleware(reduxThunk)
);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
)
