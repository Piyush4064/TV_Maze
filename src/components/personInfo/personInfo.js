import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Info from "../info/Info";
import KnownForShows from "../knownForShows/KnownForShows";

function PersonInfo() {
    const [personDetails, setPersonDetails] = useState({});

    const { id } = useParams();
    const URL = "https://api.tvmaze.com/people/" + id + "?embed=castcredits";

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setPersonDetails(data);
            });
    }, [URL]);

    return (
        <div className="personInfo">
            <h1>{personDetails.name}</h1>
            <Info item={personDetails} />
            <KnownForShows castcredits={personDetails?._embedded?.castcredits} />
        </div>
    );
}

export default PersonInfo;
