import { USER_REQUESTED, USER_REQUESTED_FAILED, USER_REQUESTED_SUCCESSED } from '../../constants';

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case USER_REQUESTED_SUCCESSED:
      return {
        ...state,
        isLoading: false,
        error: false,
        user: action.payload,
      };
    case USER_REQUESTED_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
