import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({valor}) => {

  const [counter, setCounter] = useState(valor); // retorna un arreglo con dos valores

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter( (c) => c + 1);
  }
  // Permite resetear el counter a 0
  const handleReset = () => {
    //setCounter( (c) => c = valor);
    setCounter( valor );
  }
  // Permite restar el counter
  const handleSustract = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1> {valor} </h1>
      <h2> {counter} </h2>
      <button onClick={  handleAdd }>1</button>
      <button onClick={  handleReset }>Reset</button>
      <button onClick={  handleSustract }>-1</button>
    </>
  );

  CounterApp.propTypes = {
    valor: PropTypes.number
  }
}
export default CounterApp;
