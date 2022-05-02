import React, {useEffect} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {matchPath} from "react-router-dom";

import {FUNCTION, STRING, MOVIES, MOVIE, COMMENTS} from '../../prop-type';
import {AuthorizationStatus, AppRoute} from "../../const";
import {ActionCreator} from "../../store/action";
import {changeFavorite, fetchFavorite, fetchMovieById, fetchCommentsByMovieId} from "../../store/api-actions";
import MoreLikeThis from '../more-like-this/more-like-this';
import MovieButtons from '../movie-buttons/movie-buttons';
import UserBlock from '../user-block/user-block';
import {getMoviesSimilar} from '../../store/selectors';
import {adaptToClientMovie} from '../../utils/adapt';

const getAddReviewLink = (status, callback, id) => {
  return (
    status === AuthorizationStatus.AUTH ?
      <a href='' className='btn movie-card__button' onClick={(evt)=>callback(evt, id)} >
        Add review
      </a> : ``);
};

const Movie = (props) => {
  const {movie, loadMovie, location, renderTabs, comments, moviesLikeThis, authorizationStatus,
    onAddReviewClick, onPlayClick, onFavoriteClick, onMainPageClick, onMyListButtonClick, onMovieClick} = props;
  const {poster, backgroundImage, title, year, genre, id, isFavorite} = movie;

  useEffect(() => {
    const locationInfo = matchPath(location.pathname, {
      path: AppRoute.FILM_ID,
      exact: true,
      strict: true
    });

    if (movie.id !== Number(locationInfo.params.id)) {
      loadMovie(locationInfo.params.id);
    }
  }, []);

  return (
    <React.Fragment>
      <section className='movie-card movie-card--full'>
        <div className='movie-card__hero'>
          <div className='movie-card__bg'>
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <header className='page-header movie-card__head'>
            <div className='logo'>
              <a href='#'
                className='logo__link'
                onClick={(evt) => {
                  evt.preventDefault();
                  onMainPageClick();
                }}>
                <span className='logo__letter logo__letter--1'>W</span>
                <span className='logo__letter logo__letter--2'>T</span>
                <span className='logo__letter logo__letter--3'>W</span>
              </a>
            </div>

            <UserBlock authorizationStatus={authorizationStatus} onMyListButtonClick={onMyListButtonClick}/>
          </header>
          <div className='movie-card__wrap'>
            <div className='movie-card__desc'>
              <h2 className='movie-card__title'>{title}</h2>
              <p className='movie-card__meta'>
                <span className='movie-card__genre'>{genre}</span>
                <span className='movie-card__year'>{year}</span>
              </p>

              <MovieButtons id={id} isFavorite={isFavorite} onPlayClick={onPlayClick} onFavoriteClick={onFavoriteClick}
                authorizationStatus={authorizationStatus} onAddReviewClick={onAddReviewClick} getAddReviewLink={getAddReviewLink}/>
            </div>
          </div>
        </div>

        <div className='movie-card__wrap movie-card__translate-top'>
          <div className='movie-card__info'>
            <div className='movie-card__poster movie-card__poster--big'>
              <img src={poster} alt={title} width='218' height='327' />
            </div>

            {renderTabs(movie, comments)}

          </div>
        </div>
      </section>

      <div className='page-content'>
        <MoreLikeThis movies={moviesLikeThis} onMovieClick={onMovieClick}/>
        <footer className='page-footer'>
          <div className='logo'>
            <a href='#'
              className='logo__link logo__link--light'
              onClick={(evt) => {
                evt.preventDefault();
                onMainPageClick();
              }}>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Movie.propTypes = {
  movie: MOVIE.isRequired,
  location: PropTypes.object.isRequired,
  moviesLikeThis: MOVIES.isRequired,
  renderTabs: FUNCTION,
  comments: COMMENTS.isRequired,
  authorizationStatus: STRING,
  onAddReviewClick: FUNCTION,
  onPlayClick: FUNCTION,
  onFavoriteClick: FUNCTION,
  onMyListButtonClick: FUNCTION,
  onMovieClick: FUNCTION,
  onMainPageClick: FUNCTION,
  loadMovie: FUNCTION,
};

const mapStateToProps = (state) => ({
  moviesLikeThis: getMoviesSimilar(state),
  movie: adaptToClientMovie(state.DATA.openedMovie),
  comments: state.DATA.openMovieComments,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onAddReviewClick(evt, id) {
    evt.preventDefault();
    dispatch(ActionCreator.redirectToRoute(`${id}/review`));
  },
  onPlayClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/player/${id}`));
  },
  onFavoriteClick(id, isFavorite) {
    dispatch(changeFavorite(id, isFavorite));
  },
  onMyListButtonClick() {
    dispatch(fetchFavorite());
    dispatch(ActionCreator.redirectToRoute(AppRoute.MY_LIST));
  },
  loadMovie(id) {
    dispatch(fetchMovieById(id));
    dispatch(fetchCommentsByMovieId(id));
  },
  onMovieClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
    dispatch(fetchMovieById(id));
    dispatch(fetchCommentsByMovieId(id));
  },
  onMainPageClick() {
    dispatch(ActionCreator.redirectToRoute(`/`));
  }
});
export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
