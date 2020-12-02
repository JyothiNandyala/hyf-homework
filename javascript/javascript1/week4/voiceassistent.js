"use strict"
const todo = [];
let name = "";

function getReply(commandArray) {
  if (typeof commandArray != "string") {
    return "Please enter your command as a string which means in quotes";
  }
  const commandWords = commandArray.split(" ");
  const elementActivity = commandArray.substring(3, commandArray.length - 11);

  if (commandArray) {
     const number1 = commandWords[2];
    const number2 = commandWords[4];
    let result;
    if (commandWords[3] === "+") {
        result = number1 + number2;
      return  result;
    } else if (commandWords[3] === "-") {
        result = number1 - number2;
      return  result;
    } else if (commandWords[3] === "/") {
        result = number1 / number2;
      return  result;
    } else if (commandWords[3] === "*") {
        result = number1 * number2;
      return  result;
    }
  }
  switch (commandArray) {
    case "Hello my name is jyothi":
      if (name == "") {
        name = commandWords[commandWords.length - 1];
        return "Nice to meet you " + name;
      } else {
        return "Your name " + name + " already there";
      }
      break;
    case "What is my name?":
      if (name !== undefined) {
        return "Your name is " + name;
      } else {
        return "Please enter your name first.";
      }
      break;
    case "Add fishing to my todo":
      todo.push(elementActivity);
      return elementActivity + " added to your todo.";
      break;
    case "Add singing in the shower to my todo":
      todo.push(elementActivity);
      return elementActivity + " added to your todo.";
      break;
    
    
    case "Remove singing in the shower from my todo":
      return "Removed" + removeElement(commandArray) + " from your todo.";
      break;
    case "What is on my todo?":
      return "you have " + todo.length + " todos - " + todo;
      break;
    case "What day is it today?":
        let date=new Date();
        let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const response=date.getDate() + " of " + months[date.getMonth()]+ ' ' +date.getFullYear();
    return response;
      break;
      
    case "Set a timer for 4000 milliseconds":
        const minutes = commandArray[4];
        const milliSeconds = minutes*60*1000;
    
     function setTimer(){
            console.log("Timer done");
    }
        console.log("Timer set for "+commandArray[4]+ " " +commandArray[5]);
        setTimeout(setTimer, milliSeconds);
        return "Timer is set so just wait";
        break;
    default:
      return "please enter the required format command";
  }
  
  function removeElement(inputString) {
    const removeElementFromTODo = inputString.substring(6, inputString.length - 13);
    for (let i = 0; i < todo.length; i++) {
      if (todo[i] === removeElementFromTODo) {
        return todo.splice(i, 1);
      }
    }
  }
}


console.log(getReply("Hello my name is jyothi"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove singing in the shower from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 12 - 2"));
console.log(getReply("what is 10 / 5"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 4000 milliseconds"));
