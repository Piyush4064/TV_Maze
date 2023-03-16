import React from 'react';
import styles from './dropdown.module.css'

function DropDown(props) {
    const onChange = (event) => {
        const {onChange} = props;
        onChange(event);
    }

  return (
    <select 
        className={styles.dropdown}
        name={props.name}
        onChange={(event) => onChange(event)} 
        value={props.value}>
        {props.options?.map((option) => (
            <option key={option} value={option}>{option}</option>
        ))}
        </select>
  )
}

export default DropDown;