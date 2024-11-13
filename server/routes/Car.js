const express = require("express")
const { registerCar, getUserCars, getAllCars } = require("../controllers/Car")
const router = express.Router()


//route to register a car
router.post("/registerCar",registerCar);
//get all the cars of particular user
router.get("/getUserCars", getUserCars);

//get all the cars
router.get("/getAllCars",getAllCars);

// Export the router for use in the main application
module.exports = router