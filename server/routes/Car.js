const express = require("express")
const { registerCar, getUserCars, getAllCars, deleteCar } = require("../controllers/Car")
const router = express.Router()


//route to register a car
router.post("/registerCar",registerCar);
//get all the cars of particular user
router.get("/getUserCars", getUserCars);
//get all the cars
router.get("/getAllCars",getAllCars);
//get all the cars
router.delete("/deleteCar",deleteCar);

// Export the router for use in the main application
module.exports = router