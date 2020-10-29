//peter house details
let peterhousewidth=8 ;
let peterhousedepth=10 ;
let peterhouseheight=10 ;
let volumeInMeters=peterhousewidth*peterhousedepth*peterhouseheight;
let peterhousegardensize=100 ;
let peterhouseactualcost=2500000 ;
let housePrice=volumeInMeters*2.5*1000+peterhousegardensize*300;
let houserealcost=peterhouseactualcost-housePrice;
console.log(houserealcost);
if(peterhouseactualcost>housePrice){
    console.log("peter is paying too much for the house");
}
else{
    console.log("peter is paying little amount for the house");
}
//julie house details
let juliehousewidth=5 ;
let juliehousedepth=11 ;
let juliehouseheight=8 ;
let julievolumeInMeters=juliehousewidth*juliehousedepth*juliehouseheight;
let juliehousegardensize=70 ;
let juliehouseactualcost=1000000 ;
let juliehouseprice=julievolumeInMeters * 2.5 * 1000 + juliehousegardensize * 300;
console.log(juliehouseprice);
if(juliehouseactualcost>juliehouseprice){
    console.log("julie is paying too much for the house");
}
else{
    console.log("julie is paying little amount for the house");
}
