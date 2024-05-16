// Ejemplo, capturando ingreso por teclado con useState

import { useState } from 'react';

function Pffef() {
  const [valorInput, setValorInput] = useState('');  

  const inputChange = (evento) => {
    const valor = evento.target.value
    setValorInput(valor)
  };

  return (
    <div className="App">
      <input onChange={inputChange}></input>
      <p>{valorInput}</p>
    </div>
  );
}

export default Pffef;


