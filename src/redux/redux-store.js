import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import product from './product-reducer';

const reducers = combineReducers({
  product,
  form,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
