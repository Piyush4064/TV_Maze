export function replaceSpaceWithDash(str) {
    return str?.replace(/ /g, "-");
}

export function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

export function getUniqueKey(index = 0) {
    return new Date().valueOf() + index + Math.random() * 100;
}
