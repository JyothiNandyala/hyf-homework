
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function checkTheShortestWord(){
    let shortestWord;
    let shortestWordLength=danishWords[0].length;

    for(let i=0;i<danishWords.length;i++){
       
        if(danishWords[i].length < shortestWordLength){
            shortestWordLength=danishWords[i].length;
            shortestWord=danishWords[i];
            console.log("The shortest word is " +shortestWord);
        }

    }
    return shortestWord;
}
checkTheShortestWord(danishWords);
