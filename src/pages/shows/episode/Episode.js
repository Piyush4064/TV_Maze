import React, { useEffect, useState } from "react";

import Table from "../../../organism/table/Table";
import NavBarEpisode from "../../../molecules/navBarEpisode/NavBarEpisode";
import { useParams } from "react-router-dom";
import ShowDetails from "../../../templates/showDetails/ShowDetails";
import styles from "./episode.module.css";

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
        <ShowDetails>
            <NavBarEpisode seasons={seasons} />
            {seasons.map((item) => {
                return (
                    <div>
                        <h2 id={"S" + item.number}>
                            <span>Season {item.number}</span>
                        </h2>
                        <Table seasonId={item.id} />
                    </div>
                );
            })}
        </ShowDetails>
    );
}

export default Episode;
