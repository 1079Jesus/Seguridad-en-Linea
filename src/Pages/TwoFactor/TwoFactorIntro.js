import React from 'react';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import TwoFactorBread from './TwoFactorBread';
import { useSpring, animated } from 'react-spring';
import Scrollbar from './scrollbar';

export const TwoFactorIntro = ()=> {
    const fade = useSpring({
        from: { opacity: 0}, 
        opacity: 1, 
        delay: 500,
    });
    return(
        <>
            <Navigbar />
            <Scrollbar />
            <div className="lightblue" id="two1">
                <h1>
                    <animated.div style={fade}>
                        ¿Qué es <span>autenticación de dos factores</span>?
                    </animated.div>
                </h1>
                <p>
                    <animated.div style={fade}>
                        Autenticación de dos factores es un <strong><i>método de autenticación electrónica</i></strong> cual requiere <i>dos pedazos de evidencia</i>
                        <br></br>
                        <br></br> 
                        Comunmente estos dos son una contraseña y un <strong><i>código de una sola vez</i></strong> mandado a un <i>correo electrónico</i> o <i>número de teléfono </i> 
                        atado a la cuenta que se está pidiendo permiso acceder
                    </animated.div>
                </p>
            </div>

            <div className="lightblue">
                <p>
                    <animated.div style={fade}>
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
                    </animated.div>
                </p>
            </div>

            <div className="clr"></div>

            <div className="verde" id="two2">
                <p>
                    <animated.div style={fade}>
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
                    </animated.div>
                </p>
            </div>

            <div className="white">
                <img src="../Images/Two-Factor.png" alt="two factor" />
            </div>

            <div className="clr"></div>

            <div className="skyblue" id="two3">
                <p>
                    <animated.div style={fade}>
                        <h1>¿<span>Cómo funciona?</span></h1>
                        <br></br>
                        Autenticación de dos factores asegura que <strong><i>solamente usted pueda acceder</i></strong> su cuenta en un <strong><i>dispositivo confiable</i></strong>
                        <br></br>
                        <br></br>
                        Para ingresar a su cuenta, necesita su <strong><i>contraseña y código</i></strong> enviado a su <i>correo electrónico</i> o <i>número de teléfono</i>
                        <br></br>
                        <br></br>
                        Entonces habilitar autenticación de dos factores te <i>protege si alguien <strong>adivina</strong></i> tus contraseñas
                    </animated.div>
                </p>
            </div>

            <div className="skyblue">
                <p>
                    <animated.div style={fade}>
                        <h2>En el caso de que alguien <strong><i>no autorizado</i></strong> conozca su clave:</h2>
                        Usted <strong><i>será notificado</i></strong> cuando el código sea enviado y realizará que alguien más conoce su contraseña
                        <br></br>
                        <br></br>Entonces el ladrón <strong><i>no podrá ingresar</i></strong> sin <i>su autorización</i>
                        <br></br>
                        <br></br>Al final, usted tendrá que <strong><i>actualizar su contraseña</i></strong> fácilmente usando su <i>administrador de contraseñas</i>
                    </animated.div>
                </p>
            </div>
            <div className="clr"></div>

            <Button className="mt-5 mb-5" href='Conocimientos'> Próxima Página</Button>
            <TwoFactorBread />
        </>
    )
}