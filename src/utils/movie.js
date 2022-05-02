const getRatingLevel = (ratingNumber) => {
  if (ratingNumber >= 0.0 && ratingNumber < 3.0) {
    return `Bad`;
  } else if (ratingNumber >= 3.0 && ratingNumber < 5.0) {
    return `Normal`;
  } else if (ratingNumber >= 5.0 && ratingNumber < 8.0) {
    return `Good`;
  } else if (ratingNumber >= 8.0 && ratingNumber < 10.0) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

export {getRatingLevel};
