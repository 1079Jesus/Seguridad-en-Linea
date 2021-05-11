import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import "./PhishingEmail.css";
import Navigbar from '../../Components/Navbar';
import PhishingBread from './PhishingBread';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';     
import Scrollbar from "./scrollbar"; 
import { useSpring, animated } from 'react-spring';
import Buffer from "./Buffer";


const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
        </Popover.Content>
    </Popover>
);

const asunto = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Asunto del Correo Electrónico</Popover.Title>
        <Popover.Content>
            <p>
                El asunto del correo electrónico es mostrado como el <strong><i>"Asunto"</i></strong> en el mensaje.
                <br></br>
                <br></br>Típicamente es usado para darle al lector una idea del <i>propósito del mensaje</i>.
                <br></br>
                <br></br>El asunto, <strong><i>"Verificación de cuenta,"</i></strong> no es sospechoso porque puede ser una actualización de routina de la empresa
                <br></br>
                <br></br>Sí, es posible que el asunto pudo haber incluido "PayPal" en la descripción pero muchas empresas no incluyen su nombre en el asunto 
                ya que la <i>dirección del correo electrónico</i> contiene la información del remitente.
            </p>
        </Popover.Content>
    </Popover>
  );
  
const remitente = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Remitente del Correo Electrónico</Popover.Title>
        <Popover.Content>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Nombre de usario</th>
                    <th>Nombre de dominio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>paypal</td>
                    <td>notificaciones</td>
                    </tr>
                </tbody>
            </Table>
            <p>
                El remitente del correo electrónico es mostrado como el <strong><i>"De"</i></strong> en el mensaje.
                <br></br>
                <br></br>Un corréo electrónico tiene <i>dos partes claves</i>, el <strong><i>nombre de usario</i></strong> y el <strong><i>nombre de dominio</i></strong>.
                <br></br>
                <br></br>La parte sospechosa de este correo electrónico es el nombre de dominio porque <strong><i>"notificaciones"</i></strong> no es algo específico para PayPal.
                Ese nombre de dominio puede aplicar para muchas cosas incluyendo hacia su programa favorito de televisión.
                <br></br>
                <br></br>Un <i>correo electrónico auténtico</i> de PayPal tendría el <strong><i>nombre de la empresa</i></strong> en el dominio para indicar que el remitente del correo electrónico es de la compañía.
            </p>
        </Popover.Content>
    </Popover>
);


export const PhishingEjemplo = ()=> {
    const fade = useSpring({
        from: { opacity: 0}, 
        opacity: 1, 
        delay: 500,
    });
    return(
        <>
            <Navigbar />
            <Scrollbar />
            <div className="lightblue" id="phishing1">
                <animated.div style={fade}>
                    <h1>
                        ¿Qué es un <span>correo electrónico phishing</span>?
                    </h1>
                </animated.div>
            </div>
            <div className="lightblue">
                <animated.div style={fade}>
                    <p>
                        "El correo electrónico phishing es una técnica que consiste en engañar al usuario para robar información confidencial, claves de acceso, datos bancarios, entre otros, haciéndole creer que está en un sitio de confianza."
                        <br></br>-Internet Ya
                        <br></br>
                        <br></br> Arriba está una definición para los correos electrónicos de phishing que demuestra lo peligroso que puede ser ser estafado por unos de estos e-mails. 
                        <br></br> 
                        <br></br>Por esta razón, en este módulo aprenderemos como identificar correos electrónicos phishing. 
                    </p>
                </animated.div>
            </div>

            {/* <Buffer /> */}
            {/* <div className="buffer" id="phishing2">stuf</div> */}

            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail" id="phishing2a">
                    <Form.Label column sm="2">
                    Para
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="usted@correo.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" id="phishing2b">
                    <Form.Label column sm="2">
                    <OverlayTrigger trigger="click" placement="right" overlay={remitente}>
                        <Button variant="success">De</Button>
                    </OverlayTrigger>
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="paypal@notificaciones.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" id="phishing2c">
                    <Form.Label column sm="2">
                    Fecha
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="Abril 8, 2021" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" id="phishing2d">
                    <Form.Label column sm="2">
                    <OverlayTrigger trigger="click" placement="right" overlay={asunto}>
                        <Button variant="success">Asunto</Button>
                    </OverlayTrigger>
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="Verificación de cuenta" />  
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextEmail" id="phishing2e">
                    <Form.Label column sm="2">
                    Mensaje
                    </Form.Label>
                    <Col class="text-left"> 
                    <div className='pbox'>
                        <h1>Verificación de cuenta</h1>
                        <hr/>
                        <h2>Abril 8, 2021</h2>
                        <h3>paypal@notificaciones.com</h3>
                        <br></br>
                        <b>Estimado Cliente,</b>
                        <p>Necesitamos su ayuda para resolver un problema con su cuenta de PayPal.
                        Por el momento, hemos congelado su cuenta hasta que verifique sus datos de su cuenta bancaria vinculada. 
                        Tiene 48 horas para ingresar al siguiente enlace y verificar su información, de no hacerlo su cuenta será cerrada. </p>
                        <a href="./Paypal">https://www.paypal.com/us/home</a>
                        <br></br>
                        <p>Su equipo de PayPal </p>
                        <p>© 2021 PayPal Inc. All rights reserved</p>
                    </div>
                    </Col>
                </Form.Group>
            </Form>
            
            <div className="verde" id="phishing3">
                <animated.div style={fade}>
                    <p>
                        Unos correos electrónicos de phishing contienen varios <strong><i>errores de gramática o de ortografía</i></strong>
                        <br></br>
                        <br></br>Esto es un poco más fácil de identificar pero la estrategía es que las personas que son engañadas a pesar de que existen muchos errores en el correo electrónico son más crédulas
                        <br></br>
                        <br></br>Entonces funciona como un <i>sistema de filtrado</i> para que los ladrones se enfoquen en esas personas que tienen más probabilidades de ser estafados
                    </p>
                </animated.div>
            </div>
            <div className="white">
                <div className="http">
                    <img src="../Images/scam-emails.jpg" alt="email" /> 
                </div>
            </div>
            <div className="clr"></div>   
            
            <div className="morado" id="phishing4">
                <animated.div style={fade}>
                    <p>
                        <strong>Sensación de Urgencia del Correo Electrónico</strong>
                        <br></br>
                        Una de las características típicas de los correos electrónicos de phishing es la <strong><i>sensación de urgencia</i></strong>
                        <br></br>
                        <br></br>El ejemplo de PayPal arriba crea una sensación de urgencia dandole <i>sólo 48 horas</i> para actuar y de no hacerlo, <i>"su cuenta será cerrada"</i>
                    </p>
                </animated.div>
            </div>
            <div className="morado">
                <animated.div style={fade}>
                    <p>
                        Sí, es posible que una empresa intente contactarlo por una cosa urgente pero también tienen <i>otras maneras de comunicarse</i> con usted
                        <br></br>
                        <br></br>Pero también le darían <i>más de 48 horas</i> por si acaso usted no puede responderles antes
                        <br></br>
                        <br></br>Entonces cuando tenga duda de si algo es real o no, la mejor cosa que puede hacer es <i>contactar a la empresa <strong>directamente</strong></i> usando la información de contacto de su página y no la del correo electrónico 
                    </p>
                </animated.div>
            </div>
            <div className="clr"></div>  
            <Button className="mt-5 mb-5" href='./Conocimientos'> Próxima Página</Button>
            <PhishingBread />
        </>
    )
};