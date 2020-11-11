
function weatherWearClothes(temp){
    if(temp>17){
    return "shorts and a t-shirt";
    }
    else{
        return "You have to wear more clothes";
    } 
    
    } 
    const clothesToWear = weatherWearClothes(20);
    console.log(clothesToWear); 