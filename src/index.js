import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// const saludo = <h1>Hola</h1>;

const divRoot = document.querySelector('#app');

// ReactDOM.render( <PrimeraApp saludo="Hi goku" />, divRoot );
ReactDOM.render( <CounterApp /> , divRoot);

