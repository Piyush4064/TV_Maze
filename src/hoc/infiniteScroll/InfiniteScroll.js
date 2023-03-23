import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import SkeletonCardList from "../../organism/skeletonCardList";

function InfiniteScroll({
    url,
    favourite = true,
    requestFrom = null,
    onScrollData,
    ...props
}) {
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [loaded, setLoaded] = useState(true);

    const fetchData = useCallback(
        async (page) => {
            setLoaded(false);
            if (onScrollData(page) === null) {
                setHasMore(false);
            }
            setLoaded(true);
        },
        [onScrollData]
    );

    useEffect(() => {
        fetchData(page);
    }, [fetchData, page]);

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
            {!loaded && hasMore && <SkeletonCardList />}
            {!hasMore && <h1>End Content</h1>}
        </div>
    );
}

InfiniteScroll.propTypes = {
    url: PropTypes.string,
    favourite: PropTypes.bool,
    requestFrom: PropTypes.string,
    onScrollData: PropTypes.func,
};

InfiniteScroll.defaultProps = {
    url: "",
    favourite: true,
    requestFrom: "",
    onScrollData: () => null,
};

export default React.memo(InfiniteScroll);
