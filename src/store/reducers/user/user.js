import {ActionType} from '../../action';
import {extend} from '../../../utils/common';

import {AuthorizationStatus} from '../../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};


export {user};
