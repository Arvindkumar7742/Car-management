import toast from "react-hot-toast";
const { apiconnector } = require("../apiConnector");
const { auth } = require("../api");

export async function Signup(
    email,
    firstName,
    lastName,
    password,
  ) {
     {
      const toastId = toast.loading("loading....");
      try {
        const res = await apiconnector("POST", auth.SIGNUP_API, {
          email,
          firstName,
          lastName,
          password,
        });
  
        console.log("res:::=====>>>>>", res);
        if (!res.data.success) {
          throw new Error(res.data.message);
        }
  
        toast.success("Signed Up successfully");
      } catch (error) {
        console.log("SIGNUP API ERROR............", error)
        toast.error(error.response.data.message);
      }
      toast.dismiss(toastId);
    }
  }
  
  export async function login(email, password) {
  
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true));
      try {
        const res = await apiconnector("POST", auth.LOGIN_API, { email, password });
  
        console.log("res:::=====>>>>>", res);
        if (!res.data.success) {
          throw new Error(res.data.message);
        }
  
        //kya use context yaha use ker skte hai kya?? -- ithink ker skte hai to login user function ko yaha bhejo
        toast.success("Login Successfully");
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error(error.response.data.message);
      }
      toast.dismiss(toastId);
  }