import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducers/inventory-reducer';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';

// const logger = createLogger({
//   titleFormatter: function (a, b, c) {
//     console.log(arguments);
//     return  a.type + 'Hummus';
//   }
// })
const store = configureStore({
  reducer: rootReducer
  // middleware: (defaults) => defaults().concat(logger)
});

store.subscribe(() =>
  console.log(store.getState())
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
