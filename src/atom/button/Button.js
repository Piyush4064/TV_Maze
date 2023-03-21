import React from 'react';
import styles from './button.module.css'

function Button(props) {

  const onClickBtn = (event) => {
    const {onClick} = props;
    onClick(event);
  }

  return (
    <button
    className={styles[props.type]}
    name = {props.name}
    onClick = {(event) => onClickBtn(event)}
    disabled = {props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button