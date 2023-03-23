import React, {useCallback} from "react";

import styles from "./input.module.css";

function Input({onChange, ...props}) {
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
}

export default React.memo(Input);
