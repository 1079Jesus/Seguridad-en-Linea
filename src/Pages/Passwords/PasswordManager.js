import React from 'react';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import PasswordBread from './PasswordBread';

export const Manager = ()=> {
    return(
        <>
            <Navigbar />
            <div className="lightblue">
                <h1>
                    ¿Qué es un <span>administrador de contraseñas</span>?
                </h1>
            </div>

            <div className="lightblue">
                <p>
                    <strong><i>Un administrador de contraseñas </i></strong> es una herramienta para 
                    <br></br>
                    <strong>almacenar y generar contraseñas complejas </strong> 
                </p>
            </div>

            <div className="clr"></div>
            <div className="verde">
                <p>
                    Funciona como <strong><i>una caja fuerte </i></strong>
                    <br></br> que protege todas sus contraseñas con el uso de <strong><i>cifrado</i></strong>
                    <br></br> Para aceder las credenciales de accesso require 
                    <br></br> <strong><i>una contraseña "maestra."</i></strong>
                </p>
            </div>
            
            <div className="white">
                <div className="safe">
                    <img src="../Images/safe.jpg" alt="Safe" /> 
                </div>
            </div>

            <div className="clr"> </div>

            <div className="negro">
                <p>
                    Entonces lo único que debe de hacer es recordar <strong><i>una contraseña compleja y segura</i></strong>
                    <br></br>
                    <br></br>
                    Cuando necesite una contraseña nueva, 
                    <br></br>
                    el administrador le puede <strong><i>generar </i></strong>una y también <strong><i>agregaría</i></strong> esos credenciales para esa cuenta en su sistema
                    <br></br>
                    <br></br>
                    Por ejemplo, el administrador de contraseñas podría tener sus <strong><i>credenciales de accesso</i></strong> 
                    <br></br>para sus cuentas de Amazon, Apple, Facebook, Gmail, etcétera. 
                </p>
            </div>
            <Button className="mt-5 mb-5" href='Instalar'> Próxima Página</Button>
            <PasswordBread />
        </>
    )
}