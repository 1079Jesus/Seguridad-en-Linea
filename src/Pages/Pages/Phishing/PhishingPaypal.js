import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigbar from '../../Components/Navbar';
import PhishingBread from './PhishingBread';

export const PhishingPaypal = ()=> {
    return(
        <> 
            <Navigbar />
            <Jumbotron>
                <h1>Peligro!!!</h1>
                <p>
                    Usted siguió el enlace de PayPal <strong>falso</strong>
                    <br></br>Esto demuestra que el nombre del enlace <i>no necesariamente es el destino</i> que ofrece
                    <br></br>Antes de hacer clic en un enlace es buena práctica <i>navegar encima</i> de él para ver el verdadero destino
                </p>
                <Button href='Ejemplo'> Página Anterior</Button>
            </Jumbotron>
            <PhishingBread />
        </>
    )
}