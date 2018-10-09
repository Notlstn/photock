const API_URL = "https://cors-anywhere.herokuapp.com/https://shibe.online/api/";

export async function getImages(type, count) {
    const response = await fetch(API_URL + type + "?count=" + count);
    return await response.json();
}
