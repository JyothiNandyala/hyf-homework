const express = require("express");
const app=express();
const router = express.Router();
const reviews = require("./../data/reviews.json");

//Respond with the json for the review with the corresponding id *
router.get("/:id", async (request, response) => {
    try {
      console.log(reviews);
      console.log("in /api/reviews/id");
      const reviewsWithId=reviews.filter((reviewId)=>reviewId.id===parseInt(request.params.id));
      response.send(reviewsWithId[0]);
    } catch (error) {
      throw error;
    }
    
   
  });
  //Respond with the json for all reviews *

  router.get("/", async (request, response) => {
    try {
      console.log(reviews);
      console.log("in /api/reviews");
      response.send(reviews);
    } catch (error) {
      throw error;
    }
    
    
  });

  module.exports = router;