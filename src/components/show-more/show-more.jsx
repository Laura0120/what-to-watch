import React from 'react';

import {FUNCTION} from '../../prop-type';

const ShowMore = (props) => {
  const {onShowMoreClick} = props;

  return (
    <div className='catalog__more'>
      <button className='catalog__button' type='button' onClick={onShowMoreClick}>
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  onShowMoreClick: FUNCTION
};

export default ShowMore;
