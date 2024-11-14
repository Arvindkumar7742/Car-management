import toast from "react-hot-toast";
const { apiconnector } = require("../apiConnector");
const { car } = require("../api");

export async function RegisterCar(
   formData
) {
  {
    const toastId = toast.loading("loading....");
    try {
        console.log("data kldlnk",formData);
      const res = await apiconnector("POST", car.REGISTER_CAR_API,formData);

      console.log("res:::=====>>>>>", res);
      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      toast.success("Car added successfully");
      toast.dismiss(toastId);
      return res.data.data;
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
  }
}