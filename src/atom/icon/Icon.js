import React from "react";
import PropTypes from "prop-types";

function Icon({ className, onClick, styleColor }) {
    return <i className={className} onClick={onClick} style={styleColor}></i>;
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
