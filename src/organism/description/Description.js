import React from "react";

import styles from "./description.module.css";

import CombinedSocialMedia from "../../molecules/combinedSocialMedia";

function Description({ summary }) {
    return (
        <div className={styles.summary}>
            <div dangerouslySetInnerHTML={{ __html: summary }} />
            <CombinedSocialMedia />
        </div>
    );
}

export default Description;
