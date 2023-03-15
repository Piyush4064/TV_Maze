import React from "react";

import Card from "../../organism/card/Card";
import FlashCard from "../../molecules/flashCard/FlashCard";
import Description from "../../organism/description/Description";
import styles from "./info.module.css";

function Info() {
    return (
        <div>
            <h1>The Mandalorian</h1>
            <div className={styles.main}>
                <Card showFooterName={false} follow = {true}/>
                <Description />
                <FlashCard />
            </div>
        </div>
    );
}

export default Info;
