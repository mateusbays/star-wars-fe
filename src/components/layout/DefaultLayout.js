import React from "react";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import Container from "react-bootstrap/Container";

const DefaultLayout = ({children}) => {
    return (
        <>
            <NavComponent/>
            <Container fluid={true} className="content">
                {children}
            </Container>
            <FooterComponent/>
        </>
    )
}
export default DefaultLayout
