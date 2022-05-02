import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

import {TABS_NAME} from '../../const';
import {STRING, FUNCTION, COMMENTS, MOVIE} from '../../prop-type';
import {getRatingLevel} from '../../utils/movie';

const Tabs = (props) => {
  const {currentTab, movie, onChangeTab, comments} = props;
  const {rating, description, director, runtime, genre, year, starring} = movie;
  const {ratingScore, countVotesRating} = rating;

  const getContentOnActiveTab = () => {
    switch (currentTab) {
      case TABS_NAME.OVERVIEW:
        return (
          <React.Fragment>
            <div className="movie-rating">
              <div className="movie-rating__score">{ratingScore}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{getRatingLevel(ratingScore)}</span>
                <span className="movie-rating__count">{countVotesRating} ratings</span>
              </p>
            </div>
            <div className="movie-card__text">
              <p>{description}</p>
              <p className="movie-card__director"><strong>Director: {director}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {starring ? starring.join(`, `) : ``}
              </strong></p>
            </div>
          </React.Fragment>
        );
      case TABS_NAME.DETAILS:
        return (
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {starring.map((actor, i) => {
                    return (i !== starring.length - 1 ?
                      <span key={actor}>{actor}, <br /></span> :
                      <span key={actor}>{actor}</span>);
                  })}
                </span>
              </p>
            </div>

            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">
                  {moment
                .utc()
                .startOf(`day`)
                .add({minutes: runtime})
                .format(`H[h] mm[m]`)}
                </span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{year}</span>
              </p>
            </div>
          </div>
        );
      case TABS_NAME.REVIEWS:
        return (
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {comments.map((comment) => (
                <div className="review" key={comment.id}>
                  <blockquote className="review__quote">
                    <p className="review__text">{comment.comment}</p>
                    <footer className="review__details">
                      <cite className="review__author">{comment.user.name}</cite>
                      <time className="review__date">
                        <Moment format="MMMM D[,] YYYY" withTitle>{comment.date}</Moment>
                      </time>
                    </footer>
                  </blockquote>
                  <div className="review__rating">{comment.rating}</div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return ``;
    }
  };

  return (
    <div className='movie-card__desc'>
      <nav className='movie-nav movie-card__nav'>
        <ul className='movie-nav__list'>
          <li className = {currentTab === `Overview` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href='#' className='movie-nav__link' onClick={onChangeTab}>
              Overview
            </a>
          </li>
          <li className = {currentTab === `Details` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href='#' className='movie-nav__link' onClick={onChangeTab}>
              Details
            </a>
          </li>
          <li className = {currentTab === `Reviews` ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href='#' className='movie-nav__link' onClick={onChangeTab}>
              Reviews
            </a>
          </li>
        </ul>
      </nav>

      {getContentOnActiveTab()}

    </div>
  );
};

Tabs.propTypes = {
  movie: MOVIE.isRequired,
  currentTab: STRING,
  onChangeTab: FUNCTION,
  comments: COMMENTS,
};

export default Tabs;
