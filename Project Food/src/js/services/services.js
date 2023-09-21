//Async/await block 5.90
const postData = async (url, data) => {
    let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
    //return res.json - promise
    return await res.json();
};

async function getResource(url) {
    //дожидается fetch
    let res = await fetch(url);

    //если ошибка, то fetch не выпадает в catch, поэтому обрабатываем как тут
    if (!res.ok) {
        //выпадает в консоль
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    //дожидается json
    return await res.json();
}

export {postData, getResource};