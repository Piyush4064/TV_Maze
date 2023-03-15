import React from "react";

import Table from "../../organism/table/Table";
import NavBarEpisode from "../../molecules/navBarEpisode/NavBarEpisode";
import styles from "./episode.module.css";

function Episode() {
    return (
        <div className={styles.episode}>
            <NavBarEpisode />
            <h2>
                <span>Season 1</span>
            </h2>
            <Table />
        </div>
    );
}

export default Episode;
