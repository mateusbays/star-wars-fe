import React from "react";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row";

const Home = () => {
    return (
        <Row className="home">
            <Col>
                <Button className="button" href='/starships' size='lg'>Starships</Button>
            </Col>
            <Col>
                <Button  className="button" href='/people' size='lg'>People</Button>
            </Col>
        </Row>
    )
}
export default Home
