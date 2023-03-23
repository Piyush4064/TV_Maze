import React from "react";
import PropTypes from "prop-types";

function Icon({ className }) {
    return <i className={className}></i>;
}

Icon.propTypes = {
    className: PropTypes.string,
};

Icon.defaultProps = {
    className: "",
};

export default React.memo(Icon);
