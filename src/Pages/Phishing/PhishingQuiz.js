import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import PhishingBread from './PhishingBread';

export const PhishingQuiz = () => {
    return(
        <>
            <Navigbar />
            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #1</Card.Title>
                    <Card.Text>
                    ¿Cuál delos siguientes es más importante leer, por su seguridad, de un correo electrónico: el remitente o el asunto?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                El remitente
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta es correcta, el "de" de un correo electrónico revela el nombre de usario y el nombre de dominio que demuestran la identidad real del remitente.  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                El asunto
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta no es correcta, porque el asunto solamente dá el propósito del mensaje y no revela de quien veraderamente origina el correo electrónico. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #2</Card.Title>
                    <Card.Text>
                    ¿Cuáles de las siguientes son características típicas de un correo electrónico de phishing: errores gramaticales o ortográficos, sensación de urgencia o ambos?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Errores gramaticales o ortográficos
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta es correcta pero existe otra mejor respuesta. Errores gramaticales o ortográficos son un poco más fácil de identificar pero son cosas que debería de tener cuidado con si las identifica. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Sensación de urgencia
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta pero existe otra mejor respuesta. La sensación de urgencia que crean los correos electrónicos phishing son algo común porque quieren que usted actúe al impulso. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                Ambos
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>Esta respuesta es la mejor opción porque ambos errores gramaticales o ortográficos y sensación de urgencia son estrategias típicas de correos electrónicos phishing. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>
            <Button className='mt-5 mb-5' href='..'> Próxima Página</Button>    
            <PhishingBread />
        </>
    )
}