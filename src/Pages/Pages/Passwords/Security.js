import React from 'react';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import PasswordBread from './PasswordBread';

export const Security = ()=> {
    return(
        <>
            <Navigbar />
            <div className="lightblue">
                <h1>El Internet es cada vez <span>más relevante </span>en nuestra vida diaria</h1>
            </div>

            <div className="lightblue">
                <p>
                    <strong>Por esta razón</strong> es necesario tener buenas prácticas con nuestras contraseñas
                    <br></br>
                    <br></br>
                    <strong>Muchos sitios web</strong> recomiendan usar letras mayúsculas y minúsculas al igual que números y caracteres especiales
                    <br></br>
                    <br></br>
                    <strong>Unas páginas </strong>también recomiendan que se actualicen o cambian las constraseñas
                </p>
            </div>
            
            <div className="clr"> </div>

            <div className="verde">
                <p>
                    Además de hacer todo esto,
                    <br></br>
                    necesita <b><i>recordar todas las claves para todas sus cuentas </i></b>
                    <br></br>
                    y no es buena idea tener la misma clave para todo 
                    <br></br>
                    porque un <strong><i>ladrón </i></strong>puede acceder <strong>todas sus cuentas </strong>con una simple clave 
                </p>
            </div>

            <div className="white">
                <div className="hacker">
                    <img src="../Images/hacker.jpeg" alt="hacker" />
                </div>
            </div>
            
            <div className="clr"> </div>

            <div className="negro">    
                <p>
                    No debería escribir sus claves en una libreta tampoco porque si se pierde el cuaderno, también se pierden todas sus claves en él 
                    <br></br>¿Entonces cuál es la mejor manera de tener contraseñas únicas y dificil de adivinar para todas sus cuentas?
                    <br></br>
                    <span><b><i>¡Un administrador de contraseñas! </i></b></span>
                </p>
            </div>

            <div className="clr"> </div>
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
                    <br></br>
                    <br></br>
                    Cuando necesite una contraseña nueva, 
                    <br></br>
                    el administrador le puede <strong><i>generar </i></strong>una y también <strong><i>agregaría</i></strong> esos credenciales para esa cuenta en su sistema
                </p>
            </div>

            <div className="clr"></div>
            <div className="verde">
                <p>
                    Funciona como <strong><i>una caja fuerte </i></strong>
                    <br></br> que protege todas sus contraseñas con el uso de <strong><i>cifrado</i></strong>
                    <br></br> Para aceder las credenciales de accesso require 
                    <br></br> <strong><i>una contraseña "maestra"</i></strong>
                    <br></br>
                    <br></br>
                    Entonces lo único que debe de hacer es recordar <strong><i>una contraseña compleja y segura </i></strong> 
                    y el administrador de contraseñas se encarga de todo lo demás
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
                    El administrador de contraseñas podría tener sus <strong><i>credenciales de accesso</i></strong> 
                    <br></br>para sus cuentas de Amazon, Apple, Facebook, Gmail, etcétera
                    <br></br>
                    <br></br>
                    A continuación encontrará administradores de contraseñas recomendados:
                    <ul>
                        <li><a href="https://bitwarden.com/" target="_blank" rel="noreferrer">Bitwarden</a> </li>
                        <li><a href="https://www.lastpass.com/" target="_blank" rel="noreferrer">LastPass</a> </li>
                        <li><a href="https://1password.com/" target="_blank" rel="noreferrer">1Password</a> </li>
                    </ul>
                </p>
            </div>
            <div className="clr"> </div>
            <Button className="mt-5 mb-5" href='Instalar'> Próxima Página</Button>
            <PasswordBread />
        </>
    )
}