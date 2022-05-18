import React from "react";
import Container from "react-bootstrap/Container";
import {useLocation} from 'react-router-dom'

const Info = ({}) => {

    const location = useLocation();
    const data = location.state;
    console.log(location)

    return (
        <Container fluid={true} className="card-info">
            {data.type === "starships" ?
                <div className="div-info">
                    <h2>{data.name}</h2>
                    <p>MGLT: {data.MGLT}</p>
                    <p>Cargo Capacity: {data.cargo_capacity}</p>
                    <p>Consumables: {data.consumables}</p>
                    <p>Cost in Credits: {data.cost_in_credits}</p>
                    <p>Crew: {data.crew}</p>
                    <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
                    <p>Manufacturer: {data.manufacturer}</p>
                    <p>Max Atmosphering Speed: {data.max_atmosphering_speed}</p>
                    <p>Passengers: {data.passengers}</p>
                    <p>Starship class: {data.starship_class}</p>
                </div>
                :
                <div className="div-info">
                    <h2>{data.name}</h2>
                    <p>Gender: {data.gender}</p>
                    <p>Height: {data.height}</p>
                    <p>Birth Year: {data.birth_year}</p>
                    <p>Skin Color: {data.skin_color}</p>
                    <p>Eye Color: {data.eye_color}</p>
                    <p>Hair Color: {data.hair_color}</p>
                </div>
            }

        </Container>
    )
}
export default Info
