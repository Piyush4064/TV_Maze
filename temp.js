import React from "react";
import { Link } from "react-router-dom";

import styles from "./flashCard.module.css";

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
        return schedule.days[0] + "to " + schedule.days.at(-1);
    }
}

function showGenres(genres) {
    const allGenres = genres?.reduce(function (result, item) {
        return result + item + " ";
    }, "");
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

function getDetails(details, flashCardFor) {
    const data = [];
    if (flashCardFor === "show") {
        data.push(
            details?.network
                ? { "Network:": details?.network?.name + " (2019 - now)" }
                : { "Web channel:": details?.webChannel?.name + " (2019 - now)" }
        );

        data.push(
            details?.schedule && {
                "Schedule:":
                    showDays(details?.schedule) +
                    "at (~" +
                    details?.averageRuntime +
                    "min)",
            }
        );
        data.push(details?.status && { "Status:": details?.status });
        data.push(details?.type && { "Show Type:": details?.type });
        data.push(details?.genres && { "Genres:": showGenres(details?.genres) });
    } else {
        data.push(details?.gender && { "Gender:": details?.gender });
        data.push(details?.birthday && { "Age:": calcAge(details?.birthday) });
        data.push(details?.birthday && { "Birthday:": details?.birthday });
        data.push(details?.country?.name && { "Country:": details?.country?.name });
    }
    return data;
}

function FlashCard({ details, flashCardFor }) {
    // const data = getDetails(details, flashCardFor)
    const data = getDetails(details, flashCardFor);


    return (
        <div className={styles.flashCard}>
            {flashCardFor === "show" ? (
                <div>
                    <h2 className={styles.flashCard__title}>Show Info </h2>
                    {data.map((item) => {
                        const keys = Object.keys(item);
                        if (item === null || item[keys[0] === null]) {
                            return <></>;
                        }
                        return (
                            <div>
                                <strong>{keys[0]}</strong> {item[keys[0]]}
                            </div>
                        );
                    })}
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
                        <Link to={details.officialSite}>
                            {details?.officialSite?.slice(4)}{" "}
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className={styles.flashCard__title}>People Info </h2>
                    {data.map((item) => {
                        const keys = Object.keys(item);
                        if (item === null || item[keys[0] === null]) {
                            return <></>;
                        }
                        return (
                            <div>
                                <strong>{keys[0]}</strong> {item[keys[0]]}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default FlashCard;
