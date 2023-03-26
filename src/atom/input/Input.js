import React, {useCallback} from "react";
import PropTypes from "prop-types";

import styles from "./input.module.css";

function Input({onChange, type, name, placeholder, required, ...props}) {
    const onChangeInput = useCallback((event) => {
        onChange(event);
    }, [onChange]);

    return (
        <input
            className={styles[type]} // props.className
            name={name}
            placeholder={placeholder}
            onChange={onChangeInput}
            required={required}
        />
    );
}

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
};

Input.defaultProps = {
  onChange : () => null,
  type: "",
  name: "",
  placeholder: "",
  required: false
};

export default React.memo(Input);
