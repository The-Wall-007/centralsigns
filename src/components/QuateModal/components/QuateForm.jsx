import React, { useContext, useState } from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

import ModalContext from "../../../context/ModalContext";
import { CLOSE_MODAL } from "../../../context/actions/ModalActions";

const QuateFormTwo = () => {
  const { dispatch } = useContext(ModalContext);

  const [quate, setQuate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNum: "",
    notes: "",
    submit: false,
  });

  const sendQuateRequest = (e) => {
    e.preventDefault();

    setQuate({ ...quate, submit: true });

    if (
      quate.email &&
      quate.firstName &&
      quate.lastName &&
      quate.notes &&
      quate.mobileNum
    ) {
      console.log("Entered Info:::::", quate);
      dispatch({ type: CLOSE_MODAL });
    }
  };

  return (
    <div>
      <div className="modal__heading">
        <h3>Request a Quote</h3>
      </div>
      <Form onSubmit={sendQuateRequest}>
        <Form.Group widths="equal">
          <Form.Field
            icon="user"
            iconPosition="left"
            size={"big"}
            id="form-input-control-first-name"
            control={Input}
            label="First Name"
            className="semantic-input"
            onChange={(e) => setQuate({ ...quate, firstName: e.target.value })}
            value={quate.firstName}
            error={quate.submit && !quate.firstName}
          />

          <Form.Field
            icon="user"
            iconPosition="left"
            size={"big"}
            id="form-input-control-last-name"
            control={Input}
            label="Last Name"
            className="semantic-input"
            onChange={(e) => setQuate({ ...quate, lastName: e.target.value })}
            value={quate.lastName}
            error={quate.submit && !quate.lastName}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            type="email"
            icon="mail"
            iconPosition="left"
            size={"big"}
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            className="semantic-input"
            onChange={(e) => setQuate({ ...quate, email: e.target.value })}
            value={quate.email}
            error={quate.submit && !quate.email}
          />

          <Form.Field
            icon="mobile"
            iconPosition="left"
            size={"big"}
            id="form-input-control-first-name"
            control={Input}
            label="Phone No."
            className="semantic-input"
            onChange={(e) => setQuate({ ...quate, mobileNum: e.target.value })}
            value={quate.mobileNum}
            error={quate.submit && !quate.mobileNum}
          />
        </Form.Group>

        <Form.Field
          size={"big"}
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Enter Your Message"
          className="semantic-input"
          onChange={(e) => setQuate({ ...quate, notes: e.target.value })}
          value={quate.notes}
          error={quate.submit && !quate.notes}
        />

        <div className="group flex space-between y-center ">
          <input type="submit" name="" className="btn-Submit" value="Submit" />
          <span onClick={() => dispatch({ type: CLOSE_MODAL })}>Cancel</span>
        </div>
      </Form>
    </div>
  );
};

export default QuateFormTwo;
