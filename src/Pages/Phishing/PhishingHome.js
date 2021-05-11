import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import PhishingBread from './PhishingBread'; 
import { useSpring, animated } from 'react-spring';

export const PhishingHome = ()=> {
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
                    <h1>Bienvenidos al Módulo de Correos Electrónicos de Phishing</h1>
                    <p>
                    En este módulo analizaremos un poco los patrones que se utilizan para engañar a la gente 
                    </p>
                </animated.div>
                <Button className="mt-5 mb-5" href='Phishing/Ejemplo'> Próxima Página</Button>
            </Jumbotron>
            <PhishingBread />
        </>
    )
}