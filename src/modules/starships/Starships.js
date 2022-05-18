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

const Starships = () => {


    const [isLoading, setIsLoading] = useState(true);
    const [starships, setStarships] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState();


    useEffect(() => {
        loadStarships(page);
    }, [page])


    const loadStarships = async (page) => {
        try {
            const data = await HttpRequest.get(`starships/?page=${page}`);
            setTotalItems(data.count)
            setStarships(data.results);
        } catch (e) {
            toast.error("Falha ao obter dados. \n" + e);
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
            <h2 className="mt-2">Starships</h2>
            <Row xs={2} md={3} lg={5} className="justify-content-center">
                {starships.map(x => {
                        return (
                            <Col key={x.name}>
                                <Link className="text-decoration-none" to="/info" state={{...x, type: "starships"}}>
                                    <Card key={x.name} className="m-4 ">
                                        <Card.Img title="Clique para mais informações."
                                                  src={require('../../img/any.jpg')}/>
                                        <Card.Body className="w-100" key={x.name}>
                                            <Card.Text key={x.name}>{x.name}</Card.Text>
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
export default Starships
