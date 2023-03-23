import React from "react";

import Show from "../../../templates/show";
import {URL} from "./constant"

import styles from "./people.module.css";

function People() {
    return (
        <div className={styles.people}>
            <h1 className={styles.people__title}>People</h1>
            <Show url={URL} favourite={false} requestFrom="people" />
        </div>
    );
}

export default React.memo(People);
