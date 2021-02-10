const express = require("express");
const app=express();
const router = express.Router();

const meals = require("./../data/meals.json");
const reservations = require("./../data/reservations.json");
const reviews = require("./../data/reviews.json");

//Respond with the json for the reservation with the corresponding id 
router.get("/:id", async (request, response) => {
    try {
      console.log(reservations);
      console.log("in /api/reservations");
      const reservationWithId=reservations.filter((reservationId)=>reservationId.id==parseInt(request.params.id))
      response.send(reservationWithId[0]);
    } catch (error) {
      throw error;
    }
    
    
  });
  //Respond with the json for all reservations *

  router.get("/", async (request, response) => {
    try {
      console.log(reservations);
      console.log("in /api/reservations");
      response.send(reservations);
    } catch (error) {
      throw error;
    }
    
   
  });

  module.exports = router;