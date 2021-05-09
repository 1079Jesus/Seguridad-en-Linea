import React, { useContext } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import WebBread from './WebBread';
import { UserContext } from "../../Components/Temp";

export const WebHome = ()=> {
    const {value, setValue } = useContext(UserContext);

    return(
        <> 
            <Navigbar />

            <Jumbotron>
                <h1>Bienvenidos al Módulo de Autenticidad del Sitio Web</h1>
                <p>
                    En este módulo, aprenderemos sobre los protocólos http y https
                    <br></br>
                    También identificaremos los nombres de dominio y extensiones de sitios web 
                </p>
                <Button href='AutenticidaddelSitioWeb/facebook'> Próxima Página</Button>
            </Jumbotron>
            <WebBread />
        </>
    )
}