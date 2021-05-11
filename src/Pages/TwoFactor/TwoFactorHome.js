import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navigbar from '../../Components/Navbar';
import TwoFactorBread from './TwoFactorBread';
import { useSpring, animated } from 'react-spring';

export const TwoFactorHome = ()=> {
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
                    <h1>Bienvenidos al Módulo de Autenticación de Dos Factores</h1>
                    <p>
                        En este módulo aprenderemos que es autenticación de dos factores y como usarlo 
                    </p>
                </animated.div>
                <Button className="mt-5 mb-5" href='DosFactores/Intro'> Próxima Página</Button>
            </Jumbotron>
            <TwoFactorBread />
        </>
    )
}