import React, {useCallback} from "react";
import PropTypes from "prop-types";
import styles from "./input.module.css";

function Input({onChange, type, name, placeholder, value, required = false, ...props}) {
    const onChangeInput = useCallback((event) => {
        onChange(event);
    }, [onChange]);

    return (
        <input
            className={styles[props.type]} // props.className
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={onChangeInput}
            required={props.required}
        />
    );
};

Input.propTypes = {
  onChange : PropTypes.func,
  type : PropTypes.string,
  placeholder : PropTypes.string,
  value: PropTypes.string,
  required : PropTypes.bool
};

Input.defaultProps = {
    required : false
};


export default React.memo(Input);
