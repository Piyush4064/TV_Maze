import React, {useCallback} from 'react';
import PropTypes from "prop-types";

import styles from './dropdown.module.css'

function Dropdown({onChange, name, value, options, ...props}) {
    const onChangeHandler = useCallback((event) => {
        onChange(event);
    }, [onChange])

  return (
      <select 
        className={styles.dropdown}
        name={name}
        onChange={onChangeHandler} 
        value={value}>
        {options?.map((option) => (
            <option key={option} value={option}>{option}</option>
        ))}
        </select>
  )
}

Dropdown.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array
};

Dropdown.defaultProps = {
  onChange : () => null,
  name: "",
  value: "",
  options: []
};

export default React.memo(Dropdown);