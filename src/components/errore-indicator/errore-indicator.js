import React from 'react';
import icon from './eror.png';

// modal-content
const ErrorMessage = () => {
  return (
    <div>
      <h3 Style={"color: red"}>ERRORE</h3>
      <img src={icon} alt='error icon'></img>
    </div>
  );
};

export default ErrorMessage;

