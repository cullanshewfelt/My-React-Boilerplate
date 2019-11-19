import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

// import { fetcyMasterId } from "./actions/BackgroundInstrumentalsActions/masterIDActions";

import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

// store.dispatch(initApp());
//
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById("root"));
