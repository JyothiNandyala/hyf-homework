let dogYearOfBirth=2035;
let dogYearFuture =2045;
let dogYear = dogYearFuture-dogYearOfBirth;
let dogAndHumanYear=" dog ";
let dogAge;
let shouldShowResultInDogYears=true;

if(shouldShowResultInDogYears){
    dogAge =dogYear*7;
console.log("Your dog will be "  + dogAge + dogAndHumanYear +  "years old in " +dogYearFuture );
}
else{
    dogAndHumanYear=" human ";
   console.log("Your dog will be "  + dogYear + dogAndHumanYear +  "years old in " + dogYearFuture);

}

