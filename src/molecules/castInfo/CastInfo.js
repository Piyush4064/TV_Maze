import React from "react";

import styles from "./castInfo.module.css";

function CastInfo() {
    return (
        <div className={styles.infoCard}>
            <h2>
                <a href="/people/1123/pedro-pascal">Pedro Pascal</a>
            </h2>
            {" as "}
            <a href="/characters/572164/the-mandalorian-mandalorian">Mandalorian</a>
        </div>
    );
}

export default CastInfo;
