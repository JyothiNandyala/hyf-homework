async function getBadMovies() {
    try {
        const response = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        const moviesData = await response.json();
        console.log(moviesData);
        const badMovies = moviesData.filter((item) => (item.rating < 4) && (item.year >= 2000)
        );
        console.log(badMovies)
    }
    catch (err) {
        console.log(`failure ${err}`)
    }
}
getBadMovies()

