const allDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const weekends = allDays.slice(-2);
const weekDays = allDays.slice(0, -2);

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
    let allGenres = genres?.reduce(function (result, item) {
        return result + item + " | ";
    }, "");
    if (allGenres && allGenres.length > 0) {
        allGenres = allGenres.slice(0, -2);
    }
    return allGenres;
}

const SHOW_FLASHCARD_KEYS = {
    NETWORK: "Network",
    SCHEDULE: "Schedule",
    STATUS: "Status",
    TYPE: "Show Type",
    GENRES: "Genres",
};

export const SHOW_FLASHCARD_KEYS_MAP = [
    {
        label: SHOW_FLASHCARD_KEYS.NETWORK,
        contentReader: (data) => {
            return (
                (data?.network ? data?.network?.name : data?.webChannel?.name) +
                " (" +
                data?.premiered?.slice(0, 4) +
                " - " +
                (data?.ended ? data?.ended.slice(0, 4) : "now") +
                ")"
            );
        },
    },
    {
        label: SHOW_FLASHCARD_KEYS.SCHEDULE,
        contentReader: (data) => {
            return data?.schedule
                ? showDays(data?.schedule) +
                      " at " +
                      data?.schedule?.time +
                      " (~" +
                      data?.averageRuntime +
                      "min)"
                : null;
        },
    },
    {
        label: SHOW_FLASHCARD_KEYS.STATUS,
        contentReader: (data) => data?.status,
    },
    {
        label: SHOW_FLASHCARD_KEYS.TYPE,
        contentReader: (data) => data?.type,
    },
    {
        label: SHOW_FLASHCARD_KEYS.GENRES,
        contentReader: (data) => showGenres(data?.genres),
    },
];
