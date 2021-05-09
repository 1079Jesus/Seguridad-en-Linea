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
                    No debería escribir sus claves en una libreta tampoco porque si se pierde el cuaderno, también se pierden todas sus claves en él. 
                    <br></br>¿Entonces cuál es la mejor manera de tener contraseñas únicas y dificil de adivinar para todas sus cuentas?
                    <br></br>
                    <span><b><i>¡Un administrador de contraseñas! </i></b></span>
                </p>
            </div>

            <div className="clr"> </div>
            <Button className="mt-5 mb-5" href='Administrador'> Próxima Página</Button>
            <PasswordBread />
        </>
    )
}