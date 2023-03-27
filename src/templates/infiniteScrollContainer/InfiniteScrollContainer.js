import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import Card from "../../organism/card";
import { fetchGetRequest } from "../../api/api";
import InfiniteScroll from "../../hoc/infiniteScroll";

import styles from "./infiniteScrollContainer.module.css";

function InfiniteScrollContainer({
    url,
    favourite = true,
    requestFrom = null,
    onFavourite,
    favData,
}) {
    const [items, setItems] = React.useState([]);
    const [loaded, setLoaded] = useState(false);

    const onScrollData = useCallback(
        (page) => {
            setLoaded(false);
            (async () => {
                const data = await fetchGetRequest(url + page);
                if (data === null) {
                    return null;
                }
                setLoaded(true);
                setItems([...items, ...data]);
            })();
        },
        [items, url]
    );

    
    const isFavourite = (item) => {
        const follow = favData.filter((fav) => fav.id === item.id);

        if (follow.length === 0) {
            return false;
        }

        return true;
    };

    return (
        <div className={styles.show}>
            <InfiniteScroll requestFrom={requestFrom} onScrollData={onScrollData} loaded={loaded}>
                {items.map((item, index) => (
                    <div key={index}>
                        <Card
                            item={item}
                            key={item.id}
                            favourite={favourite}
                            requestFrom={requestFrom}
                            onFavourite={() => onFavourite(item)}
                            follow = {false}
                            isFavourite = {isFavourite(item)}
                        />
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}

InfiniteScrollContainer.propTypes = {
    url: PropTypes.string,
    favourite: PropTypes.bool,
    requestFrom: PropTypes.string,
    onFavourite: PropTypes.func,
    favData: PropTypes.array,
};

InfiniteScrollContainer.defaultProps = {
    url: "",
    favourite: true,
    requestFrom: null,
    onFavourite: () => null,
    favData: [],
};

export default React.memo(InfiniteScrollContainer);
