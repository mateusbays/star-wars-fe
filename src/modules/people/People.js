import Row from "react-bootstrap/Row";
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {toast} from "react-toastify";
import HttpRequest from "../../common/httpservice/HttpRequest";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PaginationSelector from "../../components/pagination/PaginationSelector";
import Spinner from "react-bootstrap/Spinner";
import {Link} from "react-router-dom";

const People = () => {


    const [isLoading, setIsLoading] = useState(true);
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState();


    useEffect(() => {
        loadPeople(page);
    }, [page])


    const loadPeople = async (page) => {
        try {
            const data = await HttpRequest.get(`people/?page=${page}`);
            setTotalItems(data.count)
            setPeople(data.results);
        } catch (e) {
            toast.error("Falha ao obter dados. \n" + e.code);
        } finally {
            setIsLoading(false)
        }

    };

    const handlePagination = (x) => {
        setPage(parseInt(x.target.innerText))
    }


    if (isLoading) {
        return (
            <Container className="body-cards">
                <p>Carregando informações...</p>
                <Spinner animation="border"/>
            </Container>
        )
    }

    return (
        <Container fluid={true} className="body-cards">
            <h2 className="mt-2">People</h2>
            <Row xs={2} md={4} lg={5} className="justify-content-center">
                {people.map(x => {
                        return (
                            <Col key={x.name}>
                                <Link className="text-decoration-none" to="/info" state={{...x, type: "people"}}>
                                    <Card key={x.name} className="m-4">
                                        <Card.Img title="Clique aqui para mais informações..."
                                                  src={require('../../img/any.jpg')}/>
                                        <Card.Body  key={x.name}>
                                            <Card.Text  key={x.name}>{x.name}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    }
                )}
            </Row>
            <PaginationSelector onClick={x => handlePagination(x)} itemsPerPage={10} totalItems={totalItems}
                                active={page}/>
        </Container>
    )
}
export default People
