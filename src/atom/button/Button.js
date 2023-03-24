import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({ onClick, type , name, disabled = false , ...props }) {
    const onClickBtn = useCallback(
        (event) => {
            onClick(event);
        },
        [onClick]
    );

    return (
        <button
            className={styles[type]} // props.className
            name={name}
            onClick={(event) => onClickBtn(event)}
            disabled={disabled}
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
};

export default React.memo(Button);
