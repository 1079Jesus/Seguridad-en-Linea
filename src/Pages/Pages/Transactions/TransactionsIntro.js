import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSpring, animated } from 'react-spring';
// import Toggle from './Toggle';

import { Card, CardColumns } from 'react-bootstrap';
import Navigbar from '../../Components/Navbar';
import TransactionsBread from './TransactionsBread';

const NewToggle = ()=> {
    const [isToggled, setToggle] = useState(false);
    const fade = useSpring({
        // opacity: isToggled ? 1 : 0,
        // fontSize: isToggled ? '2rem' : '20rem',
        color: isToggled ? '#000' : 'green',
        // transform: isToggled ? 'translate3d(0, 50px ,0)' : 'translate3d(0, -50px, 0)'
    });

    return(
        <>
            <div> 
                <animated.h1 style={fade}>
                Ahora es tiempo de descubrir cómo protegernos financieramente porque transacciones en línea son cada vez mas común especialmente con el crecimiento del comercio electrónico. 
                </animated.h1>
                <button onClick={() => setToggle(!isToggled)}>Toggle</button>
            </div>
        </>
    );
};

export const TransactionsIntro = ()=> {
    const fade = useSpring({from: { opacity: 0}, opacity: 1});
    return(
        <>
            <Navigbar />
            <animated.div style={fade}>
                En los otros módulos ya hemos aprendido como asegurarnos de que las páginas que estamos visitando sean autenticas y como proteger nuestras cuentas en línea.
            </animated.div>
            <animated.div style={fade}>
                Ahora es tiempo de descubrir cómo protegernos financieramente porque transacciones en línea son cada vez mas común especialmente con el crecimient o del comercio electrónico. 
            </animated.div>
            <div>
                <NewToggle />
            </div>

            <div>
                Para proteger su información de tarjetas de débito y crédito existe la billetera digital. 
                Existen varias ventajas y entre ellas son conveniencia y seguridad añadida.
            </div>

            <CardColumns>
                    <Card>
                        <Card.Body>
                            <Card.Title>Terminal de Pago</Card.Title>
                            <Card.Img varinat="top" src="../Images/phone_terminal.JPG"/>
                            <animated.div style={fade}>
                                Con una billetera digital usted puede pagar en persona usando su teléfono móvil en el terminal de pago y verificando la compra. 
                            </animated.div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Ampliamente Aceptado</Card.Title>
                            <Card.Img varinat="top" src="../Images/apple_pay.png"/>
                            <Card.Text>
                                Es seguro que usted ya ha visto tiendas que aceptan <strong>Apple Pay, Google Pay y Samsung Pay </strong>cuales son ejemplos de billeteras digitales. 
                                Estas billeteras son comúnmente aceptadas entonces no necesita tener todas sus tarjetas de crédito con usted cuando puede pagar simplemente con su teléfono móvil. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Seguridad Añadida</Card.Title>
                            <Card.Img varinat="top" src="../Images/encryption.jpeg"/>
                            <Card.Text>
                                Las billeteras digitales también están encriptadas cual significa que su información de tarjeta de crédito no son transmitidos cuando hace un pago. En su lugar, usan códigos de pago aleartorios para completar la transacción y proteger sus datos. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Protección de Empresas Conocidas</Card.Title>
                            <Card.Img varinat="top" src="../Images/peace_of_mind.jpg"/>
                            <Card.Text>
                                Esto es extremadamente útil porque cuando hace una compra en línea y tiene la opción de pagar usando una billetera digital, puede pagar con ella sin  preocuparse de la capacidad del sitio web para proteger su información porque la encriptación de la billetera digital te protege.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            <Button href='Conocimientos'> Próxima Página</Button>
            <TransactionsBread />
        </>
    )
};

export default TransactionsIntro;