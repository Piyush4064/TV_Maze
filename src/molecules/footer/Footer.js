import React from "react";

import CombinedIcons from "../combinedIcons";

import styles from "./footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <h1 className={styles.footer__title}>Follow us on: </h1>
            <CombinedIcons stylePara={{display: "none"}}/>
        </div>
    );
}

export default Footer;
