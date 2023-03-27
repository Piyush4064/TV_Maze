import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FAVOURITE_SHOW } from "../../../redux/actions/favourite";
import Favourite from "../../../templates/favourite";

import styles from "./favouriteshow.module.css";

function FavouriteShow() {
    const favoriteShow = useSelector((state) => state.favouriteReducer.favouriteShows);
    const dispatch = useDispatch();

    const onFavourite = useCallback(
        (id) => {
            dispatch(FAVOURITE_SHOW(id));
        },
        [dispatch]
    );

    return (
        <div className={styles.show}>
            <Favourite
                favData={favoriteShow}
                onFavourite={onFavourite}
                favouriteOf={"Shows"}
                requestFrom="show"
            />
        </div>
    );
}

export default React.memo(FavouriteShow);
