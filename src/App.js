import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { WebAuthenticity } from './Pages/WebAuthenticity/WebAuthenticity';
import { WebHome } from './Pages/WebAuthenticity/WebHome';
import { WebQuiz } from './Pages/WebAuthenticity/WebQuiz';
import { PhishingHome } from './Pages/Phishing/PhishingHome';
import { PhishingEjemplo } from './Pages/Phishing/PhishingEmail';
import { PhishingPaypal } from './Pages/Phishing/PhishingPaypal';
import { PhishingQuiz } from './Pages/Phishing/PhishingQuiz';
import { PasswordsHome } from './Pages/Passwords/PasswordsHome';
import { Security } from './Pages/Passwords/Security';
import { PasswordsQuiz } from './Pages/Passwords/PasswordsQuiz';
import { TwoFactorHome } from './Pages/TwoFactor/TwoFactorHome';
import { TwoFactorIntro } from './Pages/TwoFactor/TwoFactorIntro';
import { TwoFactorQuiz } from './Pages/TwoFactor/TwoFactorQuiz';
import { TransactionsHome } from './Pages/Transactions/TransactionsHome';
import { TransactionsIntro } from './Pages/Transactions/TransactionsIntro';
import { TransactionsQuiz } from './Pages/Transactions/TransactionsQuiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/AutenticidaddelSitioWeb'>
              <WebHome/>
            </Route>
            <Route exact path='/AutenticidaddelSitioWeb/facebook'>
              <WebAuthenticity/>
            </Route>
            <Route exact path='/AutenticidaddelSitioWeb/conocimientos'>
              <WebQuiz/>
            </Route>
            <Route exact path='/Phishing'>
              <PhishingHome/>
            </Route>
            <Route exact path='/Phishing/Ejemplo'>
              <PhishingEjemplo/> 
            </Route>
            <Route exact path='/Phishing/Paypal'>
              <PhishingPaypal/> 
            </Route>
            <Route exact path='/Phishing/Conocimientos'>
              <PhishingQuiz/> 
            </Route>
            <Route exact path='/Contrasenas'>
                <PasswordsHome/>
            </Route>
            <Route exact path='/Contrasenas/Seguridad'>
              <Security/>
            </Route>
            <Route exact path='/Contrasenas/Conocimientos'>
              <PasswordsQuiz/>
            </Route>
            <Route exact path='/DosFactores'>
              <TwoFactorHome/>
            </Route>
            <Route exact path='/DosFactores/Intro'>
              <TwoFactorIntro/>
            </Route>
            <Route exact path='/DosFactores/Conocimientos'>
              <TwoFactorQuiz/>
            </Route>
            <Route exact path='/Transacciones'>
              <TransactionsHome/>
            </Route>
            <Route exact path='/Transacciones/Intro'>
              <TransactionsIntro/>
            </Route>
            <Route exact path='/Transacciones/Conocimientos'>
              <TransactionsQuiz/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
