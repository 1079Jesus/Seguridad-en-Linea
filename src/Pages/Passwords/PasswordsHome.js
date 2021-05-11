import React from 'react';
import { Button, Jumbotron, Breadcrumb} from 'react-bootstrap';
import Navigbar from '../../Components/Navbar';
import { useSpring, animated } from 'react-spring';
import PasswordBread from './PasswordBread';

export const PasswordsHome = ()=> {
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
                    <h1>Bienvenidos al Módulo de Contraseñas</h1>
                    <p>
                        En este módulo aprendemos cómo elegir contraseñas seguras y identificar las ventajas de usar un administrador de contraseñas
                    </p>
                </animated.div>
                <Button className="mt-5 mb-5" href='Contrasenas/Seguridad'> Próxima Página</Button>
            </Jumbotron>
            <PasswordBread />
        </>
    )
}