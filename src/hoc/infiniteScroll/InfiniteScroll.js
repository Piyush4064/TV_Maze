import React, { useState, useEffect } from "react";

import styles from "./infiniteScroll.module.css";
import Card from "../../organism/card";
import SkeletonCardList from "../../organism/skeletonCardList/SkeletonCardList";

function InfiniteScroll({ url, url2, favourite = true, requestFrom = null , onScrollData, ...props}) {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const fetchData = async (page) => {
        setLoaded(false);
        onScrollData(page);
        setLoaded(true);
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
            {props.children}
            {!loaded && hasMore && <SkeletonCardList />}
        </div>
    );
}

export default InfiniteScroll;
