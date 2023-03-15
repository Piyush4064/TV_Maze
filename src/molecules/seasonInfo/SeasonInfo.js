import React from "react";

import styles from "./seasonInfo.module.css"

function SeasonInfo() {
    return (
        <div className={styles.seasonInfo}>
            <h2>
                <a href="/seasons/89531/the-mandalorian-season-1">Season 1</a>
            </h2>
            <h3>
                <small>
                    <a href="/webchannels/287/disney">Disney+</a>, 2019
                </small>
            </h3>
            <p>
                The travels of a lone bounty hunter in the outer reaches of the galaxy,
                far from the authority of the New Republic.
            </p>{" "}
        </div>
    );
}

export default SeasonInfo;
