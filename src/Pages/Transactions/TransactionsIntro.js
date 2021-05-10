import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useSpring, useTrail, animated } from 'react-spring';
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
    const fade = useSpring({
        from: { opacity: 0}, 
        opacity: 1, 
        delay: 500,
    });
    // const trail = useTrail(2, { opacity: 1 });
    // return trail.map(styles => 
    //     <animated.div style={styles}> 
    //                     <div className="lightblue">
    //             <h1>
    //                 ¿Cómo podemos proteger nuestras <span>transacciones en línea</span>?
    //             </h1>
    //         </div>
            
    //         <div className="lightblue">
    //             <p>
    //                 <animated.div style={fade}>
    //                     En los otros módulos ya hemos aprendido como asegurarnos de que las páginas que estamos visitando sean <strong><i>autenticas</i></strong> y como <strong><i>proteger nuestras cuentas en línea</i></strong>
    //                     <br></br>
    //                     <br></br>Ahora es tiempo de descubrir cómo <strong><i>protegernos financieramente</i></strong> porque transacciones en línea son cada vez mas común  
    //                     <br></br>
    //                     <br></br>Una de las formas más seguras para proteger su información de tarjetas de débito y crédito es usando una billetera digital 
    //                     <br></br>
    //                     <br></br>Existen varias ventajas y entre ellas son seguridad añadida y conveniencia 
    //                 </animated.div>
    //             </p>
    //         </div>
    //     </animated.div>)
    return(
        <>
            <Navigbar />
            <div className="lightblue">
                <h1>
                    ¿Cómo podemos proteger nuestras <span>transacciones en línea</span>?
                </h1>
            </div>
            
            <div className="lightblue">
                <p>
                    <animated.div style={fade}>
                        En los otros módulos ya hemos aprendido como asegurarnos de que las páginas que estamos visitando sean <strong><i>autenticas</i></strong> y como <strong><i>proteger nuestras cuentas en línea</i></strong>
                        <br></br>
                        <br></br>Ahora es tiempo de descubrir cómo <strong><i>protegernos financieramente</i></strong> porque transacciones en línea son cada vez mas común  
                        <br></br>
                        <br></br>Una de las formas más seguras para proteger su información de tarjetas de débito y crédito es usando una billetera digital 
                        <br></br>
                        <br></br>Existen varias ventajas y entre ellas son seguridad añadida y conveniencia 
                    </animated.div>
                </p>
            </div>
            <div className="clr"></div>

            {/* <div>
                <NewToggle />
            </div> */}

            <div className="verde">
                <h2>Terminal de Pago</h2>
                <p>
                    Con una billetera digital usted puede pagar en persona usando su <strong><i>teléfono móvil</i></strong> en el terminal de pago y <i>verificando la compra</i>
                </p>
            </div>
            <div className="white">
                <div className="terminal">
                    <img src="../Images/phone_terminal.JPG" alt="phone_terminal" /> 
                </div>
            </div>
            <div className="clr"></div>
            
            <div className="white">
                <div className="applepay">
                    <img src="../Images/apple_pay.png" alt="apple pay" /> 
                </div>
            </div>
            <div className="lightblue">
                <h2>Ampliamente Aceptado</h2>
                <p>
                    Es seguro que usted ya ha visto tiendas que aceptan <strong><i>Apple Pay, Google Pay y Samsung Pay </i></strong>cuales son ejemplos de <i>billeteras digitales</i> 
                    <br></br>
                    <br></br>Estas billeteras son <strong><i>comúnmente aceptadas</i></strong>
                    <br></br>
                    <br></br><i>No necesita</i> tener todas sus <i>tarjetas de crédito</i> cuando puede <i>pagar</i> simplemente con su <i>teléfono móvil</i> 
                </p>
            </div>
            <div className="clr"></div>

            <div className="rojo">
                <h2>Seguridad Añadida</h2>
                <p>
                    Las billeteras digitales también están <strong><i>encriptadas</i></strong> cual significa que su 
                    información de tarjeta de crédito <strong><i>no son transmitidos</i></strong> cuando hace un pago
                    <br></br>
                    <br></br>En su lugar, usan <strong><i>códigos de pago aleatorios</i></strong> para completar la transacción y <strong><i>proteger sus datos</i></strong> 
                </p>
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
            <div className="morado">
                <h2>Protección de Empresas Conocidas</h2>
                <p>
                    Esto es extremadamente útil porque cuando hace una compra en línea y tiene la opción de pagar usando una billetera digital,
                    puede pagar con ella <i>sin preocuparse de la capacidad</i> del sitio web para proteger su información 
                    <br></br>
                    <br></br>La <strong><i>encriptación</i></strong> de la billetera digital te protege ya que su pago es completado usando un <strong><i>código aleatorio</i></strong> de la billetera digital
                    <i>sin la necesidad de compartir</i> su información de tarjeta de crédito
                </p>
            </div>
            <div className="clr"></div>

            <Button className="mt-5 mb-5" href='Conocimientos'> Próxima Página</Button>
            <TransactionsBread />
        </>
    )
};

export default TransactionsIntro;