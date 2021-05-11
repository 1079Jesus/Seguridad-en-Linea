import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import TransactionsBread from './TransactionsBread';
import Navigbar from '../../Components/Navbar';
import { useSpring, animated } from 'react-spring';

export const TransactionsHome = ()=> {
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
                    <h1>Bienvenidos al Módulo de Transacciones Seguras en Línea</h1>
                    <p>
                        En este módulo aprenderemos como hacer transacciones seguras en línea y también descubriremos las ventajas de una billetera digital
                    </p>
                </animated.div>
                <Button className="mt-5 mb-5" href='Transacciones/Intro'> Próxima Página</Button>
            </Jumbotron>
            <TransactionsBread />
        </>
    )
};