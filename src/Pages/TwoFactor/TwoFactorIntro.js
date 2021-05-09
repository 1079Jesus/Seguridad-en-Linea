import React from 'react';
import Button from 'react-bootstrap/Button';
// import "./TwoFactorIntro.css";
import Navigbar from '../../Components/Navbar';
import TwoFactorBread from './TwoFactorBread';

export const TwoFactorIntro = ()=> {
    return(
        <>
            <Navigbar />
            <div className="whiteLeft">
                <div className="mytext">
                    <h1>
                        ¿Qué es <span>autenticación de dos factores</span>?
                    </h1>
                    <p>
                        Autenticación de dos factores es un método de autenticación electrónica cual require dos pedazos de evidencia. 
                        Comunmente estos dos son una contraseña y un código de una sola vez mandado a un correo electrónico o número de teléfono atado a la cuenta que se está pidiendo permiso acceder. 
                    </p>
                    <p>
                        Habilitando esta característica da una capa adicional de seguridad porque ahora no solo tiene protección de contraseña, también existe otra forma de verificar el usario. 
                    </p>
                </div>
                <div className="imgBox">
                    <img src="../Images/Two-Factor.png" alt="two factor" />
                </div>
            </div>

            <div className="clr"></div>

            <div className="whiteLeft">

                <div className="mytext">
                    <h1>
                        ¿Cuáles son las <span>formas comunes </span>de autenticación de dos factores?
                    </h1>
                    <ul>
                        <li>Código enviado a su correo electrónico</li>
                        <li>Texto enviado a su número que contiene una contraseña temporal</li>
                        <li>Llamada a su número de teléfono</li>
                    </ul>
                    <p>También existen aplicaciones de autenticación de terceros</p>
                    <ul>
                        <li><a href="https://www.microsoft.com/en-us/account/authenticator" target="_blank" rel="noreferrer">Autenticador de Microsoft</a></li>
                        <li><a href="https://www.google.com/landing/2step/" target="_blank" rel="noreferrer">Autenticador de Google</a></li>
                        <li><a href="https://authy.com/" target="_blank" rel="noreferrer">Autenticador de Authy</a></li>
                    </ul>
                </div>

                <div className="mytext">
                    <h1>
                        ¿Cuáles son las <span>formas comunes </span>de autenticación de dos factores?
                    </h1>
                    <ul>
                        <li>Código enviado a su correo electrónico</li>
                        <li>Texto enviado a su número que contiene una contraseña temporal</li>
                        <li>Llamada a su número de teléfono</li>
                    </ul>
                    <p>También existen aplicaciones de autenticación de terceros</p>
                    <ul>
                        <li><a href="https://www.microsoft.com/en-us/account/authenticator" target="_blank" rel="noreferrer">Autenticador de Microsoft</a></li>
                        <li><a href="https://www.google.com/landing/2step/" target="_blank" rel="noreferrer">Autenticador de Google</a></li>
                        <li><a href="https://authy.com/" target="_blank" rel="noreferrer">Autenticador de Authy</a></li>
                    </ul>
                </div>
                
            </div>

            <Button href='Conocimientos'> Próxima Página</Button>
            <TwoFactorBread />
        </>
    )
}