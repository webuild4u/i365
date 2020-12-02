import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = (props) => {
  const { isAuthUser, user } = props;
  if (!isAuthUser) return <Redirect to="/home" />;
  return <Route {...props} />;
};

const mapStateToProps = (state) => {
  return {
    isAuthUser: state.user.isAuthorized,
    user: state.user.user,
  };
};
export default connect(mapStateToProps)(AuthRoute);
