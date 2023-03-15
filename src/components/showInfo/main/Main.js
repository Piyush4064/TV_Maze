import React from "react";

import { Icon } from "../../../atom";

import MoviePosterCard from "../../../organism/moviePosterCard/MoviePosterCard";
import FlashCard from "../../../molecules/flashCard/FlashCard";
import styles from "./main.module.css";

function Main() {
    return (
        <div>
            <h1>The Mandalorian</h1>
            <div className={styles.main}>
                <MoviePosterCard />
                <div className={styles.summary}>
                    <p>
                        After the stories of Jango and Boba Fett, another warrior emerges
                        in the Star Wars universe. The Mandalorian is set after the fall
                        of the Empire and before the emergence of the First Order. We
                        follow the travails of a lone gunfighter in the outer reaches of
                        the galaxy far from the authority of the New Republic...
                    </p>
                    <div className={styles.socailMediaIcon}>
                        <p>Share this on:</p>
                        <Icon classes="fa-brands fa-facebook" />
                        <Icon classes="fa-brands fa-twitter" />
                        <Icon classes="fa-brands fa-reddit" />
                        <Icon classes="fa-brands fa-tumblr" />
                    </div>
                </div>
                <FlashCard />
            </div>
        </div>
    );
}

export default Main;
