export function replaceSpaceWithDash(str) {
    return str?.replace(/ /g, "-");
}

export function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str))
}

export const isElementPresent = (favData, item) => {
    const follow = favData.filter((fav) => fav.id === item.id);

    if (follow.length === 0) {
        return false;
    }

    return true;
};