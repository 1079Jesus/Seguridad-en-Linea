import React from 'react';
import { Button, Jumbotron, Breadcrumb} from 'react-bootstrap';
import Navigbar from '../../Components/Navbar';

export const PasswordsHome = ()=> {
    return(
        <>
            <Navigbar />
            <Jumbotron>
                <h1>Bienvenidos al Módulo de Contraseñas</h1>
                <p>
                    En este módulo aprendemos cómo elegir contraseñas seguras y identificar las ventajas de usar un administrador de contraseñas.
                </p>
                <Button href='Contrasenas/Seguridad'> Próxima Página</Button>
            </Jumbotron>

            <Breadcrumb>
                <Breadcrumb.Item href="AutenticidaddelSitioWeb">Autenticidad del Sitio Web</Breadcrumb.Item>
                <Breadcrumb.Item href="Phishing">Correos Electrónicos de Phishing</Breadcrumb.Item>
                <Breadcrumb.Item active >Contraseñas</Breadcrumb.Item>
                <Breadcrumb.Item href="DosFactores">Autenticación de Dos Factores</Breadcrumb.Item>
                <Breadcrumb.Item href="Transacciones">Transacciones Seguras en Línea</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Privacidad en Línea</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}