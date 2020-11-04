
let boughtCandyPrices =[]

function addCandy(candyType ,weight){
    if(candyType==="Sweet"){
       let  price=weight*0.5;
        boughtCandyPrices.push(price);
    }
    else if(candyType==="Chocolate"){
         price=weight*0.7;
        boughtCandyPrices.push(price);
    }
    else if(candyType==="Toffee"){
         price=weight*1.1;
        boughtCandyPrices.push(price);
    }else if(candyType==="Chewing-gum"){
         price=weight*0.03;
     boughtCandyPrices.push(price); 
     
    }
  
}
addCandy("sweet", 20);
addCandy("Chocolate", 20);
addCandy("Toffee", 20);
addCandy("Chewing-gum", 20);

let amountToSpend =Math.random() * 100;
console.log(amountToSpend);
let totalPrice=0;
for(let i=0;i<boughtCandyPrices.length;i++){
    totalPrice=totalPrice+boughtCandyPrices[i];
    console.log(totalPrice);
}

function canBuyMoreCandy(){
if(totalPrice>amountToSpend){
console.log("Enough candy for you");
}else{
    console.log("The amount to spend is " + amountToSpend + "the total price of the candy is " + totalPrice + 
    " You can buy more, so please do!");
}
}
canBuyMoreCandy()
