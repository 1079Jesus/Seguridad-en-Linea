import React, {useState, useEffect, useContext} from 'react';
// import { Card } from '../Components/Card/card';
import { Email } from '../Components/Email/email';
import { Container, Row, Col, Button, Breadcrumb, Card, Form, CardGroup } from 'react-bootstrap';
import { UserContext } from "../Components/Temp";
import Navigbar from '../Components/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const EmailPage = () => {
    
    const [email, setEmail] = useState([])
    const [addEmail, setAddEmail] = useState('')

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setEmail(data))
    }, [])

    const handleEmailChange = (inputValue) => {
        setAddEmail(inputValue)
        console.log(addEmail)
    }

    const handleEmailSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                content:addEmail
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(message => {
                // console.log(message)
                setAddEmail('')
                getLatestEmails()
            })
    }

    const getLatestEmails = () => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setEmail(data))
    }

    const {value, setValue } = useContext(UserContext);

    return(
        <>  
            <Navigbar />
            <Container>
                <Jumbotron>
                    <h1>
                        Bienvenidos!!!
                    </h1>
                    <p>
                        En este sitio exploraremos un poco sobre las cosas básicos que uno debería estar cómodo usando cuando navega el Internet. 
                    </p>
                </Jumbotron>

                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Autenticidad del Sitio Web</Card.Title>
                            <Card.Text>
                            En este módulo, aprenderemos sobre los protocólos http y https
                            <br></br>
                            También identificaremos los nombres de dominio y extensiones de sitios web
                            </Card.Text>
                            <Card.Link href="AutenticidaddelSitioWeb">Autenticidad del Sitio Web</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Correos Electrónicos de Phishing</Card.Title>
                            <Card.Text>
                            En este módulo analizaremos un poco los patrones que se utilizan para engañar a la gente
                            </Card.Text>
                            <Card.Link href="Phishing">Correos Electrónicos de Phishing</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Contraseñas</Card.Title>
                            <Card.Text>
                            En este módulo aprendemos cómo elegir contraseñas seguras y identificar las ventajas de usar un administrador de contraseñas
                            </Card.Text>
                            <Card.Link href="Contrasenas">Contraseñas</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>


                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Autenticación de Dos Factores</Card.Title>
                            <Card.Text>
                            En este módulo aprenderemos que es autenticación de dos factores y como usarlo
                            </Card.Text>
                            <Card.Link href="DosFactores">Autenticación de Dos Factores</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Transacciones Seguras en Línea</Card.Title>
                            <Card.Text>
                            En este módulo aprenderemos como hacer transacciones seguras en línea y también descubriremos las ventajas de una billetera digital
                            </Card.Text>
                            <Card.Link href="Transacciones">Transacciones Seguras en Línea</Card.Link>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <Breadcrumb>
                <Breadcrumb.Item href="AutenticidaddelSitioWeb">Autenticidad del Sitio Web</Breadcrumb.Item>
                <Breadcrumb.Item href="Phishing">Correos Electrónicos de Phishing</Breadcrumb.Item>
                <Breadcrumb.Item href="Contrasenas">Contraseñas</Breadcrumb.Item>
                <Breadcrumb.Item href="DosFactores">Autenticación de Dos Factores</Breadcrumb.Item>
                <Breadcrumb.Item href="Transacciones">Transacciones Seguras en Línea</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}