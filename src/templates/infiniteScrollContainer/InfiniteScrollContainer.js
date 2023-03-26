import React, { useCallback } from "react";
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

    const onScrollData = useCallback(
        (page) => {
            (async () => {
                const data = await fetchGetRequest(url + page);
                if (data === null) {
                    return null;
                }
                setItems([...items, ...data]);
            })();
        },
        [items, url]
    );

    const isFollow = (item) => {
        const follow = favData.filter((fav) => fav.id === item.id);

        if (follow.length === 0) {
            return false;
        }

        return true;
    };

    return (
        <div className={styles.show}>
            {/* <Filter data={dummyData} /> */}
            <InfiniteScroll requestFrom={requestFrom} onScrollData={onScrollData}>
                {items.map((item, index) => (
                    <div key={index}>
                        <Card
                            item={item}
                            key={item.id}
                            favourite={favourite}
                            requestFrom={requestFrom}
                            onFavourite={() => onFavourite(item)}
                            follow={isFollow(item)}
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
