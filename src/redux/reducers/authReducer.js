import { IS_AUTH_MODAL_OPEN, TOOGLE_MODAL } from "../../constants";

const initialState = {
  open: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH_MODAL_OPEN:
      return { ...state, open: true };
    case TOOGLE_MODAL:
      return { ...state, open: false };
    default:
      return state;
  }
};

export default authReducer;
