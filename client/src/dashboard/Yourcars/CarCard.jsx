import React, { useContext } from "react";
import { deleteCar } from "../../services/operations/carOperations";
import toast from "react-hot-toast";
import { CarContext } from "../../ContextAPI/CarContext";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car, onViewDetails, getCarDetails }) => {

  const { setEditCarByUSer } = useContext(CarContext);
  const navigate = useNavigate();

  async function deleteHandler(carId) {
    try {
      await deleteCar(carId);
      await getCarDetails();
      toast.success("Car deleted successfully");
    }
    catch (error) {
      console.log("Error wile deleting the car", error);
    }
  }

  function editHandler() {
    setEditCarByUSer(car, true);
    navigate("/dashboard/edit-car");
  }

  return (
    <div className="car-card bg-indigo-600 text-white rounded-lg shadow-lg p-6 flex flex-col space-y-4">
      <h3 className="text-2xl font-bold">{car.title}</h3>
      <p className="text-xl text-indigo-200">{car.description}</p>

      <div className="grid grid-cols-2 gap-4">
        {car.images.slice(0, 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${car.title}-${index}`}
            className="rounded-md w-full h-[230px] object-cover"
          />
        ))}
      </div>

      <div className="text-xl space-y-1">
        <p>
          <span className="font-medium">Type:</span>{" "}
          <span className="text-indigo-300">{car.type}</span>
        </p>
        <p>
          <span className="font-medium">Company:</span>{" "}
          <span className="text-indigo-300">{car.company}</span>
        </p>
        <p>
          <span className="font-medium">Dealer:</span>{" "}
          <span className="text-indigo-300">{car.dealer}</span>
        </p>
      </div>

      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={onViewDetails}
          className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium hover:bg-indigo-100 transition-all duration-200"
        >
          View Details
        </button>
        <div className="flex space-x-2">
          <button
            onClick={editHandler}
            className="bg-yellow-500 px-4 py-2 rounded-md font-medium hover:bg-yellow-600 transition-all duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => deleteHandler(car._id)}
            className="bg-red-500 px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

  );
};

export default CarCard;
