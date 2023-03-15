import React from 'react';
import './button.css'

function Button(props) {

  const onClickBtn = (event) => {
    const {onClick} = props;
    onClick(event);
  }

  return (
    <button
    className={props.type}
    name = {props.name}
    onClick = {(event) => onClickBtn(event)}
    disabled = {props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button