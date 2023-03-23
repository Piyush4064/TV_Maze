export function getURL(URL, requestFrom, item, name) {
    if (requestFrom === "people" || requestFrom === "cast") {
        URL = "/people/" + item.id + "/" + name;
    } else if (requestFrom === "show" || requestFrom === "knownForShows") {
        URL = "/show/" + item.id + "/" + name;
    }
    return URL;
}
