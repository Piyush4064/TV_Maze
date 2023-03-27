import React from "react";
import PropTypes from "prop-types";

import styles from "./icon.module.css";

function Icon({ className, onClick, styleColor }) {
    return (
        <i
            className={`${className} ${styles.icon}`}
            onClick={onClick}
            style={styleColor}
        ></i>
    );
}

Icon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    styleColor: PropTypes.object,
};

Icon.defaultProps = {
    className: "",
    onClick: () => null,
    styleColor: {},
};

export default React.memo(Icon);
