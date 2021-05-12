import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSpring, animated } from 'react-spring';
import Navigbar from '../../Components/Navbar';
import TransactionsBread from './TransactionsBread';
import Scrollbar from './scrollbar';


export const TransactionsIntro = ()=> {
    const fade = useSpring({
        from: { opacity: 0}, 
        opacity: 1, 
        delay: 500,
    });

    return(
        <>
            <Navigbar />
            <Scrollbar />
            <div className="lightblue" id="trans1">
                <animated.div style={fade}>
                    <h1>
                        ¿Cómo podemos proteger nuestras <span>transacciones en línea</span>?
                    </h1>
                </animated.div>
            </div>
            
            <div className="lightblue">
                <p>
                    <animated.div style={fade}>
                        En los otros módulos ya hemos aprendido como asegurarnos de que las páginas que estamos visitando sean <strong><i>autenticas</i></strong> y como <strong><i>proteger nuestras cuentas en línea</i></strong>
                        <br></br>
                        <br></br>Ahora es tiempo de descubrir cómo <strong><i>protegernos financieramente</i></strong> porque transacciones en línea son cada vez mas común  
                        <br></br>
                        <br></br>Una de las formas más seguras para proteger su información de tarjetas de débito y crédito es usando una <strong><i>billetera digital</i></strong> 
                        <br></br>
                        <br></br>Existen varias ventajas y entre ellas son seguridad añadida y conveniencia 
                    </animated.div>
                </p>
            </div>
            <div className="clr"></div>

            <div className="verde" id="trans2">
                <animated.div style={fade}>
                    <h2>Terminal de Pago</h2>
                    <p>
                        Con una billetera digital usted puede pagar en persona usando su <strong><i>teléfono móvil</i></strong> en el terminal de pago y <i>verificando la compra</i>
                    </p>
                </animated.div>
            </div>
            <div className="white">
                <div className="terminal">
                    <img src="../Images/phone_terminal.jpg" alt="phone_terminal" /> 
                </div>
            </div>
            <div className="clr"></div>
            
            <div className="white">
                <div className="applepay">
                    <img src="../Images/apple_pay.png" alt="apple pay" /> 
                </div>
            </div>
            <div className="lightblue" id="trans3">
                <animated.div style={fade}>
                    <h2>Ampliamente Aceptado</h2>
                    <p>
                        Es seguro que usted ya ha visto tiendas que aceptan <strong><i>Apple Pay, Google Pay y Samsung Pay </i></strong>cuales son ejemplos de <i>billeteras digitales</i> 
                        <br></br>
                        <br></br>Estas billeteras son <strong><i>comúnmente aceptadas</i></strong>
                        <br></br>
                        <br></br><i>No necesita</i> tener todas sus <i>tarjetas de crédito</i> cuando puede <i>pagar</i> simplemente con su <i>teléfono móvil</i> 
                    </p>
                </animated.div>
            </div>
            <div className="clr"></div>

            <div className="rojo" id="trans4">
                <animated.div style={fade}>
                    <h2>Seguridad Añadida</h2>
                    <p>
                        Las billeteras digitales también están <strong><i>encriptadas</i></strong> cual significa que su 
                        información de tarjeta de crédito <strong><i>no es transmitida</i></strong> cuando hace un pago
                        <br></br>
                        <br></br>En su lugar, usan <strong><i>códigos de pago aleatorios</i></strong> para completar la transacción y <strong><i>proteger sus datos</i></strong> 
                    </p>
                </animated.div>
            </div>
            <div className="white">
                <div className="applepay">
                    <img src="../Images/encryption.jpeg" alt="encryption" /> 
                </div>
            </div>
            <div className="clr"></div>

            <div className="white">
                <div className="terminal">
                    <img src="../Images/peace_of_mind.jpg" alt="piece of mind" /> 
                </div>
            </div>
            <div className="morado" id="trans5">
                <animated.div style={fade}>
                    <h2>Protección de Empresas Conocidas</h2>
                    <p>
                        Esto es extremadamente útil porque cuando hace una compra en línea y tiene la opción de pagar usando una billetera digital,
                        puede pagar con ella <i>sin preocuparse de la capacidad</i> del sitio web para proteger su información 
                        <br></br>
                        <br></br>La <strong><i>encriptación</i></strong> de la billetera digital te protege ya que su pago es completado usando un <strong><i>código aleatorio</i></strong> de la billetera digital
                        <i> sin la necesidad de compartir</i> su información de tarjeta de crédito
                    </p>
                </animated.div>
            </div>
            <div className="clr"></div>

            <Button className="mt-5 mb-5" href='Conocimientos'> Próxima Página</Button>
            <TransactionsBread />
        </>
    )
};

export default TransactionsIntro;