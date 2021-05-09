import React from 'react';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import TwoFactorBread from './TwoFactorBread';

export const TwoFactorIntro = ()=> {
    return(
        <>
            <Navigbar />
            <div className="lightblue">
                <h1>
                    ¿Qué es <span>autenticación de dos factores</span>?
                </h1>
                <p>
                    Autenticación de dos factores es un <strong><i>método de autenticación electrónica</i></strong> cual require <i>dos pedazos de evidencia</i>
                    <br></br>
                    <br></br> 
                    Comunmente estos dos son una contraseña y un <strong><i>código de una sola vez</i></strong> mandado a un <i>correo electrónico</i> o <i>número de teléfono </i> 
                    atado a la cuenta que se está pidiendo permiso acceder
                </p>
            </div>

            <div className="lightblue">
                <p>
                    La mayoría de sus cuentas tendrán la opción de <strong><i>activar autenticación de dos factores</i></strong> en la 
                    <i> configuración</i> incluyendo sus:
                    <br></br>cuentas bancarias
                    <br></br>cuentas de comercio electrónico
                    <br></br>cuentas de e-mail
                    <br></br>etcetera
                    <br></br>
                    <br></br>
                    Habilitando esta característica da una <i>capa adicional de seguridad</i> porque ahora no solo tiene protección de contraseña,
                    <br></br> también existe otra forma de <strong><i>verificar el usario</i></strong> 
                </p>
            </div>

            <div className="clr"></div>

            <div className="verde">
                <p>
                    <strong>Formas comunes de autenticación de dos factores</strong>
                    <br></br>
                    <br></br>
                    Código enviado a su correo electrónico
                    <br></br>
                    Texto enviado a su número que contiene una contraseña temporal
                    <br></br>
                    Llamada a su número de teléfono
                    <br></br>
                    <br></br>
                    También es muy importante que <strong><i>trate los códigos</i></strong> de autenticación de dos factores <strong><i>como una contraseña</i></strong>
                    <br></br>
                    <br></br>
                    Así como usted <i>no comparte sus contraseñas</i>, el código también es <i>igual de importante</i> para acceder sus cuentas
                </p>
            </div>

            <div className="white">
                <div className="twofactor"> 
                    <img src="../Images/Two-Factor.png" alt="two factor" />
                </div>
            </div>

            <div className="clr"></div>

            <div className="lightblue">
                <p>
                    <h1>¿<span>Cómo funciona?</span></h1>
                    <br></br>
                    Autenticación de dos factores asegura que <strong><i>solamente usted pueda acceder</i></strong> su cuenta en un <strong><i>dispositivo confiable</i></strong>
                    <br></br>
                    <br></br>
                    Para ingresar a su cuenta, necesita su <strong><i>contraseña y código</i></strong> enviado a su <i>correo electrónico</i> o <i>número de teléfono</i>
                    <br></br>
                    <br></br>
                    Entonces habilitar autenticación de dos factores te <i>protege si alguien <strong>adivina</strong></i> tus contraseñas
                </p>
            </div>

            <div className="lightblue">
                <p>
                    <h2>En el caso de que alguien <strong><i>no autorizado</i></strong> conozca su clave:</h2>
                    Usted <strong><i>será notificado</i></strong> cuando el código sea enviado y realizará que alguien más conoce su contraseña
                    <br></br>
                    <br></br>Entonces el ladrón <strong><i>no podrá ingresar</i></strong> sin <i>su autorización</i>
                    <br></br>
                    <br></br>Al final, usted tendrá que <strong><i>actualizar su contraseña</i></strong> fácilmente usando su <i>administrador de contraseñas</i>
                </p>
            </div>
            <div className="clr"></div>

            <div className="negro">
                <p>
                    Aparte de la opción de activar autenticación de dos factores en las <i>configuraciones de la cuenta</i>,
                    <br></br>también existen aplicaciones de autenticación de terceros comunes 
                    <ul>
                        <li><a href="https://www.microsoft.com/en-us/account/authenticator" target="_blank" rel="noreferrer">Autenticador de Microsoft</a></li>
                        <li><a href="https://www.google.com/landing/2step/" target="_blank" rel="noreferrer">Autenticador de Google</a></li>
                        <li><a href="https://authy.com/" target="_blank" rel="noreferrer">Autenticador de Authy</a></li>
                    </ul>
                </p>
            </div>

            <div className="clr"></div>

            <Button className="mt-5 mb-5" href='Conocimientos'> Próxima Página</Button>
            <TwoFactorBread />
        </>
    )
}