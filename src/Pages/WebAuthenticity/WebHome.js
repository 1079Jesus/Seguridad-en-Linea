import React, { useContext } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import WebBread from './WebBread';
import { useSpring, animated } from 'react-spring';

export const WebHome = ()=> {
    const fade = useSpring({
        from: { opacity: 0}, 
        opacity: 1, 
        delay: 500,
    });
    return(
        <> 
            <Navigbar />

            <Jumbotron>
                <animated.div style={fade}>
                    <h1>Bienvenidos al Módulo de Autenticidad del Sitio Web</h1>
                    <p>
                        En este módulo, aprenderemos sobre los protocólos http y https
                        <br></br>
                        También identificaremos los nombres de dominio y extensiones de sitios web 
                    </p>
                </animated.div>
                <Button className="mt-5 mb-5" href='AutenticidaddelSitioWeb/facebook'> Próxima Página</Button>
            </Jumbotron>
            <WebBread />
        </>
    )
}