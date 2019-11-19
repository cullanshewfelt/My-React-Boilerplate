var thunk = require("redux-thunk").default;

import { configureStore } from "redux-starter-kit";
import logger from "redux-logger"; // eslint-disable-line

const reducer = {

};

// default middleware was causing the app to freeze so I am resetting it here
// [require("redux-immutable-state-invariant").default(), thunk, logger] // require("redux-immutable-state-invariant").default(),

// logger ** MUST ** come last

let middleware = process.env.NODE_ENV !== "production"
  ? [thunk] // , require("redux-immutable-state-invariant").default(), logger]
  : [thunk];

export default () => {
  // using configureStore for extra error logging // createStore
  const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production"
  });
  return store;
};
