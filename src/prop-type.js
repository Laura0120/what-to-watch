import PropTypes from 'prop-types';

export const COMPONENT = PropTypes.object.isRequired;
export const BOOLEAN = PropTypes.bool.isRequired;
export const FUNCTION = PropTypes.func.isRequired;
export const NUMBER = PropTypes.number.isRequired;
export const STRING = PropTypes.string.isRequired;
export const GENRE_LIST = PropTypes.arrayOf(STRING).isRequired;

export const MOVIE = PropTypes.shape({
  id: PropTypes.number,
  poster: PropTypes.string,
  preview: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  video: PropTypes.string,
  previewVideo: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.shape({
    ratingScore: PropTypes.number,
    countVotesRating: PropTypes.number,
  }),
  director: PropTypes.string,
  starring: PropTypes.array,
  year: PropTypes.number,
  runtime: PropTypes.number,
  genre: PropTypes.string,
  description: PropTypes.string,
  isFavorite: PropTypes.bool,
});

export const MOVIES = PropTypes.arrayOf(MOVIE);

const COMMENT = PropTypes.shape({
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
});

export const COMMENTS = PropTypes.arrayOf(COMMENT);
