//const danishString = "Jeg har en blå bil";

function checkDanishLetters(string){
    let charå=0;
    let charø=0;
    let charæ=0;
    let returnObject={
        total:charå + charø + charæ
    };
    for(let char of string){
        
if(char==='å'){
    charå++;
    returnObject.å=charå;
}
else if(char==='ø'){
    charø++;
    returnObject.ø=charø;
    }
    else if(char==='æ'){
        charæ++;
        returnObject.æ=charæ;
    }
    
    } 

return returnObject;
}
const danishString = "Jeg har en blå bil";
console.log(checkDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(checkDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}

