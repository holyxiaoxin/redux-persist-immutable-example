import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
// import { persistStore, autoRehydrate } from 'redux-persist-immutable';
import rootReducer from '../reducers/index';

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    // loggerMiddleware
  ),
);



export default function configureStore() {
  const store = createStore(
    rootReducer,
    enhancer,
    autoRehydrate(),
  );
  return store;
}
