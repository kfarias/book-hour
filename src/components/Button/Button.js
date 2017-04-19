import React from 'react'
import './button.css'


const Button = (props) => {
  return(
      <button className={ props.className } onClick={ (e) => props.onClick(e) }>{ props.name }</button>
  );
};

export default Button;
