import React from 'react';
import {connect} from "react-redux";

import AddReviewForm from '../add-review-form/add-review-form';
import UserBlock from '../user-block/user-block';
import {FUNCTION, MOVIE, BOOLEAN, STRING} from '../../prop-type';
import {ActionCreator} from "../../store/action";
import {AppRoute} from "../../const";
import {fetchFavorite, addReview} from "../../store/api-actions";
import {adaptToClientMovie} from '../../utils/adapt';

const AddReview = (props) => {
  const {movie, authorizationStatus, isLoading, onMoviePageClick, onMyListButtonClick, onSubmit, onMainPageClick} = props;
  const {backgroundImage, poster, title, id} = movie;

  return (
    <section className='movie-card movie-card--full'>
      <div className='movie-card__header'>
        <div className='movie-card__bg'>
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
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

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href='' className='breadcrumbs__link'
                  onClick={(evt) => {
                    evt.preventDefault();
                    onMoviePageClick(id);
                  }}>
                  {title}
                </a>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock authorizationStatus={authorizationStatus} onMyListButtonClick={onMyListButtonClick}/>

        </header>

        <div className='movie-card__poster movie-card__poster--small'>
          <img src={poster} alt={title} width='218' height='327' />
        </div>
      </div>

      <div className='add-review'>
        <AddReviewForm id={id} isLoading={isLoading} onSubmit={onSubmit}/>
      </div>
    </section>
  );
};

AddReview.propTypes = {
  movie: MOVIE.isRequired,
  onMoviePageClick: FUNCTION,
  onMyListButtonClick: FUNCTION,
  authorizationStatus: STRING,
  onSubmit: FUNCTION,
  onMainPageClick: FUNCTION,
  isLoading: BOOLEAN,
};

const mapStateToProps = (state) => ({
  movie: adaptToClientMovie(state.DATA.openedMovie),
  authorizationStatus: state.USER.authorizationStatus,
  isLoading: state.APP_STATE.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onMoviePageClick(id) {
    dispatch(ActionCreator.redirectToRoute(`/films/${id}`));
  },
  onMyListButtonClick() {
    dispatch(fetchFavorite());
    dispatch(ActionCreator.redirectToRoute(AppRoute.MY_LIST));
  },
  onSubmit(id, comment) {
    dispatch(ActionCreator.postingComment(true));
    dispatch(addReview(id, comment));
  },
  onMainPageClick() {
    dispatch(ActionCreator.redirectToRoute(`/`));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
