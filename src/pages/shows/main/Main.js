import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../../../templates/info";
import ShowDetails from "../../../templates/showDetails/ShowDetails";

function Main() {
    const [showDetails, setShowDetails] = useState({});

    const { id } = useParams();
    console.log("Yes");
    const URL = "https://api.tvmaze.com/shows/" + id;

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setShowDetails(data);
            });
    }, [URL]);
    return (
        <ShowDetails showTitle={showDetails.name}>
            <Info item={showDetails} summary={showDetails.summary} />
        </ShowDetails>
    );
}

export default Main;
