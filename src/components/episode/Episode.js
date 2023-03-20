import React, { useEffect, useState } from "react";

import Table from "../../organism/table/Table";
import NavBarEpisode from "../../molecules/navBarEpisode/NavBarEpisode";
import styles from "./episode.module.css";
import MovieNav from "../../molecules/MovieNav/MovieNav";
import { useParams } from "react-router-dom";

function Episode() {
    const { id } = useParams();
    const [seasons, setSeasons] = useState([]);
    useEffect(() => {
        fetch("https://api.tvmaze.com/shows/" + id + "/seasons")
            .then((res) => res.json())
            .then((data) => {
                data.reverse();
                setSeasons(data);
            });
    }, [id]);

    return (
        <div className={styles.episode}>
            <MovieNav />
            <NavBarEpisode />
            {seasons.map((item) => {
                return (
                    <div>
                        <h2>
                            <span>Season {item.number}</span>
                        </h2>
                        <Table seasonId={item.id} />
                    </div>
                );
            })}
        </div>
    );
}

export default Episode;
