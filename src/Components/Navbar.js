import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const Navigbar = ()=> {
    return(
        <>
            <Navbar bg="light" expand="lg" sticky='top'>
                <Navbar.Brand href="..">Seguridad en Línea</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="..">Página Principal</Nav.Link>
                    <NavDropdown title="Módulos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="../AutenticidaddelSitioWeb">Autenticidad del Sitio Web</NavDropdown.Item>
                        <NavDropdown.Item href="../Phishing">Correos Electrónicos de Phishing</NavDropdown.Item>
                        <NavDropdown.Item href="../Contrasenas">Contrasenas</NavDropdown.Item>
                        <NavDropdown.Item href="../DosFactores">Autenticación de Dos Factores</NavDropdown.Item>
                        <NavDropdown.Item href="../Transacciones">Transacciones Seguras en Línea</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};

export default Navigbar;

