import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";

const LoginUsinAuthentication = () => {
  console.log("Login form by UseContext");
  const { user, setUser } = useContext(UserContext);
  const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  var submitForm = (data) => {
    console.log("setUser", setUser);
    // setUser(() => ({ username: data.username, isAuthenticated: true }));
    setUser({ username: data.email, isAuthenticated: true });
    console.log("user", user);
    console.log("You are Loggined");
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

          <div className="my-5">
            <label htmlFor="Email" className="block font-medium my-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="rounded bg-gray-100 w-full p-3"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="my-5">
            <label htmlFor="Password" className="block font-medium my-1">
              Password
            </label>
            <input
              {...register("password")}
              type="Password"
              placeholder="eg: PassLogin%7"
              className="rounded bg-gray-100 w-full p-3 focus:border-b-blue-200 focus:border-x transition-all ease-in-out duration-300"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

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
