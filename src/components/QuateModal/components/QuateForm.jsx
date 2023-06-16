import React, { useContext, useState } from "react";

import ModalContext from "../../../context/ModalContext";
import { CLOSE_MODAL } from "../../../context/actions/ModalActions";

const QuateForm = () => {
  const { dispatch } = useContext(ModalContext);

  const [quate, setQuate] = useState({
    name: "",
    email: "",
    mobileNum: "",
    notes: "",
  });

  const sendQuateRequest = (e) => {
    e.preventDefault();
    console.log(quate.email);
    console.log(quate.name);
    console.log(quate.notes);
    console.log(quate.mobileNum);

    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <form onSubmit={sendQuateRequest}>
      <div className="modal__heading">
        <h3>Request Quate</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Enter name"
          onChange={(e) => setQuate({ ...quate, name: e.target.value })}
          value={quate.name}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="Enter email"
          onChange={(e) => setQuate({ ...quate, email: e.target.value })}
          value={quate.email}
        />
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Enter mobile number"
          onChange={(e) => setQuate({ ...quate, mobileNum: e.target.value })}
          value={quate.mobileNum}
        />
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Enter note"
          onChange={(e) => setQuate({ ...quate, notes: e.target.value })}
          value={quate.notes}
        />
      </div>
      <div className="group flex space-between y-center ">
        <input type="submit" name="" className="btn-dark" value="Submit" />
        {/* <span onClick={() => {}}>Cancel</span> */}
      </div>
    </form>
  );
};

export default QuateForm;
