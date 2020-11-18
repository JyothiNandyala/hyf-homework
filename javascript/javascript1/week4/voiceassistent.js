"use strict"

//voice Assistant
let name='';
let todos=[];

function getReply(command){
    const commandArray=command.split(' ');
    

    if(typeof command!=="string"){
        return "please enter the command in specific formate";
    }
    
    else if(commandArray[0]==="hello"){
        if(name===''){
           name= commandArray[commandArray.length-1];
        return "Nice to meet you " +name;
    }else{
        return "your name already there";
    }
}

else if(commandArray[0]==="what"){
    return "Your name is " +name;

}
else if(command.includes("add") && command.includes("todo")){
const addtodo=commandArray.slice(1, 2).join(" ");

todos.push(addtodo);
return addtodo+ " added to your todo";
}

else if(command.includes("Remove") && command.includes("todo")){
    const addtodo=commandArray.slice(1,-3).join(" ");
if(todos.includes("addtodo")){
    todos.splice(todos.indexOf(addtodo));
    return addtodo+ " removed fishing from your todo";
}else{
    return addtodo+ " is not in the todos list";
}
}
else if(command==="What is on my todo?"){
    return todos;
}
else if(command==="What day is it today?"){
    let date=new Date();
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const response=date.getDate() + " of " + months[date.getMonth()]+ ' ' +date.getFullYear();
return response;
}
if(commandArray[0]==="Set"){  

    const minutes = commandArray[4];
    const milliSeconds = minutes*60*1000;


    function setTimer(){
        console.log("Timer done");
}
    console.log("Timer set for "+commandArray[4]+ " " +commandArray[5]);
    setTimeout(setTimer, milliSeconds);
    return "Timer is set so just wait";
}
if(command){
    return getMathFunction(commandArray);
}
}
//Mathamatics it will calculate the mathematics operation and return the result.

function getMathFunction(commandArray){
    let  operation=commandArray[3];
    let a=parseInt(commandArray[2]);
    let b=parseInt(commandArray[4]);
    
        switch(operation){
            case '+':
                return a+b;   
                 break;
            case '-':
                     return a-b;
                     break;
             case '*':
                 return a*b;
                 break; 
            case '/':
                     return a/b;
                     break;   
        }
    }


console.log(getReply("hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("hello my name is Benjamin"));
console.log(getReply("what is my name?")); // "Your name is Benjamin"
console.log(getReply("add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("Set a timer for 1 minute"));