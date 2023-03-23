import React from "react";

import style from "./skeletonCard.module.css"; // Import the CSS file for the component

const SkeletonCard = () => {
    return (
        <div className={style.skeleton_card}>
            <div className={style.skeleton_card_header}></div>
            <div className={style.skeleton_card_body}>
                <div className={style.skeleton_line}></div>
                <div className={style.skeleton_line}></div>
                <div className={style.skeleton_line}></div>
                <div className={style.skeleton_line}></div>
            </div>
        </div>
    );
};

export default React.memo(SkeletonCard);
