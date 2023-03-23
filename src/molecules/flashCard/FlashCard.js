import React from "react";
import { Link } from "react-router-dom";

import styles from "./flashCard.module.css";
import FlashCardInfoDisplay from "../flashCardInfoDisplay/FlashCardInfoDisplay";

const allDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const weekends = ["Saturday", "Sunday"];
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function showDays(schedule) {
    if (schedule.days === allDays) {
        return "All days";
    } else if (schedule.days === weekends) {
        return "On Weekends";
    } else if (schedule.days.length === 1) {
        return schedule.days[0];
    } else if (schedule.days === weekDays) {
        return "On Weekdays";
    } else {
        return schedule.days[0] + " to " + schedule.days.at(-1);
    }
}

function showGenres(genres) {
    const allGenres = genres?.reduce(function (result, item) {
        return result + item + " ";
    }, "");
    console.log(genres);
    return allGenres;
}

function calcAge(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function FlashCard({ details, flashCardFor }) {
    console.log("details", details);
    return flashCardFor === "show" ? (
        <div className={styles.flashCard}>
            <h2 className={styles.flashCard__title}>Show Info </h2>
            {details?.network ? (
                // <FlashCardInfoDisplay heading="Network" content={details?.network?.name + " (2019 - now)"}/>
                <div>
                    <strong>Network: </strong>
                    {details?.network?.name +
                        " (" +
                        details?.premiered?.slice(0, 4) +
                        " - " +
                        (details?.ended ? details?.ended.slice(0, 4) : "now") +
                        ")"}
                </div>
            ) : (
                <div>
                    <strong>Web channel:</strong>
                    {details?.webChannel?.name + " (2019 - now)"}
                </div>
            )}

            {details?.schedule && (
                <div>
                    <strong>Schedule:</strong>
                    {showDays(details?.schedule) +
                        "at" +
                        "(~" +
                        details?.averageRuntime +
                        "min)"}
                </div>
            )}
            {details?.status && (
                <div>
                    <strong>Status</strong>
                    {" " + details?.status}
                </div>
            )}
            {details?.type && (
                <div>
                    <strong>Show Type:</strong>
                    {" " + details?.type}
                </div>
            )}
            {details?.genres && (
                <div>
                    <strong>Genres:</strong>
                    {" " + showGenres(details?.genres)}
                </div>
            )}
            <div>
                <strong>Episodes ordered</strong>
                {" 8 episodes"}
            </div>
            <div>
                <strong>Created by:</strong>
                {" Jon Favreau"}
            </div>
            <div>
                <strong>Official site:</strong>
                <Link to={details.officialSite}>{details?.officialSite?.slice(4)} </Link>
            </div>
        </div>
    ) : (
        <div className={styles.flashCard}>
            <h2 className={styles.flashCard__title}>Show Info </h2>
            {details?.gender && (
                <div>
                    <strong>Gender:</strong>
                    {" " + details?.gender}
                </div>
            )}
            {details?.birthday && (
                <div>
                    <strong>Age:</strong>
                    {" " + calcAge(details?.birthday)}
                </div>
            )}
            <div>
                <strong>Birthday:</strong>{" "}
                {details?.birthday ? details?.birthday : "Unknown"}
            </div>
            <div>
                <strong>Born in:</strong>{" "}
                {details?.country?.name ? details?.country?.name : "Unknown"}
            </div>
        </div>
    );
}

export default FlashCard;
