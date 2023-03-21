import React from "react";
import dummyData from "../../dummy/filter.dummy";
import Filter from "../../organism/filter";
import InfiniteScroll from "../../hoc/infiniteScroll";
import styles from "./show.module.css";
import Card from "../../organism/card/Card";
import { fetchGetRequest } from "../../api/api";

function Show({ url, favourite = true, requestFrom = null }) {
    const [items, setItems] = React.useState([]);

    async function onScrollData(page) {
        (async () => {
            const data = await fetchGetRequest(url + page);
            if (data === null) {
                return;
            }
            setItems([...items, ...data]);
        })();
    }

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
                        />
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default Show;
