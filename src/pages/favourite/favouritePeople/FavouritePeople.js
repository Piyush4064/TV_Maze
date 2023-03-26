import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FAVOURITE_PEOPLE } from "../../../redux/actions/favourite";
import Favourite from "../../../templates/favourite";

import styles from "./favouritepeople.module.css";

function FavouritePeople() {
    const favoritePeople = useSelector((state) => state.favouriteReducer.favouritePeople);
    const dispatch = useDispatch();

    const onFavourite = useCallback(
        (id) => {
            dispatch(FAVOURITE_PEOPLE(id));
        },
        [dispatch]
    );

    return (
        <div className={styles.show}>
            <Favourite
                favData={favoritePeople}
                onFavourite={onFavourite}
                favouriteOf={"People"}
            />
        </div>
    );
}

export default FavouritePeople;
