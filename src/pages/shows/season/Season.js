import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import styles from "./season.module.css";
import Card from "../../../organism/card/Card";
import SeasonInfo from "../../../molecules/seasonInfo";

import ShowDetails from "../../../templates/showDetails/ShowDetails";
import { fetchGetRequest } from "../../../api/api";

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
            {seasons.map((item) => (
                <div className={styles.season}>
                    <Card showFooterName={false} showFooterIcon={false} item={item} />
                    <SeasonInfo item={item} />
                </div>
            ))}
        </ShowDetails>
    );
}

export default Season;
