import { IS_AUTH_MODAL_OPEN, TOOGLE_MODAL } from "../../constants";

export const openModal = () => ({
  type: IS_AUTH_MODAL_OPEN,
});

export const toogleModal = () => ({
  type: TOOGLE_MODAL,
});
