export async function fetchGetRequest(url) {
    const response = await fetch(url);
    if (response.status === false) {
        return null;
    }
    const data = await response.json();
    return data;
}
