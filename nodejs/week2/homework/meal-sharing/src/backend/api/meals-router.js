const express = require("express");
const app = express();
const router = express.Router();

const meals = require("./../data/meals.json");

//Respond with the json for all the meals

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");
    //console.log(request.query);
    if (Object.keys(request.query).length === 0) {
      response.send(meals);
    }
    else if (request.query.maxPrice) {
      const maxPrice = request.query.maxPrice;
      if (isNaN(parseInt(maxPrice)) || parseInt(maxPrice) < 0) {
        response.status(400).send();
      }
      else {
        const mealsUnderPrice = meals.filter((mealPrice) => mealPrice.price <= maxPrice)
        response.send(mealsUnderPrice)
      }
    }
    else if (request.query.title) {
      const mealsWithTitle = request.query.title;
      let rgxp = new RegExp(mealsWithTitle, "i");
      const mealsTitle = meals.filter((mealTitle) => mealTitle.title.match(rgxp));
      response.send(mealsTitle);
    }
    else if (request.query.createdAfter) {
      const createdAfter = request.query.createdAfter;

      if (isNaN(Date.parse(request.query.createdAfter))) {
        response.status(400).send();
      }
      else {
        const mealsCreatedAfterDate = meals.filter((mealDate) => Date.parse(mealDate.createdAt) > Date.parse(createdAfter));
        response.send(mealsCreatedAfterDate)
      }

    }
    else if (request.query.limit) {
      const limit = request.query.limit;
      if (isNaN(parseInt(limit))) {
        response.status(400).send();
      }
      else {
        const mealsWithLimit = meals.slice(0, limit);
        response.send(mealsWithLimit);
      }
    }
    else {
      response.send('There is no meals with those parameters');
    }
  } catch (error) {
    throw error;
  }

});



//Respond with the json for the meal with the corresponding id

router.get("/:id", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals/id");
    if (Number.isNaN(parseInt(request.params.id)) || parseInt(request.params.id) < 0) {
      response.status(400).send();
    }
    else {
      const mealWithSpecificId = meals.filter((specificId) => specificId.id === parseInt(request.params.id))
      mealWithSpecificId.length === 0 ? response.send("there is no meals with that id") : response.send(mealWithSpecificId[0])
    }

  } catch (error) {
    throw error;
  }

});

module.exports = router;
