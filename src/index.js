import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import App from './components/app/app';
import rootReducer from "./store/reducers/root-reducer";
import {fetchMovies, checkAuth, fetchPromoMovie} from "./store/api-actions";
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);
store.dispatch(fetchMovies());
store.dispatch(fetchPromoMovie());
store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

