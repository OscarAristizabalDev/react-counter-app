import React from 'react';
import ReactDOM from 'react-dom';
//import PrimerApp from './PrimerApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');
//ReactDOM.render( < PrimerApp saludo = "Hola, Soy goku" / > , divRoot);
//ReactDOM.render( < PrimerApp / > , divRoot);
ReactDOM.render( < CounterApp valor = {10} /> , divRoot)
