import React from "react";

import SkeletonCard from "../../molecules/skeletonCard";

import styles from "./skeletonCardList.module.css";

function SkeletonCardList() {
    return (
        <div className={styles.skeletonCardList}>
            {[...Array(8)].map((_, index) => {
                return <SkeletonCard key={index} />;
            })}
        </div>
    );
}

export default React.memo(SkeletonCardList);
