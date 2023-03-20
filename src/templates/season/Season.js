import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import styles from "./season.module.css";
import Card from "../../organism/card";
import SeasonInfo from "../../molecules/seasonInfo";
import MovieNav from "../../molecules/movieNav";

function Season() {
    const { id } = useParams();
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows/" + id + "/seasons")
            .then((res) => res.json())
            .then((data) => {
                setSeasons(data);
            });
    }, [id]);

    return (
        <div>
            <MovieNav />
            {seasons.map((item) => (
                <div className={styles.season}>
                    <Card showFooterName={false} showFooterIcon={false} item={item} />
                    <SeasonInfo item={item}/>
                </div>
            ))}
        </div>
    );
}

export default Season;
