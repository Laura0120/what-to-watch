import React from 'react';
import {Switch, Route, Router as BrowserRouter, withRouter} from 'react-router-dom';

import browserHistory from "../../browser-history";
import {AppRoute} from '../../const';
import Main from '../main/main';
import Movie from '../movie/movie';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import PlayerWrapped from '../player/player';
import SignIn from '../sign-in/sign-in';
import withTabs from '../../hocs/with-tabs/with-tabs';
import PrivateRoute from "../private-route/private-route";

const MovieWrapped = withTabs(Movie);

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main/>
        </Route>
        <Route exact path={AppRoute.LOGIN}><SignIn/></Route>
        <PrivateRoute exact path={AppRoute.MY_LIST} component={<MyList/>}/>
        <PrivateRoute exact path={AppRoute.FILM_ID_REVIEW} component={<AddReview/>}/>
        <Route exact path={AppRoute.FILM_ID}>{withRouter(MovieWrapped)}</Route>
        <Route exact path={AppRoute.PLAYER_ID}>{withRouter(PlayerWrapped)}</Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
};

export default App;
