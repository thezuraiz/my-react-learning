import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useZutandStore from "../../store/zutandStore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const userSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password too long"),
});

const Login = () => {
  const navigate = useNavigate();
  const login = useZutandStore((state) => state.login);
  const { user } = useZutandStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      // email: "ghouri.dev@gmail.com",
      // password: "12345678Ab!",
    },
  });

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      console.log("user: ", user);
      if (user) {
        toast.error("You are already logged in. Please log out first.");
        navigate("/");
        throw new Error("Already Logged in");
      }
      return login(email, password);
    },
  });

  const onSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <section className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="border border-gray-200 rounded-2xl w-2/7 text-center bg-white p-8 mx-auto">
        <Link to="/">
          <img
            src="https://dealaday-images.eu-central-1.linodeobjects.com/5309fd5b3d244d1bf1dfe116e5c49063/test1679300288.svg"
            alt="logo"
            className="w-50 mx-auto my-2"
          />
        </Link>

        <form onSubmit={handleSubmit(onSubmit)} className="text-start my-2">
          <h3 className="text-2xl font-bold my-2">Log into your account</h3>

          {/* Email Input */}
          <div className="my-5">
            <label htmlFor="email" className="block font-medium my-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="rounded bg-gray-100 w-full p-3"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="my-5">
            <label htmlFor="password" className="block font-medium my-1">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="rounded bg-gray-100 w-full p-3 focus:border-b-blue-200 focus:border-x transition-all ease-in-out duration-300"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <Link to="/forgot" className="text-base font-medium text-blue-400">
            Forgot Your Password?
          </Link>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 p-3 text-white font-medium rounded-lg mt-4 hover:bg-orange-700 transition-all ease-in-out duration-300 cursor-pointer"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Logging in..." : "Login"}
          </button>

          <h5 className="text-base text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-medium text-blue-400">
              Sign up
            </Link>
          </h5>
        </form>

        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-black">OR</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Login */}
        <button className="w-full bg-gray-100 border border-gray-200 text-black p-3 font-bold rounded-lg mt-4 hover:bg-gray-200 cursor-pointer transition-all ease-in-out duration-300">
          Continue with Google
        </button>
      </div>
    </section>
  );
};

export default Login;
