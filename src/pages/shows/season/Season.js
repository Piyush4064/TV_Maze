import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../../../organism/card";
import { fetchGetRequest } from "../../../api/api";
import SeasonInfo from "../../../molecules/seasonInfo";
import ShowDetails from "../../../templates/showDetails";
import { getUniqueKey } from "../../../helper";

import styles from "./season.module.css";

function Season() {
    const { id, name } = useParams();
    const [seasons, setSeasons] = useState([]);

    const URL = "https://api.tvmaze.com/shows/" + id + "/seasons";
    useEffect(() => {
        (async () => {
            const data = await fetchGetRequest(URL);
            if (data === null) {
                return;
            }
            setSeasons(data);
        })();
    }, [URL, id]);

    return (
        <ShowDetails showTitle={name}>
            {seasons.map((item, index) => (
                <div className={styles.season} key={getUniqueKey(index)}>
                    <Card showFooterName={false} showFooterIcon={false} item={item} />
                    <SeasonInfo item={item} />
                </div>
            ))}
        </ShowDetails>
    );
}

export default React.memo(Season);
