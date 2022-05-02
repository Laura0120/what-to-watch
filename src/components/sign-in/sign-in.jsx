import React, {useRef} from "react";

import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {FUNCTION} from '../../prop-type';
import {ActionCreator} from '../../store/action';

const SignIn = (props) => {
  const {onSubmit, onMainPageClick} = props;
  const loginRef = useRef();
  const passwordRef = useRef();

  return (
    <div className='user-page'>
      <header className='page-header user-page__head'>
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

        <h1 className='page-title user-page__title'>Sign in</h1>
      </header>

      <div className='sign-in user-page__content'>
        <form
          action=''
          className='sign-in__form'
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit({
              login: loginRef.current.value,
              password: passwordRef.current.value,
            });
          }}
        >
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input
                className='sign-in__input'
                type='email'
                placeholder='Email address'
                name='user-email' id='user-email'
                ref={loginRef} />
              <label className='sign-in__label visually-hidden' htmlFor='user-email'>
                Email address
              </label>
            </div>
            <div className='sign-in__field'>
              <input
                className='sign-in__input'
                type='password'
                placeholder='Password'
                name='user-password'
                id='user-password'
                ref={passwordRef}/>
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>
                Password
              </label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button className='sign-in__btn' type='submit'>
              Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className='page-footer'>
        <div className='logo'>
          <a href='#'
            className='logo__link logo__link--light'
            onClick={(evt) => {
              evt.preventDefault();
              onMainPageClick();
            }}>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <div className='copyright'>
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: FUNCTION,
  onMainPageClick: FUNCTION
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  onMainPageClick() {
    dispatch(ActionCreator.redirectToRoute(`/`));
  }
});

export {SignIn};

export default connect(null, mapDispatchToProps)(SignIn);
