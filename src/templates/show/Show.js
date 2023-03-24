import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Card from "../../organism/card";
import { fetchGetRequest } from "../../api/api";
import InfiniteScroll from "../../hoc/infiniteScroll";

import styles from "./show.module.css";

function Show({ url, favourite = true, requestFrom = null, onFavourite, favData }) {
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

    return (
        <div className={styles.show}>
            {/* <Filter data={dummyData} /> */}
            <InfiniteScroll
                url={URL}
                requestFrom={requestFrom}
                onScrollData={onScrollData}
            >
                {items.map((item, index) => (
                    <div key={index}>
                        <Card
                            item={item}
                            key={item.id}
                            favourite={favourite}
                            requestFrom={requestFrom}
                            onFavourite={() => onFavourite(item)}
                            follow = {favData?.includes(item)}
                        />
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}

Show.propTypes = {
    url: PropTypes.string,
    favourite: PropTypes.bool,
    requestFrom: PropTypes.string,
    onFavourite: PropTypes.func,
    favData : PropTypes.array
};

Show.defaultProps = {
    url: "",
    favourite: true,
    requestFrom: null,
};

export default React.memo(Show);
