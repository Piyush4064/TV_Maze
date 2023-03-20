import React, { useEffect, useState } from "react";

import styles from "./castInfo.module.css";

function CastInfo({ item }) {
    const [name, setName] = useState("");
    useEffect(
        () => setName(item?.person?.name?.replace(/ /g, "-")),
        [item?.person?.name]
    );

    let URL = "/people/" + item?.person?.id + "/" + name;
    return (
        <div className={styles.infoCard}>
            <h2>
                <a href={URL}>{item?.person?.name}</a>
            </h2>
            {" as "}
            <a href="/characters/572164/the-mandalorian-mandalorian">
                {item?.character?.name}
            </a>
        </div>
    );
}

export default CastInfo;
