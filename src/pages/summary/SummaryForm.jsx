import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SummaryForm = () => {
  const [tsChecked, setTsChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}> Terms and Conditions </span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tsChecked}
          onChange={(e) => setTsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tsChecked}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
