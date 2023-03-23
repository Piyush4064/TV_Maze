import React, { useCallback } from "react";

import styles from "./button.module.css";

function Button({ onClick, ...props }) {
    const onClickBtn = useCallback(
        (event) => {
            onClick(event);
        },
        [onClick]
    );

    return (
        <button
            className={styles[props.type]} // props.className
            name={props.name}
            onClick={(event) => onClickBtn(event)}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default React.memo(Button);
