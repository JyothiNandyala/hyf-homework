"use strict"

const seriesDurations = [
     {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
 
  const lifeSpanHours=700800;
let totalPercentage=0;
  
 function logOutSeriesText(){
    
    for(let  i=0;i<seriesDurations.length;i++){
        const totalHours=seriesDurations[i].days*24+seriesDurations[i].hours+(seriesDurations[i].minutes)/60;
        
        const averagePercentage=(totalHours/lifeSpanHours)*100;

        console.log(seriesDurations[i].title + " took "+ averagePercentage.toFixed(3)+ " % of my life") ;
        totalPercentage=totalPercentage+averagePercentage;
        
    }
   
    console.log("In total that is " + totalPercentage.toFixed(2) + " % of my life")
  }
  
  logOutSeriesText()