import React, { useEffect, useState } from "react";

import MovieNav from "../../molecules/MovieNav";
import { useParams } from "react-router-dom";
import Info from "../info";

function ShowInfo() {
    const [showDetails, setShowDetails] = useState({});

    const { id } = useParams();
    const URL = "https://api.tvmaze.com/shows/" + id;

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setShowDetails(data);
            });
    }, [URL]);
    return (
        <div>
            <h1>{showDetails.name}</h1>
            <MovieNav />
            <Info item={showDetails} summary={showDetails.summary} />
        </div>
    );
}

export default ShowInfo;
