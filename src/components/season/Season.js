import React from "react";

import styles from "./season.module.css";
import Card from "../../organism/card/Card";
import SeasonInfo from "../../molecules/seasonInfo/SeasonInfo";

function Season() {
    return (
        <div>
            <div className={styles.season}>
                <Card showFooterName={false} showFooterIcon={false} />
                <SeasonInfo />
            </div>
            <div className={styles.season}>
                <Card showFooterName={false} showFooterIcon={false} />
                <SeasonInfo />
            </div>
            <div className={styles.season}>
                <Card showFooterName={false} showFooterIcon={false} />
                <SeasonInfo />
            </div>
        </div>
    );
}

export default Season;
