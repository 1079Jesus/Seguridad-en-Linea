import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigbar from '../../Components/Navbar';
import TwoFactorBread from './TwoFactorBread';

export const TwoFactorHome = ()=> {
    return(
        <>
            <Navigbar />
            <Jumbotron>
                <h1>Bienvenidos al Módulo de Autenticación de Dos Factores</h1>
                <p>
                    En este módulo aprenderemos que es autenticación de dos factores y como usarlo. 
                </p>
                <Button href='DosFactores/Intro'> Próxima Página</Button>
            </Jumbotron>
            <TwoFactorBread />
        </>
    )
}