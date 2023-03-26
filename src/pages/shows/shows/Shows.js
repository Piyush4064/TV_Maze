import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import InfiniteScrollContainer from "../../../templates/infiniteScrollContainer";
import { URL } from "./constant";
import { FAVOURITE_SHOW } from "../../../redux/actions/favourite";

import styles from "./shows.module.css";

function Shows() {
    const dispatch = useDispatch();
    const favData = useSelector((state) => state.favouriteReducer.favouriteShows);

    const onFavourite = useCallback(
        (id) => {
            console.log("yes");
            dispatch(FAVOURITE_SHOW(id));
        },
        [dispatch]
    );

    return (
        <div className={styles.shows}>
            <h1 className={styles.shows__title}>Show</h1>
            <InfiniteScrollContainer
                url={URL}
                requestFrom="show"
                onFavourite={onFavourite}
                favData={favData}
            />
        </div>
    );
}

export default React.memo(Shows);
