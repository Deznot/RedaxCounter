import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { legacy_createStore as createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

const initialState = {value : 0};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1
      };
    case "DEC":
      return {
        ...state,
        value: state.value - 1
      };
    case "RND":
      return {
        ...state,
        value: state.value * action.payload
      };
    default:
      return state;
  }
}

const store = configureStore({reducer: reducer});

// let state = reducer(initialState, {type : "INC"});
// console.log(state);

// const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

// function inc is action creator
const inc = () => ({type: "INC"});
const dec = () => ({type: "DEC"});
const rnd = (value) => ({type: "RND", payload: value});

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
}); 

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});



// const counter = document.getElementById('counter');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);