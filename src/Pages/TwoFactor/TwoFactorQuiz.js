import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import TwoFactorBread from './TwoFactorBread';

export const TwoFactorQuiz = () => {
    return(
        <>
            <Navigbar />
            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #1</Card.Title>
                    <Card.Text>
                    ¿Puede acceder sus cuentas simplemente con su contraseña cuando tiene autenticación de dos factores activado?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Sí
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta no es correcta porque el propósito de autenticación de dos factores es que requiere dos pedazos de evidencia para acceder sus cuentas incluyendo su contraseña y código de una sola vez, por ejemplo.  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                No
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta porque autenticación de dos factores requiere dos pedazos de evidencia para acceder sus cuentas y es útil en el caso de que un ladrón sepa su contraseña porque no podrá acceder su cuenta sin su permiso.  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #2</Card.Title>
                    <Card.Text>
                        ¿Un código de una sola vez puede ser compartido porque no es algo sensativo como su contraseña?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Verdadero
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta no es correcta porque el código también es igual de importante para acceder sus cuentas.  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Falso
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta porque el código es enviado solamente hacia usted para que solamente usted pueda acceder su cuenta después de proporcionar la correcta contraseña. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>
            <Button className='mt-5 mb-5' href='..'> Próxima Página</Button>    
            <TwoFactorBread />
        </>
    )
}