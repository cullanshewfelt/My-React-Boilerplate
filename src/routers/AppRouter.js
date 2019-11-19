import React, { lazy, Suspense, useEffect } from "react";// eslint-disable-line
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { initToken, setUser } from "../actions/UserActions/userActions";
// import lazyImport from "./LazyImport"; // eslint-disable-line
// import { Loader } from "../components/SubComponents/Loader/Loader";
// the router handles client side rendering of routes
import ErrorBoundary from "./ErrorBoundary";

const AppRouter = (props) => {
  // const { initToken, setUser } = props;
  // useEffect(() => {
  //   const fetchToken = async () => {
  //     let token = localStorage.jwtToken;
  //     if(!token || token === "") {
  //       return;
  //     } else {
  //       let user = await initToken(token);
  //       delete user.exp;
  //       delete user.iat;
  //       setUser({
  //         ...user,
  //         isUserAuthenticated: true,
  //         token: token
  //       });
  //     }
  //   };
  //   fetchToken();
  // }, []); // this effect will run only once: when the page initially loads

  return(
    <BrowserRouter>
      <ErrorBoundary>
        Hello World
      </ErrorBoundary>
    </BrowserRouter>
  );
};


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
