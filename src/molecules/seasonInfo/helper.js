export function showPremiereDate(premiereDate, endDate) {
    if (endDate === null || premiereDate.slice(0, 4) === endDate.slice(0, 4)) {
        return premiereDate.slice(0, 4);
    }
    return premiereDate.slice(0, 4) + "-" + endDate.slice(0, 4);
}
