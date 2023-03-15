import React from "react";

import Info from "../info/Info";
import KnownForShows from "../knownForShows/KnownForShows";

function PersonInfo() {
    return (
        <div className="personInfo">
            <Info />
            <KnownForShows />
        </div>
    );
}

export default PersonInfo;
