import React from "react";

import Show from "../../../templates/show";
import {URL} from "./constant"

import styles from "./shows.module.css";

function Shows() {
    return (
        <div className={styles.shows}>
            <h1 className={styles.shows__title}>Show</h1>
            <Show url={URL} requestFrom="show" />
        </div>
    );
}

export default React.memo(Shows);
