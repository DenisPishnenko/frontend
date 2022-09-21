import {
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../../constants';

const initialState = {
  isOpenModal: false,
  modalType: null,
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_EDIT_MODAL:
    case OPEN_MODAL:
      return {
        ...state,
        isOpenModal: true,
        modalType: action.payload,
      };
    case CLOSE_EDIT_MODAL:
    case CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false,
        modalType: null,
      };
    default:
      return state;
  }
};

export default userReducer;
