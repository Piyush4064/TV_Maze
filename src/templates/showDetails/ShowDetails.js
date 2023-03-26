import React from "react";
import PropTypes from "prop-types";

import MovieNav from "../../molecules/MovieNav";

import styles from "./showDetails.module.css";

function ShowDetails({ showTitle, ...props }) {
    return (
        <div className={styles.showDetails}>
            {showTitle && <h1 className={styles.showDetails__title}>{showTitle}</h1>}
            <MovieNav />
            {props.children}
        </div>
    );
}

ShowDetails.propTypes = {
    showTitle: PropTypes.string,
};

ShowDetails.defaultProps = {
    showTitle: "",
};

export default React.memo(ShowDetails);
