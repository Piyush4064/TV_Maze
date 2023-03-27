import React, { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";

import SkeletonCardList from "../../organism/skeletonCardList";

function InfiniteScroll({ requestFrom, onScrollData, dataLoaded, ...props }) {
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async (page) => {
            if (onScrollData(page) === null) {
                setHasMore(false);
            }
        };
        fetchData(page);
    }, [page]);

    const onScroll = useCallback(() => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            setPage((prevData) => prevData + 1);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return (
        <div className="container">
            {props.children}
            {!dataLoaded && hasMore && <SkeletonCardList />}
            {!hasMore && <h1>End Content</h1>}
        </div>
    );
}

InfiniteScroll.propTypes = {
    requestFrom: PropTypes.string,
    onScrollData: PropTypes.func,
    dataLoaded: PropTypes.bool,
};

InfiniteScroll.defaultProps = {
    requestFrom: "",
    onScrollData: () => null,
    dataLoaded: false,
};

export default React.memo(InfiniteScroll);
