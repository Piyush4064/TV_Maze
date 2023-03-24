import React from "react";

import InfiniteScrollContainer from "../../../templates/infiniteScrollContainer";
import {URL} from "./constant";
import { FAVOURITE_SHOW } from "../../../redux/actions/favourite";
import { useDispatch, useSelector} from 'react-redux';

import styles from "./shows.module.css";

function Shows() {
    const dispatch = useDispatch();
    const favData = useSelector(state => state.favouriteReducer.favouriteShows);

    const onFavourite = (id) => {
        console.log("yes");
       dispatch(FAVOURITE_SHOW(id));
    }

    return (
        <div className={styles.shows}>
            <h1 className={styles.shows__title}>Show</h1>
            <InfiniteScrollContainer url={URL} requestFrom="show" onFavourite ={onFavourite} favData={favData}/>
        </div>
    );
};

export default React.memo(Shows);
