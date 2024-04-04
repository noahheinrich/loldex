import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App'; // Le composant racine de votre application
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root'); // Assurez-vous que cela correspond à l'ID de votre élément racine dans le HTML
const root = createRoot(container); // Créez la racine à partir du conteneur

// Rendu de l'application React dans l'élément racine du DOM
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
