import React from "react";

import Show from "../../../templates/show";
import {URL} from "./constant"
import { FAVOURITE_PEOPLE } from "../../../redux/actions/favourite";
import { useDispatch, useSelector} from 'react-redux';

import styles from "./people.module.css";


function People() {
    const dispatch =  useDispatch();
    const favData = useSelector(state => state.favouriteReducer.favouritePeople);

    const onFavourite = (id) => {
       dispatch(FAVOURITE_PEOPLE(id)) 
    }

    return (
        <div className={styles.people}>
            <h1 className={styles.people__title}>People</h1>
            <Show url={URL} favourite={false} requestFrom="people" onFavourite ={onFavourite} favData={favData}/>
        </div>
    );
};

export default React.memo(People);
