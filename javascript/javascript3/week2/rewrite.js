//Rewrite setTimeout 

function setTimeoutPromise(milliSeconds) {
    return new Promise(resolve => setTimeout(resolve, milliSeconds))
}
setTimeoutPromise(4000).then(() => {
    console.log("Called after 4 seconds")
})

//Rewrite navigator.geolocation.getCurrentPosition to promises
const getCurrentLocation = function (options) {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });