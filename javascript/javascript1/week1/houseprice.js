//peter house details
let peterHouseWidth=8 ;
let peterHouseDepth=10 ;
let peterHouseHeight=10 ;
let volumeInMeters=peterHouseWidth*peterHouseDepth*peterHouseHeight;
let peterHouseGardenSize=100 ;
let peterHouseActualCost=2500000 ;
let housePrice=volumeInMeters*2.5*1000+peterHouseGardenSize*300;
let houseRealCost=peterHouseActualCost-housePrice;
console.log(houseRealCost);
if(peterHouseActualCost>housePrice){
    console.log("peter is paying too much for the house");
}
else if(peterHouseActualCost=housePrice){
    console.log("peter is paying actual amount for the house");
}
else{
    console.log("peter is paying little amount for the house");
}
//julie house details
let julieHouseWidth=5 ;
let julieHouseDepth=11 ;
let julieHouseHeight=8 ;
let julievolumeInMeters=julieHouseWidth*julieHouseDepth*julieHouseHeight;
let julieHouseGardenSize=70 ;
let julieHouseActualCost=1000000 ;
let julieHousePrice=julievolumeInMeters * 2.5 * 1000 + julieHouseGardenSize * 300;
console.log(julieHousePrice);
if(julieHouseActualCost<julieHousePrice){
    console.log("julie is paying too much for the house");
}
else if(julieHouseActualCost=julieHousePrice){
    console.log("julie is paying actual housecost");
}
else{
    console.log("julie is paying little amount for the house");
}
