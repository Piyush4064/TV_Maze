import React from "react";

import styles from "./castInfo.module.css";

function CastInfo({ item }) {
    return (
        <div className={styles.infoCard}>
            <h2>
                <a href="/people/1123/pedro-pascal">{item?.person?.name}</a>
            </h2>
            {" as "}
            <a href="/characters/572164/the-mandalorian-mandalorian">
                {item?.character?.name}
            </a>
        </div>
    );
}

export default CastInfo;
