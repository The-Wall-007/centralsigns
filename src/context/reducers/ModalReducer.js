import { CLOSE_MODAL, OPEN_MODAL } from "../actions/ModalActions";

export const ModalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalStatus: true,
      };
    case CLOSE_MODAL: {
      return {
        modalStatus: false,
      };
    }
    default:
      return state;
  }
};
