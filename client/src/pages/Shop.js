import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import DrugList from "../components/DrugList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDrugs, fetchTypes} from "../http/drugAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {drug} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => drug.setTypes(data))
        fetchDrugs(null, null, 1, 2).then(data => {
            drug.setDrugs(data.rows)
            drug.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDrugs(drug.selectedType.id, drug.page, drug.limit).then(data => {
            drug.setDrugs(data.rows)
            drug.setTotalCount(data.count)
        })
    }, [drug.page, drug.selectedType,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>

                    <DrugList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;