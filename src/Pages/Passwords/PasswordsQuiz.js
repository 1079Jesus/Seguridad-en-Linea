import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import PasswordBread from './PasswordBread';

export const PasswordsQuiz = () => {
    return(
        <>
            <Navigbar />
            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #1</Card.Title>
                    <Card.Text>
                        ¿Es buena idea tener la misma clave para todas sus cuentas?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Verdadero
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta no es correcta porque un ladrón puede acceder todas sus cuentas con una simple clave.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Falso
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta, es mejor tener diferentes contraseñas complejas para todas sus cuentas y un administrador de contraseñas hace exactamente eso por usted. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #2</Card.Title>
                    <Card.Text>
                    ¿Requiere acordarse de todas sus diferentes contraseñas que están en su administrador de contraseñas?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Sí
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta no es correcta, una de las ventajas del administrador de contraseñas es que él guarda todas sus claves por usted como una caja fuerte.  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                No
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta, usted puede ver las credenciales de accesso en el administrador de contraseñas con su contraseña "maestra."</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>
            <Button className='mt-5 mb-5' href='..'> Próxima Página</Button>    
            <PasswordBread />
        </>
    )
}