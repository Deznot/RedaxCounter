import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { legacy_createStore as createStore, bindActionCreators} from 'redux';
import reducer from './features/reducer';
import * as actions from './features/actions';

const store = createStore(reducer); 
const {dispatch, getState, subscribe} = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }

// const incDispatch = bindActionCreator(inc, dispatch);

const { inc, dec, rnd } = bindActionCreators({actions}, dispatch);

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd,dispatch);

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec); 

document.getElementById('rnd').addEventListener('click', rnd);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);