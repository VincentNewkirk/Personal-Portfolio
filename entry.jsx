'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestBox from './App.jsx';
import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers';
import {Provider} from 'react-redux';

// const reducer = combineReducers(reducers);
// const store = createStore(reducer);

ReactDOM.render(
    <TestBox />,
  document.getElementById('content')
);