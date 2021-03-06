import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import WebBread from './WebBread';
import Facebook from './newFacebook';
import Window from '../../Components/Window';
import Scrollbar from './scrollbar';
import { useSpring, animated } from 'react-spring';

export const WebAuthenticity = ()=> {
    const fade = useSpring({
        from: { opacity: 0}, 
        opacity: 1, 
        delay: 500,
    });
    return(
        <>
            <Navigbar />
            <Scrollbar />
            <div className="buffer"></div>
            <Window Content={Facebook}/>
            <div className="lightblue" id="web1">
                <animated.div style={fade}>
                    <h1>
                        ¿Comó identificar la <span>autenticidad </span>de un sitio web?
                    </h1>
                </animated.div>
            </div>
            <div className="lightblue">
                <p>
                    <animated.div style={fade}>
                        En la ventana del navegador arriba, 
                        <br></br>puede ver una página que parece ser <strong><i>facebook.com </i></strong> 
                        <br></br>pero en el enlace puede ver <strong><i>https://www.facebooks.com</i></strong>
                        <br></br>
                        <br></br>
                        <strong>El enlace</strong> está compuesto principalmente por <i>cuatro partes:</i> 
                        <br></br><strong><i>el protocolo</i></strong> 
                        <br></br><strong><i>nombre de dominio</i></strong>
                        <br></br><strong><i>extensión del sitio web </i></strong>
                        <br></br><strong><i>los subdirectorios de la página </i></strong>
                    </animated.div>
                </p>
            </div>

                <Table striped bordered hover variant="dark" id="web2">
                    <thead>
                        <tr>
                        <th>Protocolo</th>
                        <th>Nombre de dominio</th>
                        <th>Extensión</th>
                        <th>Subdirectorios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>https</td>
                            <td>facebooks</td>
                            <td>com</td>
                            <td>no aplica</td>
                        </tr>
                        <tr>
                            <td>https</td>
                            <td>facebook</td>
                            <td>com</td>
                            <td>joebiden</td>
                        </tr>
                    </tbody>
                </Table>

            <div className="verde" id="web3">
                <p>
                    <animated.div style={fade}>
                        <strong>Protocolo</strong>
                        <br></br>
                        Generalmente se usan <i>dos protocolos</i>, el <strong><i>HTTP</i></strong> y el <strong><i>HTTPS</i></strong>
                        <br></br>Hablaremos un poco más sobre cada uno despúes
                        <br></br>
                        <br></br>
                        <strong>Nombre de dominio</strong>
                        <br></br> El nombre de dominio es un <strong><i>nombre único</i></strong> y registrado para poder identificar la página que está usando con <i>seguridad</i> de que es <i>auténtica</i> 
                    </animated.div>
                </p>
            </div>
            <div className="verde">
                <p>
                    <animated.div style={fade}>
                        <strong>Extensión</strong>
                        <br></br> La extensión del enlace sigue el nombre de dominio y existen muchos incluyendo <i>.com</i>, <i>.edu</i> y <i>.gov</i> 
                        <br></br> Cada uno representa el <strong><i>propósito</i></strong> de la página 
                        <br></br> Por ejemplo, <i>.com</i> es para uso <strong><i>comercial</i></strong>, <i>.edu</i> es para uso de <strong><i>instituciones educativas</i></strong> y <i>.gov</i> para uso de <strong><i>gobiernos</i></strong> 
                        <br></br>
                        <br></br>
                        <strong>Subdirectorios</strong>
                        <br></br> Los subdirectorios son para la <strong><i>jerarquía del sitio</i></strong>, por ejemplo
                        <a href="https://www.facebook.com/joebiden" target="_blank" rel="noreferrer"> https://www.facebook.com/joebiden</a> seria la página de Facebook de Joe Biden
                    </animated.div>
                </p>
            </div>

            <div className="clr"></div>       
            <div className="skyblue" id="web4">
                <p>
                    <animated.div style={fade}>
                        <strong>HTTP</strong>
                        <br></br>
                        <br></br>HTTP significa <strong><i>Protocolo de Transferencia de Hipertexto</i></strong> cual es el <i>protocolo de comunicación</i> de la red informática mundial 
                        <br></br>
                        <br></br>HTTP también es el <strong><i>antiguo predeterminado y no es seguro</i></strong>
                        <br></br>
                        <br></br>Por ejemplo, si una página usando el prótocolo de HTTP pide sus datos de tarjeta de crédito, 
                        <br></br>no debería confiar en ese sitio para <i>información sensible</i> 
                    </animated.div>
                </p>
            </div>
            <div className="white">
                <img src="../Images/http.svg" alt="http" /> 
            </div>

            <div className="clr"></div>
            <div className="white">
                <img src="../Images/https.jpg" alt="https" /> 
            </div>
            <div className="verde" id="web5">
                <p>
                    <animated.div style={fade}>
                        <strong>HTTPS</strong>
                        <br></br>
                        <br></br>HTTPS significa <strong><i>Protocolo de Transferencia de Hipertexto Seguro</i></strong> y es un protocolo basado en el HTTP con el propósito de la <i>transferencia segura de datos</i> 
                        <br></br>
                        <br></br>Al igual que el HTTP, el HTTPS es usado para transferir información del servidor web al navegador para que el usario pueda ver las páginas
                        <br></br>
                        <br></br>El HTTPS también <i>evita que los ladrones lean la información</i> que está compartiendo con el sitio, por ejemplo su información de tarjeta de crédito 
                    </animated.div>
                </p>
            </div>

            <div className="clr"></div>
            <Button className="mt-5 mb-5" href='conocimientos'> Próxima Página</Button>
            <WebBread />
        </>
    )
}