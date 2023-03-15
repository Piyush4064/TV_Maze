import React from "react";

import Table from "../../organism/table/Table";

import styles from "./episode.module.css";

function Episode() {
    return (
        <div className={styles.episode}>
            <nav className={styles.navbar}>
                <span>S01</span>
                <span>S02</span>
                <span>S03</span>
            </nav>
            <h2>
                <span>Season 1</span>
            </h2>
            <Table />
        </div>
    );
}

export default Episode;
