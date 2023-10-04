import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import { DRUG_ROUTE } from "../utils/consts";

const DrugItem = ({ drug }) => {
  let history = useHistory();
  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => history.push(DRUG_ROUTE + "/" + drug.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + drug.img}
        />

        <div>{drug.name}</div>
      </Card>
    </Col>
  );
};

export default DrugItem;
