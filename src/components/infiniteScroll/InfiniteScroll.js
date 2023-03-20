import React, { useState, useEffect } from "react";

import styles from "./infiniteScroll.module.css";
import Card from "../../organism/card/Card";

function InfiniteScroll({ url, favourite = true, requestFrom = null }) {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const fetchData = async (page) => {
        const response = await fetch(url + page);
        if (response.ok === false) {
            setHasMore(false);
            return;
        }
        const data = await response.json();
        setItems([...items, ...data]);
    };
    const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            setPage(page + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [items]);

    return (
        <div className={styles.container}>
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
        </div>
    );
}

export default InfiniteScroll;
