import { useReducer } from "react";

import ModalContext from "../ModalContext";
import { ModalReducer } from "../reducers/ModalReducer";

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, {
    modalStatus: false,
  });

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
