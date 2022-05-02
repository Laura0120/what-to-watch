import React from 'react';

import {MOVIE, FUNCTION} from '../../prop-type';

const MovieCard = (props) => {
  const {movie, onMovieClick, onMouseOver, onMouseOut, renderPlayer} = props;
  const {preview, title, previewVideo, id} = movie;

  return (
    <article
      className='small-movie-card catalog__movies-card'
      id={id}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={(evt) => {
        evt.preventDefault();
        onMovieClick(id);
      }}
    >
      <div className='small-movie-card__image'>
        {renderPlayer(previewVideo, preview, id)}
      </div>
      <h3 className='small-movie-card__title'>
        <a className='small-movie-card__link' href='#'>
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: MOVIE.isRequired,
  onMovieClick: FUNCTION,
  onMouseOver: FUNCTION,
  onMouseOut: FUNCTION,
  renderPlayer: FUNCTION,
};

export default MovieCard;

