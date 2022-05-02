const adaptToClientMovie = (movie) => {
  return {
    id: movie.id,
    poster: movie.poster_image,
    preview: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    video: movie.video_link,
    previewVideo: movie.preview_video_link,
    title: movie.name,
    rating: {
      ratingScore: movie.rating,
      countVotesRating: movie.scores_count,
    },
    director: movie.director,
    starring: movie.starring,
    year: movie.released,
    runtime: movie.run_time,
    genre: movie.genre,
    description: movie.description,
    isFavorite: movie.is_favorite
  };
};

const adaptToClient = (movies) => {
  return movies.map(adaptToClientMovie);
};

export {adaptToClient, adaptToClientMovie};
