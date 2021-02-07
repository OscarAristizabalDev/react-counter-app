// Funcional Components
//import React, {Fragment} from 'react';
import React from 'react';
// Tipos de properties que va a recibir el componente
import PropTypes from 'prop-types';

const PrimerApp = ({saludo, subtitulo}) => {

  //console.log(props);

  //const saludo = 'Hola mundo';
    /**const saludo = {
      'nombre': 'Oscar Aristizabal',
      'edad': '21'
    }*/
  return (
    <>
      {/* De esta forma se pueden imprimir variables en el HTML */}
      <h1> {saludo} </h1>
      {/* De esta forma se pueden imprimir los objetos en el HTML */}
      {/*<pre> {JSON.stringify(saludo, null, 3)} </pre>*/}
      <p> {subtitulo} </p>
    </>
  );

  // Se indica a los properties el tipo de dato y que sean enviado obligatorios
  // desde el componente padre, en este caso el componente padre es el index.js
  PrimerApp.propTypes = {
    saludo: PropTypes.string.isRequired
  };
  // Permite establecer valores por defecto a los properties
  PrimerApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
  };

}

export default PrimerApp;
