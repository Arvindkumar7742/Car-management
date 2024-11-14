const Car = require("../models/Car");
const User = require("../models/User");
require("dotenv").config();
const { uploadOnCloudinary } = require("../utiils/cloudinary");

//Controller for registering a car
exports.registerCar = async (req, res) => {
    try {
        // Destructure fields from the request body
        const {
            title, description, user, tags, type, company, dealer
        } = req.body;

        // Check if All Details are there or not
        const images = req.files?.images;

        if (
            !title ||
            !description ||
            !user ||
            !tags ||
            !images
        ) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            });
        }

        const uploadedPhotos = [];

        //uploading all the images on cloudinary
        for (let i = 0; i < images.length; i++) {
            const uploaded = await uploadOnCloudinary(images[i]);
            if (!uploaded || !uploaded.secure_url) {
                return res.status(500).json({
                    success: false,
                    message: "Image upload failed."
                });
            }
            uploadedPhotos.push(uploaded.secure_url);
        }

        //register the car
        const registeredCar = await Car.create({
            title, description, user, tags, type, company, dealer,
            images: uploadedPhotos,
        })

        //push this car to the user
        const carOwner = await User.findById(user);
        carOwner.cars.push(registeredCar._id);
        carOwner.save();

        //return the successful response
        return res.status(200).json({
            success: true,
            message: "Car registered successfully",
            data: registeredCar
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Car cannot be registered. Please try again.",
        });
    }
};

//get all cars of a user
exports.getUserCars = async (req, res) => {
    try {

        //fetch the user's id from request's params
        const { userId } = req.query;

        //check if the user's exist
        const userExist = await User.findById(userId).populate("cars");

        //if the user not exist
        if(!userExist){
            return res.status(401).json({
                success:false,
                message:"User is not exist with provided userId"
            })
        }
        
        //return the successful response
        return res.status(200).json({
            success:true,
            message:"Cars data fetched successfully",
            cars:userExist.cars
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Cannot able to fetch the cars data for User",
        });
    }
}

//get all cars
exports.getAllCars = async (req, res) => {
    try {

        const cars = await Car.find({});

        //return the successful response
        return res.status(200).json({
            success: false,
            message: "Cars data fetched successfully",
            cars: cars,
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Cannot able to get all the cars.",
        });
    }
};
