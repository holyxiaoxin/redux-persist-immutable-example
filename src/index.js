import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import immutableTransform from 'redux-persist-transform-immutable'
import { persistStore, autoRehydrate } from 'redux-persist';
import './index.css';

const store = configureStore();

persistStore(store, { transforms: [immutableTransform()] });

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
