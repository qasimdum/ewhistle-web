import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Allegations from "../components/content/allegations/allegations";
import Users from "../components/content/users/users";
import Dashboard from "../components/content/dashboard/dashboard";
import {enums as rolesEnum} from "../enums/Roles";

function PrivateRoutes(props) {
  return (
    <Switch>
      <Route path={'/allegations'}><Allegations {...props} /></Route>
      {props.myUser && props.myUser.role === rolesEnum.ADMINISTRATOR ? <Route path={'/users'}><Users {...props} /></Route> : null}
      {props.myUser && props.myUser.role === rolesEnum.ADMINISTRATOR ? <Route path={'/dashboard'}><Dashboard {...props} /></Route> : null}
      <Route path={'/'}><Allegations {...props} /></Route>
    </Switch>
  )
}

export default PrivateRoutes;
