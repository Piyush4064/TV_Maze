import React from "react";
import dummyData from "../../dummy/filter.dummy";
import Filter from "../../organism/filter";
import InfiniteScroll from "../../hoc/infiniteScroll";
import styles from "./show.module.css";
import Card from "../../organism/card/Card";

function Show({ url, favourite = true, requestFrom = null }) {
    const [items, setItems] = React.useState([]);

    async function onScrollData(page) {
        const response = await fetch(url + page);
        if (response.ok === false) {
            return;
        }
        const data = await response.json();
        setItems([...items, ...data]);
    }
    
    return (
        <div className={styles.show}>
            <div className={styles.filterwithContainer}>
                {/* <Filter data={dummyData} /> */}
                <InfiniteScroll url={URL} requestFrom={requestFrom} onScrollData={onScrollData}>
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
        </div>
    );
}

export default Show;
