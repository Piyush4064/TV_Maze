import React, {useCallback} from 'react';

import styles from './dropdown.module.css'

function Dropdown({onChange, ...props}) {
    const onChangeHandler = useCallback((event) => {
        onChange(event);
    }, [onChange])

  return (
    <select 
        className={styles.dropdown}
        name={props.name}
        onChange={onChangeHandler} 
        value={props.value}>
        {props.options?.map((option) => (
            <option key={option} value={option}>{option}</option>
        ))}
        </select>
  )
}

export default React.memo(Dropdown);