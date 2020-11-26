//const danishString = "Jeg har en blå bil";
const danishLetters="å,ø,æ";
function checkDanishLetters(string){
    let charå=0;
    let charø=0;
    let charæ=0;
    let returnObject={};
    for(let i=0;i<string.length;i++){
        let char=string[i];
if(char==='å'){
    
    charå++;
}
if(char==='ø'){
    charø++;
    }
    if(char==='æ'){
        charæ++;
    }
    returnObject={total:charå+charø+charæ ,å:charå,ø:charø,æ:charæ };
        
} 
return returnObject;
}
const danishString = "Jeg har en blå bil";
console.log(checkDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(checkDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}