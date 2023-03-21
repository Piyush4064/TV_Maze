import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import styles from "./season.module.css";
import Card from "../../../organism/card/Card";
import SeasonInfo from "../../../molecules/seasonInfo";

import ShowDetails from "../../../templates/showDetails/ShowDetails";

function Season() {
    const { id, name } = useParams();
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows/" + id + "/seasons")
            .then((res) => res.json())
            .then((data) => {
                setSeasons(data);
            });
    }, [id]);

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
