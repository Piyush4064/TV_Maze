import {All_DAYS, WEEKENDS, WEEKDAYS} from "./constant"

export function showDays(schedule) {
    if (schedule.days === All_DAYS) {
        return "All days";
    } else if (schedule.days === WEEKENDS) {
        return "On Weekends";
    } else if (schedule.days.length === 1) {
        return schedule.days[0];
    } else if (schedule.days === WEEKDAYS) {
        return "On Weekdays";
    } else {
        return schedule.days[0] + " to " + schedule.days.at(-1);
    }
}

export function showGenres(genres) {
    let allGenres = genres?.reduce(function (result, item) {
        return result + item + " | ";
    }, "");
    if (allGenres && allGenres.length > 0) {
        allGenres = allGenres.slice(0, -2);
    }
    return allGenres;
}