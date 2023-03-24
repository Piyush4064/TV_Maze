import React from "react";
import PropTypes from "prop-types";

function Icon({ className, onClick, styleColor = {} }) {
    return <i className={className} onClick={onClick} style={styleColor}></i>;
}

Icon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    className: "",
    onClick: () => null,
};

export default React.memo(Icon);
