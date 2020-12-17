
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function checkTheShortestWord(arryInput){
    
    
    let shortestWord=arryInput[0];
    for(let i=1;i<arryInput.length;i++){
         shortestWord = (arryInput[i].length < shortestWord.length) ? arryInput[i] : shortestWord;
            }
    return shortestWord;
}
console.log(checkTheShortestWord(danishWords));


