
//promise way 
// @ts-ignore
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 3000);
})
promise.then(() => {
    fetch("http://api.open-notify.org/astros.json")
        .then(response => response.json())
        .then(astrosData => {
            console.log(astrosData);
        })
})

//the async/await way
async function fetchingTheDataFromApi() {
    try {
        await promise;
        const fetchDataAsync = await fetch("http://api.open-notify.org/astros.json");
        const asyncAwaitDataFromApi = await fetchDataAsync.json()
        console.log(asyncAwaitDataFromApi);

    }
    catch (err) {
        console.log(`failure ${err}`)

    }
}
fetchingTheDataFromApi()
