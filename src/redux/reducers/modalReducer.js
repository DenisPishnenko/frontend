import {
  OPEN_MODAL,
  CLOSE_MODAL,
  USER_LOGIN_SUCCESSED,
  USER_REGISTER_SUCCESSED,
  USER_EDIT_REQUESTED_SUCCESSED,
  USER_NEWS_FETCHED_SUCCESSED,
} from '../../constants';

const initialState = {
  isOpenModal: false,
  modalType: null,
};

const modalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true,
        modalType: action.payload,
      };
    case CLOSE_MODAL:
    case USER_REGISTER_SUCCESSED:
    case USER_LOGIN_SUCCESSED:
    case USER_EDIT_REQUESTED_SUCCESSED:
    case USER_NEWS_FETCHED_SUCCESSED:
      return {
        ...state,
        isOpenModal: false,
        modalType: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
