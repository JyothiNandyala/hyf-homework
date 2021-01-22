//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
const scriptLoaded = function () {
    console.log("script is loaded after 2.5 seconds.")
}
setTimeout(scriptLoaded, 2500);

//Create a function that takes 2 parameters: delay and stringToLog. 
//Calling this function should log out the stringToLog after delay seconds. 
//Call the function you have created with some different arguments.

function checkDelay(delay, stringToLog) {

    setTimeout(function () {
        console.log(stringToLog);
    }, 3000)

}
checkDelay(3, "This strng is loaded after 3 seconds");

//Create a button in html. When clicking this button, use the function you created in the previous task to log out the text:
// Called after 5 seconds 5 seconds after the button is clicked.

const buttonElement = document.getElementById('button_click');
buttonElement.addEventListener('click', () =>
    checkDelay(3, "called after 3 seconds"));

//Create two functions and assign them to two different variables. One function logs out Earth, 
//the other function logs out Saturn. Now create a new third function that has one parameter: 
//planetLogFunction. The only thing the third function should do is call the provided parameter function. 
//Try call the third function once with the Earth function and once with the Saturn function.
const earthLogger = function () {
    console.log("earth")
}
const saturnLogger = function () {
    console.log("sarutn")
}
function planetLogFunction(callback) {
    callback()
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//Create a button with the text called "Log location". When this button is clicked the location 
//(latitude, longitude) of the user should be logged out using this
const buttonElement2 = document.getElementById('log_location');

function showPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let latitude = "Ths is the lattitude : " + position.coords.latitude;
            let longitude = "This is the longtude: " + position.coords.longitude;
            console.log(latitude);
            console.log(longitude)
        });
    } else {
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}

buttonElement2.addEventListener('click', showPosition)

//Create a function called runAfterDelay. It has two parameters: delay and callback. 
//When called the function should wait delay seconds and then call the provided callback function. 
//Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    const milliSeconds = delay * 100;
    setTimeout(function () {
        callback();
    }, 5000);
}

runAfterDelay(5, function () {
    console.log("should be logged out after 5 seconds");
})

//Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
//If a double click has been detected, log out the text: "double click!"

const paragraphElement = document.getElementById('double_click');
paragraphElement.addEventListener('dblclick', () => {
    console.log("double clicked");
})

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean,
// logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should 
//call the logFunnyJoke function that should log out a funny joke. And vice versa.

let shouldTellFunnyJoke = true;
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

function logFunnyJoke() {
    console.log("It is an funny joke");
}

function logBadJoke() {
    console.log("It is an very bad joke");
}
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);