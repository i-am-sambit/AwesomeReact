
export async function getTasks(callback) {

    const url = 'https://api.myjson.com/bins/i64i5';

    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        callback(await response.json());
    } catch(error) {
        console.log(error);
        callback({
            message: error
        });
    }
}