import { combineReducers, compose, createStore } from "redux";
import { authReducer } from "./reducers/auth.reducer";
import { querryReducer } from "./reducers/querry.reducer";
const composeInhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Reducer = combineReducers({
  querryManager: querryReducer,
  authManager: authReducer,
});
export const store = createStore(Reducer, composeInhancer());
