import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import WebBread from './WebBread';

export const WebQuiz = () => {
    return(
        <>
            <Navigbar />
            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #1</Card.Title>
                    <Card.Text>
                    ¿Es más seguro el protocolo HTTP que el HTTPS?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Verdadero
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta no es correcta. El HTTP no tiene datos cifrado y entonces información se puede robar fácilmente. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Falso
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta. El HTTPS crea una conexión segura entre el servidor web y el navegador. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #2</Card.Title>
                    <Card.Text>
                    ¿Cuál de los siguientes enlaces es el correcto Facebook: http://www.faceabook.com/, https://www.facebook.com/?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                http://www.faceabook.com/
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta no es correcta. El protocolo usado es HTTP y también el nombre del dominio es Faceabook, no Facebook. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                https://www.facebook.com/
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta. El protocolo usado es HTTPS y también el nombre del dominio es correcto: Facebook.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>
            <Button className='mt-5 mb-5' href='..'> Próxima Página</Button>    
            <WebBread />
        </>
    )
}