import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
// import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { drug } = useContext(Context);
  return (
    <ListGroup>
      {drug.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer", width:"170px" }}
          active={type.id === drug.selectedType.id}
          onClick={() => { if (type.id === drug.selectedType.id){
            drug.setSelectedType({});
          } else{
            drug.setSelectedType(type);

          }
            // console.log(type.id);
          }}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
