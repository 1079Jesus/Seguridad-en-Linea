import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Navigbar from '../../Components/Navbar';
import TransactionsBread from './TransactionsBread';

export const TransactionsQuiz = () => {
    return(
        <>
            <Navigbar />
            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #1</Card.Title>
                    <Card.Text>
                    ¿Es buena idea compartir su información de tarjeta de crédito con todas las páginas en las que hace compras?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Sí
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta no es correcta porque no todas las páginas tienen la misma capacidad de proteger sus datos exitosamente. </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                No
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta porque su billetera digital le dá la opción de hacer compras sin compartir su información de tarjeta de crédito directamente con la página.  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Conocimientos #2</Card.Title>
                    <Card.Text>
                        ¿Una billetera digital comparte su información de tarjeta de crédito por usted cuando hace compras?
                    </Card.Text>
                    <Accordion>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Sí
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Esta respuesta no es correcta porque uno de los propósitos de una billetera digital es proteger su información usando encriptación y compartiendo sus datos va contra este propósito.  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                No
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Esta respuesta es correcta porque su información de tarjeta de crédito no es transmitida cuando hace un pago, en su lugar usan códigos de pago aleatorios para completar la transacción y proteger sus datos.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Card.Body>
            </Card>
            <Button className='mt-5 mb-5' href='..'> Próxima Página</Button>    
            <TransactionsBread />
        </>
    )
}