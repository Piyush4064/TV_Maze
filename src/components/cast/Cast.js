import React from "react";

import styles from "./cast.module.css";
import Card from "../../organism/card/Card";
import CastInfo from "../../molecules/castInfo/CastInfo";
function Cast() {
    return (
        <div className={styles.cast}>
            <div className={styles.castDetail}>
                <Card showFooterIcon={false} showFooterName={false} />
                <CastInfo />
            </div>
            <div className={styles.castDetail}>
                <Card showFooterIcon={false} showFooterName={false} />
                <CastInfo />
            </div>
            <div className={styles.castDetail}>
                <Card showFooterIcon={false} showFooterName={false} />
                <CastInfo />
            </div>
            <div className={styles.castDetail}>
                <Card showFooterIcon={false} showFooterName={false} />
                <CastInfo />
            </div>
            <div className={styles.castDetail}>
                <Card showFooterIcon={false} showFooterName={false} />
                <CastInfo />
            </div>
            <div className={styles.castDetail}>
                <Card showFooterIcon={false} showFooterName={false} />
                <CastInfo />
            </div>
        </div>
    );
}

export default Cast;
