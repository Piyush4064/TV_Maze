import React from "react";
import Show from "../../../templates/show/Show";

import styles from "./shows.module.css";

const URL = "https://api.tvmaze.com/shows?page=";

function Shows() {
    return (
        <div className={styles.shows}>
            <h1 className={styles.shows__title}>Show</h1>
            <Show url={URL} requestFrom="show" />
        </div>
    );
}

export default Shows;
