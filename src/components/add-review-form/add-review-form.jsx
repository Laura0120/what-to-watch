import React, {useState, useRef, useEffect} from "react";

import {FUNCTION, NUMBER, BOOLEAN} from '../../prop-type';
import {RATING_STARS} from '../../const';

const AddReviewForm = (props) => {
  const {onSubmit, id, isLoading} = props;

  const ratingRef = useRef();
  const commentRef = useRef();
  const submitRef = useRef();

  const [validity, setValidity] = useState(false);
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState(``);

  useEffect(() => {
    setValidity(commentRef.current.validity.valid && ratingRef.current.validity.valid);
  }, [rating, comment]);

  return (
    <form action=''
      className='add-review__form'
      onSubmit={(evt)=>{
        evt.preventDefault();
        if (!validity) {
          return;
        }
        onSubmit(id, {rating, comment});
      }}
    >
      <div className='rating'>
        <div className='rating__stars'>
          {RATING_STARS.map((star) => (
            <React.Fragment key={star}>
              <input className='rating__input'
                id={`star-${star}`}
                type='radio'
                name='rating'
                value={star}
                ref={ratingRef}
                checked={rating === star}
                onChange={() => setRating(star)}
                disabled={isLoading}
                required
              />
              <label className='rating__label' htmlFor={`star-${star}`}>
                Rating {star}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className='add-review__text'>
        <textarea
          className='add-review__textarea'
          name='review-text' id='review-text'
          placeholder='Review text'
          ref={commentRef}
          minLength='50'
          maxLength='400'
          required
          onChange={(evt) => setComment(evt.target.value)}
          disabled={isLoading}
        >
        </textarea>
        <div className='add-review__submit'>
          <button ref={submitRef} className='add-review__btn' type='submit' disabled={!validity || isLoading}>
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

AddReviewForm.propTypes = {
  onSubmit: FUNCTION,
  id: NUMBER,
  isLoading: BOOLEAN
};

export default AddReviewForm;
