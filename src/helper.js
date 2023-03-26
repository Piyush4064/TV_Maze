export function replaceSpaceWithDash(str) {
    return str?.replace(/ /g, "-");
}

export function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str))
}