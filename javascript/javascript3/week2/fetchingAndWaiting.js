
//promise way 
// @ts-ignore
function waite(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    });
}
waite(8).then(() => {
    fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(astrosData => {
            console.log(astrosData);
        })
})

//the async/await way
async function fetchingTheDataFromApi() {
    try {
        await waite;
        const fetchDataAsync = await fetch("http://api.open-notify.org/astros.json");
        const asyncAwaitDataFromApi = await fetchDataAsync.json()
        console.log(asyncAwaitDataFromApi);

    }
    catch (err) {
        console.log(`failure ${err}`)

    }
}
fetchingTheDataFromApi()
