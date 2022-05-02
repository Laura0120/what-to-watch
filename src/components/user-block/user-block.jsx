import React from 'react';

import {AuthorizationStatus} from "../../const";
import {FUNCTION, STRING} from '../../prop-type';

const UserBlock = (props) => {
  const {authorizationStatus, onMyListButtonClick} = props;

  return (
    <div className='user-block'>
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <div className='user-block__avatar' onClick={onMyListButtonClick}>
          <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
        </div> :
        <div className="user-block">
          <a href="login" className="user-block__link">Sign in</a>
        </div>}
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: STRING,
  onMyListButtonClick: FUNCTION,
};

export default UserBlock;
