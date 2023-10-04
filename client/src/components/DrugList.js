import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DrugItem from "./DrugItem";

const DrugList = observer(() => {
    const {drug} = useContext(Context)

    return (
        <Row className="d-flex">
            {drug.drugs.map(drug =>
                <DrugItem key={drug.id} drug={drug}/>
            )}
        </Row>
    );
});

export default DrugList;