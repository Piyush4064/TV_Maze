import React from "react";

import { Icon } from "../../atom";
import styles from "./combinedSocialMedia.module.css";

function CombinedSocialMedia() {
    return (
        <div className={styles.socailMediaIcon}>
            <p>Share this on:</p>
            <Icon classes="fa-brands fa-facebook" />
            <Icon classes="fa-brands fa-twitter" />
            <Icon classes="fa-brands fa-reddit" />
            <Icon classes="fa-brands fa-tumblr" />
        </div>
    );
}

export default CombinedSocialMedia;
