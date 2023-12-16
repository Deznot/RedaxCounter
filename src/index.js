import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {configureStore, createSlice} from '@reduxjs/toolkit';

// const initialState = {value : 0};

// const reducer = (state = initialState, action) => {
//   switch(action.type) {
//     case "INC":
//       return {
//         ...state,
//         value: state.value + 1
//       };
//     case "DEC":
//       return {
//         ...state,
//         value: state.value - 1
//       };
//     case "RND":
//       return {
//         ...state,
//         value: state.value * action.payload
//       };
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer); 
// const update = () => {
//   document.getElementById('counter').textContent = store.getState().value;
// }

// store.subscribe(update);

// // function inc is action creator
// const inc = () => ({type: "INC"});
// const dec = () => ({type: "DEC"});
// const rnd = (value) => ({type: "RND", payload: value});

// document.getElementById('inc').addEventListener('click', () => {
//   store.dispatch(inc());
// });

// document.getElementById('dec').addEventListener('click', () => {
//   store.dispatch(dec());
// }); 

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch(rnd(value));
// });

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
    rnd : (state) => {
      state.value *= Math.floor(Math.random() * 10)
    }
  }
});

export const {incremented, decremented, rnd} = counter.actions;

const store = configureStore({
  reducer: counter.reducer
});

const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(incremented())
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(decremented());
}); 

document.getElementById('rnd').addEventListener('click', () => {
  store.dispatch(rnd());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);