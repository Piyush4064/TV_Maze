import React from "react";

import { Link } from "react-router-dom";
import styles from "./cardImage.module.css";

function CardImage() {
    return (
        <Link to="/show/main">
            <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/444/1112115.jpg"
                alt="movie"
            />
        </Link>
    );
}

export default CardImage;
