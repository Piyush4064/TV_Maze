import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Icon from "../../atom/icon";

import styles from "./iconWithLink.module.css";

function IconWithLink({ className, link }) {
    return (
        <Link to={link} className={styles.iconLink}>
            <Icon className={className} />
        </Link>
    );
}

IconWithLink.propTypes = {
    className: PropTypes.string,
    link: PropTypes.string,
};

IconWithLink.defaultProps = {
    className: "",
    link: "",
};

export default React.memo(IconWithLink);
