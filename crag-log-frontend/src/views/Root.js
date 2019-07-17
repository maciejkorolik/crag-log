import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Climbs from 'views/Climbs';
import Stats from 'views/Stats';
import ClimbDetails from 'views/ClimbDetails';

const Root = () => (
  <Provider store={store}>
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/climbs" />} />
        <Route exact path={routes.climbs} component={Climbs} />
        <Route path={routes.climb} component={ClimbDetails} />
        <Route exact path={routes.stats} component={Stats} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
  </Provider>
);

export default Root;
