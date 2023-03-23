import React from "react";
import PropTypes from "prop-types";

import CombinedSocialMedia from "../../molecules/combinedSocialMedia";

import styles from "./description.module.css";

function Description({ summary }) {
    return (
        <div className={styles.summary}>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <CombinedSocialMedia />
        </div>
    );
}

Description.propTypes = {
    summary : PropTypes.string,
};

Description.defaultProps = {
    summary : "",
};

export default React.memo(Description);
