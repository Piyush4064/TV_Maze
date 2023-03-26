import { showDays, showGenres } from "./helper";

const SHOW_FLASHCARD_KEYS = {
    NETWORK: "Network",
    SCHEDULE: "Schedule",
    STATUS: "Status",
    TYPE: "Show Type",
    GENRES: "Genres",
    OFFICIAL_SITE: "Official Site",
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
    {
        label: SHOW_FLASHCARD_KEYS.OFFICIAL_SITE,
        contentReader: (data) => data.officialSite,
    },
];
