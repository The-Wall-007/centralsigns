import React, { useContext, useState } from "react";

import { Header, QuateModal } from "../../components";
import ModalContext from "../../context/ModalContext";
import { OPEN_MODAL } from "../../context/actions/ModalActions";
import QuateForm from "../../components/QuateModal/components/QuateForm";

const Home = (props) => {
  const { state: ModalState, dispatch } = useContext(ModalContext);

  const [state] = useState({
    heading: ` WE CREATE COLORFUL`,
    paragraph: ` PRINTING SOLUTIONS WITH UNBEATABLE QUALITY`,
  });

  return (
    <div>
      <Header props={state}>
        <button
          className="btn-default"
          onClick={() => dispatch({ type: OPEN_MODAL })}
        >
          Request a Quate
        </button>
      </Header>
      {ModalState.modalStatus && (
        <QuateModal>
          <QuateForm />
        </QuateModal>
      )}
    </div>
  );
};

export default Home;
