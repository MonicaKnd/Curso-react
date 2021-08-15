import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

// funtion component
const PrimeraApp = ({saludo, subtitulo }) => {

    // if (!saludo){
    //     throw new Error ('El saludo es necesario');
    // }

    // const saludo = 9000
    // console.log(props);
    // {
    //     nombre: 'Moni',
    //     edad: 45
    // }

    return (
        <>
            <h1>{saludo}</h1>
            <pre>{/*JSON.stringify(saludo, null, 3)*/}</pre>
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Este es el subtitulo'
}

export default PrimeraApp;