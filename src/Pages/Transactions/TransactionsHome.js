import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import TransactionsBread from './TransactionsBread';
import Navigbar from '../../Components/Navbar';

export const TransactionsHome = ()=> {
    return(
        <>
            <Navigbar />
            <Jumbotron>
                <h1>Bienvenidos al Módulo de Transacciones Seguras en Línea</h1>
                <p>
                    En este módulo aprenderemos como hacer transacciones seguras en línea y también descubriremos las ventajas de una billetera digital. 
                </p>
                <Button href='Transacciones/Intro'> Próxima Página</Button>
            </Jumbotron>
            <TransactionsBread />
        </>
    )
};