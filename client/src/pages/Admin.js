import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateDrug from "../components/modals/CreateDrug";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [drugVisible, setDrugVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        Додати тип
      </Button>{' '}

      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setDrugVisible(true)}
      >
        Додати медикамент
      </Button>{' '}
      <CreateDrug
        show={drugVisible}
        onHide={() => setDrugVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
