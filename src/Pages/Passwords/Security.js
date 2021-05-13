import React from 'react';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import PasswordBread from './PasswordBread';
import Scrollbar from "./scrollbar";
import { useSpring, animated } from 'react-spring';

export const Security = ()=> {
    const fade = useSpring({
        from: { opacity: 0}, 
        opacity: 1, 
        delay: 500,
    });

    return(
        <>
            <Navigbar />
            <Scrollbar />
            <div className="lightblue" id="security1">
                <animated.div style={fade}>
                    <h1>El Internet es cada vez <span>más relevante </span>en nuestra vida diaria</h1>
                </animated.div>
            </div>

            <div className="lightblue">
                <p>
                    <animated.div style={fade}>
                        <strong>Por esta razón</strong> es necesario tener buenas prácticas con nuestras contraseñas
                        <br></br>
                        <br></br>
                        <strong>Muchos sitios web</strong> recomiendan usar letras mayúsculas y minúsculas al igual que números y caracteres especiales
                        <br></br>
                        <br></br>
                        <strong>Unas páginas </strong>también recomiendan que se actualicen o cambian las constraseñas
                    </animated.div>
                </p>
            </div>
            
            <div className="clr"> </div>
            
            <div className="verde" id="security2">
                <p>
                    <animated.div style={fade}>
                        Además de hacer todo esto,
                        <br></br>
                        necesita <b><i>recordar todas las claves para todas sus cuentas </i></b>
                        <br></br>
                        y no es buena idea tener la misma clave para todo 
                        <br></br>
                        porque un <strong><i>ladrón </i></strong>puede acceder <strong>todas sus cuentas </strong>con una simple clave 
                    </animated.div>
                </p>
            </div>

            <div className="white">
                <img src="../Images/hacker.jpeg" alt="hacker" />
            </div>
            
            <div className="clr"> </div>

            <div className="negro" id="security3">    
                <p>
                    <animated.div style={fade}>
                        No debería escribir sus claves en una libreta tampoco porque si se pierde el cuaderno, también se pierden todas sus claves en él 
                        <br></br>¿Entonces cuál es la mejor manera de tener contraseñas únicas y dificil de adivinar para todas sus cuentas?
                        <br></br>
                        <span><b><i>¡Un administrador de contraseñas! </i></b></span>
                    </animated.div>
                </p>
            </div>

            <div className="clr"> </div>
            <div className="lightblue" id="security4">
                <h1>
                    <animated.div style={fade}>
                        ¿Qué es un <span>administrador de contraseñas</span>?
                    </animated.div>
                </h1>
            </div>

            <div className="lightblue">
                <p>
                    <animated.div style={fade}>
                        <strong><i>Un administrador de contraseñas </i></strong> es una herramienta para 
                        <br></br>
                        <strong>almacenar y generar contraseñas complejas </strong> 
                        <br></br>
                        <br></br>
                        Cuando necesite una contraseña nueva, 
                        <br></br>
                        el administrador le puede <strong><i>generar </i></strong>una y también <strong><i>agregaría</i></strong> esos credenciales para esa cuenta en su sistema
                    </animated.div>
                </p>
            </div>

            <div className="clr"></div>
            <div className="verde" id="security5">
                <p>
                    <animated.div style={fade}>
                        Funciona como <strong><i>una caja fuerte </i></strong>
                        <br></br> que protege todas sus contraseñas con el uso de <strong><i>cifrado</i></strong>
                        <br></br> Para aceder las credenciales de accesso require 
                        <br></br> <strong><i>una contraseña "maestra"</i></strong>
                        <br></br>
                        <br></br>
                        Entonces lo único que debe de hacer es recordar <strong><i>una contraseña compleja y segura </i></strong> 
                        y el administrador de contraseñas se encarga de todo lo demás
                    </animated.div>
                </p>
            </div>
            
            <div className="white">
                <img src="../Images/safe.jpg" alt="Safe" /> 
            </div>

            <div className="clr"> </div>

            <div className="negro" id="security6">
                <p>
                    <animated.div style={fade}>
                        El administrador de contraseñas podría tener sus <strong><i>credenciales de accesso</i></strong> 
                        <br></br>para sus cuentas de Amazon, Apple, Facebook, Gmail, etcétera
                        <br></br>
                        <br></br>
                        A continuación encontrará administradores de contraseñas recomendados:
                        <ul>
                            <li><a href="https://1password.com/es/" target="_blank" rel="noreferrer">1Password</a> </li>
                            <li><a href="https://www.lastpass.com/es/" target="_blank" rel="noreferrer">LastPass</a> </li>
                            <li><a href="https://bitwarden.com/" target="_blank" rel="noreferrer">Bitwarden</a> </li>
                        </ul>
                    </animated.div>
                </p>
            </div>
            <div className="clr"> </div>
            <Button className="mt-5 mb-5" href='Conocimientos'> Próxima Página</Button>
            <PasswordBread />
        </>
    )
}