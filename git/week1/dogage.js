let dogYearOfBirth=2035;
let dogYearFuture =2045;
let dogYear = dogYearFuture-dogYearOfBirth;
let dogandhumanyear=" dog ";
let dogage;
let shouldShowResultInDogYears=true;

if(shouldShowResultInDogYears){
    dogage =dogYear*7;
console.log("Your dog will be "  + dogage + dogandhumanyear +  "years old in " +dogYearFuture );
}
else{
   dogandhumanyear=" human ";
   console.log("Your dog will be "  + dogYear + dogandhumanyear +  "years old in " + dogYearFuture);

}

