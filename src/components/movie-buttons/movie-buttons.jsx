import React from 'react';
import PropTypes from 'prop-types';

import {FUNCTION} from '../../prop-type';

const MovieButtons = (props)=> {
  const {id, isFavorite, onPlayClick, onFavoriteClick, authorizationStatus, onAddReviewClick, getAddReviewLink} = props;

  return (
    <div className='movie-card__buttons'>
      <button className='btn btn--play movie-card__button' type='button' onClick={() => onPlayClick(id)}>
        <svg viewBox='0 0 19 19' width='19' height='19'>
          <use xlinkHref='#play-s'></use>
        </svg>
        <span>Play</span>
      </button>
      <button className='btn btn--list movie-card__button' type='button' onClick={() => onFavoriteClick(id, isFavorite)}>
        <svg viewBox='0 0 19 20' width='19' height='20'>
          <use xlinkHref='#add'></use>
        </svg>
        <span>My list</span>
      </button>
      {getAddReviewLink ? getAddReviewLink(authorizationStatus, onAddReviewClick, id) : ``}
    </div>
  );
};

MovieButtons.propTypes = {
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  onPlayClick: FUNCTION,
  onFavoriteClick: FUNCTION,
  authorizationStatus: PropTypes.string,
  onAddReviewClick: PropTypes.func,
  getAddReviewLink: PropTypes.func,
};

export default MovieButtons;
