import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";

import {COMPONENT, STRING, BOOLEAN} from '../../prop-type';

const PrivateRoute = (props) => {
  const {component, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? component
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: STRING,
  component: COMPONENT,
  path: STRING,
  exact: BOOLEAN
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
