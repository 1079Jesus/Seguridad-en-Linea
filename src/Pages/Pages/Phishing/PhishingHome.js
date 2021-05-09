import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import PhishingBread from './PhishingBread';

export const PhishingHome = ()=> {
    return(
        <> 
            <Navigbar />
            <Jumbotron>
                <h1>Bienvenidos al Módulo de Correos Electrónicos de Phishing</h1>
                <p>
                En este módulo analizaremos un poco los patrones que se utilizan para engañar a la gente 
                </p>
                <Button href='Phishing/Ejemplo'> Próxima Página</Button>
            </Jumbotron>
            <PhishingBread />
        </>
    )
}