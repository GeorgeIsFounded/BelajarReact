import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from "redux";
import { reducer } from "../reducers/countReducers";
import { colorReducer } from "../reducers/colorReducers";
import { logger, tes } from '../midleware/logger';
import { authProcess } from "../reducers/authReducer";
import thunk from 'redux-thunk';

let allReducers = combineReducers({
  count: reducer,
  color: colorReducer,
  authProcess: authProcess,
});

const composeEnhancers = (
  typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  
export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);