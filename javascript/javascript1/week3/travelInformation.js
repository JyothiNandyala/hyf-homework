"use strict"

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function returnTime(travelInformation){
      let time = (travelInformation.destinationDistance)/(travelInformation.speed);
    var hrs = parseInt(Number(time));
var min = Math.round((Number(time)-hrs) * 60);
var clocktime = hrs + " hours and " +min + " minutes ";

      return clocktime;
  }
  console.log(returnTime(travelInformation));
  