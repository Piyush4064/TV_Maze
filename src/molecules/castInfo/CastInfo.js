import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./castInfo.module.css";

function CastInfo({ item }) {
    const [name, setName] = useState("");
    useEffect(
        () => setName(item?.person?.name?.replace(/ /g, "-")),
        [item?.person?.name]
    );

    let URL = "/people/" + item?.person?.id + "/" + name;
    return (
        <div className={styles.castInfo}>
            <h2 className={styles.castInfo__name}>
                <Link to={URL}>{item?.person?.name}</Link>
            </h2>
            {" as "}
            <Link to="#">{item?.character?.name}</Link>
        </div>
    );
}

export default CastInfo;
