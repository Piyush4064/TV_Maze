import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Info from "../info";
import KnownForShows from "../knownForShows";
import { fetchGetRequest } from "../../api/api";

function PersonInfo() {
    const [personDetails, setPersonDetails] = useState({});

    const { id } = useParams();
    const URL = "https://api.tvmaze.com/people/" + id + "?embed=castcredits";

    useEffect(() => {
        (async () => {
            const data = await fetchGetRequest(URL);
            if (data === null) {
                return;
            }
            setPersonDetails(data);
        })();
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
