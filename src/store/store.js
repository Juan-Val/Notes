import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "src/reducers/authReducer";
import { modalReducer } from "src/reducers/modalReducer";
import { notasReducer } from "src/reducers/notasReducer";
const reducers = combineReducers({
  modal: modalReducer,
  notas: notasReducer,
  auth: authReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
