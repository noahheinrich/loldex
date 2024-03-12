import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; // Assurez-vous d'avoir ce fichier pour les styles globaux
import App from './App'; // Le composant racine de votre application
//import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Généré par Create React App pour la PWA

// Rendu de l'application React dans l'élément racine du DOM
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
