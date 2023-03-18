import React from "react";

import styles from "./seasonInfo.module.css";

function showPremiereDate(premiereDate, endDate) {
    if (endDate === null || premiereDate.slice(0, 4) === endDate.slice(0, 4)) {
        return premiereDate.slice(0, 4);
    }
    return premiereDate.slice(0, 4) + "-" + endDate.slice(0, 4);
}

function SeasonInfo({ item }) {
    return (
        <div className={styles.seasonInfo}>
            <h2>
                <a href="/seasons/89531/the-mandalorian-season-1">Season {item.number}</a>
            </h2>
            <h3>
                <small>
                    <a href="/webchannels/287/disney">
                        {item?.network?.name || item?.webChannel.name}
                    </a>
                    ,{" "}
                    {item?.premiereDate !== null &&
                        showPremiereDate(item?.premiereDate, item?.endDate)}
                </small>
            </h3>
            <p>
                <div dangerouslySetInnerHTML={{ __html: item.summary }} />
            </p>{" "}
        </div>
    );
}

export default SeasonInfo;
