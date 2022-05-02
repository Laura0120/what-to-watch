import React from 'react';
import {connect} from "react-redux";

import {FUNCTION, MOVIES} from '../../prop-type';
import MovieListWrapped from '../movie-list/movie-list';
import {adaptToClient} from '../../utils/adapt';
import {ActionCreator} from '../../store/action';

const MyList = (props) => {
  const {movies, onMovieClick, onMainPageClick} = props;

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
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

        <h1 className='page-title user-page__title'>My list</h1>

        <div className='user-block'>
          <div className='user-block__avatar'>
            <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
          </div>
        </div>

      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <MovieListWrapped movies={movies} onMovieClick={onMovieClick}/>
      </section>

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
  );
};


MyList.propTypes = {
  movies: MOVIES.isRequired,
  onMovieClick: FUNCTION,
  onMainPageClick: FUNCTION,
};

const mapStateToProps = (state) => ({
  movies: adaptToClient(state.DATA.favoriteMovies)
});

const mapDispatchToProps = (dispatch) => ({
  onMovieClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
  },
  onMainPageClick() {
    dispatch(ActionCreator.redirectToRoute(`/`));
  }
});
export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
