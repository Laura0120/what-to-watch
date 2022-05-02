import React from 'react';

import {FUNCTION, STRING, GENRE_LIST} from '../../prop-type';

const GenreList = (props) => {
  const {genreList, activeGenre, onChangeGenre} = props;
  return (
    <ul className="catalog__genres-list">

      {genreList.map((genre) => (
        <li key={genre} className={genre === activeGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item `}>
          <a href="#"
            className="catalog__genres-link"
            onClick={(evt) => {
              onChangeGenre(evt);
              evt.preventDefault();
            }}
          >{genre}</a>
        </li>
      ))}
    </ul>

  );
};

GenreList.propTypes = {
  genreList: GENRE_LIST,
  activeGenre: STRING,
  onChangeGenre: FUNCTION
};

export default GenreList;
