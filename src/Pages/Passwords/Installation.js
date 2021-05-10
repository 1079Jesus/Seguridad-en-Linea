import React from 'react';
import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Navigbar from '../../Components/Navbar';
import PasswordBread from './PasswordBread';
import Side from "./sidebar";
import TempNavbar from "./tempnavbar";
import Main from "./main";
import About from "./about";
import Contact from "./contact";
import './tempstyles.css';


export const Installation = ()=> {
    return(
        <>
            {/* <Navigbar />
            <Jumbotron>
                <h1>Installación</h1>
                <p>
                    En este módulo aprendemos cómo elegir contraseñas seguras y identificar las ventajas de usar un administrador de contraseñas.
                </p>
                <Button href='Conocimientos'> Próxima Página</Button>
            </Jumbotron>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Side />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>
            </Container>
            <PasswordBread /> */}

            <TempNavbar />
            <Main />
            <About />
            <Contact />
        </>
    )
}