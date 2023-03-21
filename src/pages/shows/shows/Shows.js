import React from "react";
import Show from "../../../templates/show/Show";

import styles from "./shows.module.css";

const URL = "https://api.tvmaze.com/shows?page=";

function Shows() {
    return (
        <div className={styles.show}>
            <h1>Show</h1>
            <div className={styles.filterwithContainer}>
                <Show url={URL} requestFrom="show" />
            </div>
        </div>
    );
}

export default Shows;
