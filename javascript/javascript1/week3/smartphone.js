"use strict"

//adding activities
const activities =[];
const today  = new Date();

const date=today.toLocaleDateString("en-US"); 
function addActivity(activity ,duration){
    activities.push({date,activity ,duration});
}
addActivity("youtube",30)
addActivity("facebook",90)
addActivity("news",80)
addActivity("netflix",40)
console.log(activities);


//show my status
let usageAmount=0;
let usageLimit=60;
function showStatus(activities){

    if(activities.length === 0){
        console.log("Add some activities before calling showStatus");
    }else{
        
    }

for(let i=0;i<activities.length;i++){
    usageAmount=usageAmount+activities[i].duration;
}
     if(usageAmount >=usageLimit){
        console.log("You have reached your limit, no more smartphoning for you!")
    }
    else{
        console.log("You have the limit, you can use smartphone!")
    }

const totalActivities=activities.length;
console.log("You have added " +totalActivities+ " activities. The amount to " +usageAmount+ " min. of usage");
}

showStatus(activities);

//for which activity spending more time.

function calculateActivity(){
    const  spentTime=Math.max.apply(Math, activities.map(x => x.duration));
    for(let i=0;i<activities.length;i++){
      if(activities[i].duration===spentTime){
          console.log("You have spent more time on "+activities[i].activity+ " activity.")
      }
    }
    }
calculateActivity();
