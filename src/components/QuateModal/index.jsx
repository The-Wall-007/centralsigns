import React, { useContext } from "react";

import ModalContext from "../../context/ModalContext";
import { CLOSE_MODAL } from "../../context/actions/ModalActions";

const QuateModal = ({ children }) => {
  const { dispatch } = useContext(ModalContext);

  const close = (e) => {
    if (e.target.getAttribute("class") === "modal") {
      dispatch({ type: CLOSE_MODAL });
    }
  };

  return (
    <div className="modal" onClick={close}>
      <div className="modal__body">{children}</div>
    </div>
  );
};

export default QuateModal;
