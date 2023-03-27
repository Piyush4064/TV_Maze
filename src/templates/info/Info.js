import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Card from "../../organism/card";
import Description from "../../organism/description";
import { DESCRIPTION } from "./constant";
import FlashCard from "../../molecules/flashCard";
import {useSelector, useDispatch} from 'react-redux';

import styles from "./info.module.css";
import { isElementPresent } from "../../helper";
import { FAVOURITE_PEOPLE, FAVOURITE_SHOW } from "../../redux/actions/favourite";

function Info({ item, summary = DESCRIPTION, flashCardDetails, flashCardFor }) {
    const dispatch = useDispatch();

    const favData = useSelector((state) => {
        if(flashCardFor === "Person"){
            return state.favouriteReducer.favouritePeople;
        }else{
            return state.favouriteReducer.favouriteShows;
        }
    });

    const onFavourite = useCallback(
        (item) => {
            if(flashCardFor === "Person"){
                dispatch(FAVOURITE_PEOPLE(item))
            }
            else{
                dispatch(FAVOURITE_SHOW (item));
            }
        },
        [dispatch, flashCardFor]
    );
    

    
    return (
        <div className={styles.main}>
            <Card 
            showFooterName={false} 
            follow={isElementPresent(favData, item)} 
            item={item} 
            onFavourite={() => onFavourite(item)}
            isStarShow={false}
            isFavourite = {false}
            />
            <Description summary={summary} />
            <FlashCard
                details={item}
                flashCardDetails={flashCardDetails}
                flashCardFor={flashCardFor}
            />
        </div>
    );
}

Info.propTypes = {
    item: PropTypes.object,
    summary: PropTypes.string,
    flashCardDetails: PropTypes.array,
    flashCardFor: PropTypes.string,
};

Info.defaultProps = {
    item: {},
    summary: DESCRIPTION,
    flashCardDetails: [],
    flashCardFor: "",
};

export default React.memo(Info);
