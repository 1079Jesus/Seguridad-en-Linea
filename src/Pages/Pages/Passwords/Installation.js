import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import Navigbar from '../../Components/Navbar';
import PasswordBread from './PasswordBread';

export const Installation = ()=> {
    return(
        <>
            <Navigbar />
            <Jumbotron>
                <h1>Installación</h1>
                <p>
                    En este módulo aprendemos cómo elegir contraseñas seguras y identificar las ventajas de usar un administrador de contraseñas.
                </p>
                <Button href='Conocimientos'> Próxima Página</Button>
            </Jumbotron>

            <PasswordBread />;

        </>
    )
}