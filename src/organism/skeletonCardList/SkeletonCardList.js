import React from "react";

import SkeletonCard from "../../molecules/skeletonCard";

import styles from "./skeletonCardList.module.css";

function SkeletonCardList() {
    return (
        <div className={styles.skeletonCardList}>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    );
}

export default React.memo(SkeletonCardList);
