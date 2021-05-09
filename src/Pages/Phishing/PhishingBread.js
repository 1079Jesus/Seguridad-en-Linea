import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const PhishingBread = ()=> {
    return(
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="../AutenticidaddelSitioWeb">Autenticidad del Sitio Web</Breadcrumb.Item>
                <Breadcrumb.Item active>Correos Electrónicos de Phishing</Breadcrumb.Item>
                <Breadcrumb.Item href="../Contrasenas">Contraseñas</Breadcrumb.Item>
                <Breadcrumb.Item href="../DosFactores">Autenticación de Dos Factores</Breadcrumb.Item>
                <Breadcrumb.Item href="../Transacciones">Transacciones Seguras en Línea</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Privacidad en Línea</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
};

export default PhishingBread;

