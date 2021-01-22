//Create an array with 3 items. All items should be functions. 
//Iterate through the array and call all the functions.
const functionArray = [functionOne(), functionTwo(), functionThree()];

for (let i = 0; i < functionArray.length; i++) {
    functionArray[i];

}
function functionOne() {
    console.log("This is an first function");
}

function functionTwo() {
    console.log("This is an second function");

}

function functionThree() {
    console.log("This is an third function");

}
//Create a function as a const and try creating a function normally. Call both functions

function foo() {
    console.log("This is an function declaration")
}

const variableDeclaration = function () {
    console.log("This is an function expression")
}
foo();
variableDeclaration();
//Create an object that has a key whose value is a function. Try calling this function.

let objectFuncton = {
    key: function getTheTenNumbers() {

        for (let i = 0; i <= 10; i++) {
            console.log(i);
        }

    }
}
objectFuncton.key();