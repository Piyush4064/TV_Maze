import React from "react";
import { FAVOURITE_PEOPLE } from "../../../redux/actions/favourite";
import Show from "../../../templates/show/Show";
import { useDispatch} from 'react-redux';
import styles from "./people.module.css";

const URL = "https://api.tvmaze.com/people?page=";

function People() {
    const dispatch =  useDispatch();

    const onFavourite = (id) => {
       dispatch(FAVOURITE_PEOPLE(id)) 
    }

    return (
        <div className={styles.people}>
            <h1 className={styles.people__title}>People</h1>
            <Show url={URL} favourite={false} requestFrom="people" onFavourite ={onFavourite}/>
        </div>
    );
}

export default People;
