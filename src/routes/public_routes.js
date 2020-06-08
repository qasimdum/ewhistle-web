import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../components/content/home/home";
import Policy from "../components/content/policy/policy";
import ReportAllegation from "../components/content/report-allegation/report-allegation";
import SignIn from "../components/content/signin/signin";
import AllegationSubmit from "../components/content/report-allegation/allegationSubmit/allegationSubmit";
import AllegationTracking from "../components/content/allegationTracking/allegationTracking";

function PublicRoutes() {
  return (
    <Switch>
      <Route path={'/policy'} component={Policy} />
      <Route path={'/report_allegation'} component={ReportAllegation} />
      <Route path={'/allegation_submit'} component={AllegationSubmit} />
      <Route path={'/allegation_tracking'} component={AllegationTracking} />
      <Route path={'/signin'} component={SignIn} />
      <Route path={'/'} component={Home} />
    </Switch>
  )
}

export default PublicRoutes;
