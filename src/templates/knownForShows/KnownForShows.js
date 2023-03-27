import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Card from "../../organism/card";
import { fetchGetRequest } from "../../api/api";

import styles from "./knownForShows.module.css";
import { FAVOURITE_SHOW } from "../../redux/actions/favourite";
import {useDispatch, useSelector} from 'react-redux';
import { isElementPresent } from "../../helper";

function KnownForShows({ castcredits }) {
    const [showDetail, setShowDetail] = useState([]);
    const favData = useSelector((state) => state.favouriteReducer.favouriteShows);
    const dispatch = useDispatch();

    useEffect(() => {
        const data = castcredits?.slice(-4);
        async function getAllShowsData() {
            const tmpShowDetail = [];
            await Promise.all(
                data.map(async (item) => {
                    const data = await fetchGetRequest(item._links.show.href);
                    if (data === null) {
                        return;
                    }
                    tmpShowDetail.push(data);
                })
            );
            setShowDetail(tmpShowDetail);
        }
        getAllShowsData();
    }, [castcredits]);

    const onFavourite = useCallback (
        (item) => {
            dispatch(FAVOURITE_SHOW(item));
        },
        [dispatch]
    );
    
    return (
        <div className={styles.knownForShows}>
            <h2 className={styles.knownForShows__title}>Known For</h2>
            <div className="container">
                {showDetail.map((item) => {
                    return (
                        <div className={styles.knownForShows__Card}>
                            <Card
                                favourite={false}
                                item={item}
                                requestFrom="knownForShows"
                                key={item.id}
                                onFavourite={() => onFavourite(item)}
                                follow = {false}
                                isFavourite = {isElementPresent(favData, item)}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

KnownForShows.propTypes = {
    castcredits: PropTypes.array,
};

KnownForShows.defaultProps = {
    castcredits: [],
};

export default React.memo(KnownForShows);
