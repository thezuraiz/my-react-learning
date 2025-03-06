import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
// import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import useFetchApi from "../../helper_function/api_handler";
import { useNavigate } from "react-router-dom";
import InputField from "../../helper_function/InputField";
import { useDispatch } from "react-redux";

const LoginUsinAuthentication = () => {
  console.log("Login form by UseContext");

  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(20),
  });

  const { fetch_Api } = useFetchApi();
  const navigate = useNavigate();
  // const { user, setUser } = useUser();
  // console.log("User: ", user);

  const dispatch = useDispatch();
  // const user = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  setValue("email", "ghouri.dev@gmail.com");
  setValue("password", "12345678Ab!");
  var submitForm = async (data) => {
    try {
      let response = await fetch_Api(
        "https://apiadsells.nms-mdm.com/api/token/",
        "POST",
        { "Content-Type": "application/json" },
        JSON.stringify({
          email: data.email,
          password: data.password,
          // email: "ghouri.dev@gmail.com",
          // password: "12345678Ab!",
        })
      );
      if (response.type == "client_error") {
        throw new Error("Un Authenticated");
      } else {
        console.log("response: ", response);
        dispatch({
          type: "LOGIN",
          payload: { accessToken: response.access },
        });
        alert("You are Loggined");
        console.log("You are Loggined");
        navigate("/");
      }
    } catch (error) {
      alert("Loggined Failed: ", error);
      console.error("Error:", error);
    }
  };

  return (
    <section className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="border border-gray-200 rounded-2xl w-2/7 text-center bg-white p-8 mx-auto">
        <Link to="/">
          <img
            src="https://dealaday-images.eu-central-1.linodeobjects.com/5309fd5b3d244d1bf1dfe116e5c49063/test1679300288.svg"
            alt="logo"
            className=" w-50 mx-auto my-2"
          />
        </Link>

        <form
          onSubmit={handleSubmit((d) => submitForm(d))}
          className="text-start my-2"
        >
          <h3 className="text-2xl font-bold my-2">Log into your account</h3>
          <InputField
            label="Email"
            placeholde="Enter Email"
            type="email"
            register={register}
            name="email"
            error={errors.email}
          />
          <InputField
            label="Password"
            placeholde="eg: PassLogin%7"
            type="password"
            register={register}
            name="password"
            error={errors.password}
          />

          <a className="text-base font-medium text-blue-400" href="/forgot">
            Forgot Your Password?
          </a>
          <button
            type="submit"
            className="w-full bg-orange-500 p-3 text-white font-medium rounded-lg mt-4 hover:bg-orange-700 transition-all ease-in-out duration-300 cursor-pointer"
          >
            Login
          </button>
          <h5 className="text-base text-gray-600 mt-4">
            Dont have an account?
            <span className="font-medium text-blue-400">Sign up</span>
          </h5>
        </form>
        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-black">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <button className="w-full bg-gray-100 border border-gray-200 text-black p-3 font-bold rounded-lg mt-4 hover:bg-gray-200 cursor-pointer transition-all ease-in-out duration-300">
          Continue to Google
        </button>
      </div>
    </section>
  );
};

export default LoginUsinAuthentication;
