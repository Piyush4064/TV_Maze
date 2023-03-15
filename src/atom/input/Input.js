import React from 'react';
import './input.css';

function Input(props) {

  const onChangeInput = (event) => {
    const {onChange} = props;
    onChange(event);
  }

  return (
    <input 
    className = {props.type}
    name = {props.name}
    placeholder = {props.placeholder}
    value = {props.value}
    onChange = {(event) => onChangeInput(event)}
    required = {props.required}
    />
  )
}

export default Input;