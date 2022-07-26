const url = 'https://www.cheapshark.com/api/1.0/deals';

function restructureData(data) {
    const arr = [];

    data.forEach((data) => {
        arr.push({
            id: data.gameID,
            name: data.title,
            price: data.normalPrice,
            images: data.thumb,
        });
    });
    return arr;
}
export const getGameData = async (job, thunkAPI) => {
    try {
        const response = await fetch(url, job);
        const data = await response.json();
        const data2 = restructureData(data.slice(12, 25));
        return data2;
    } catch {
        return thunkAPI.rejectWithValue('something went wrong');
    }
};
