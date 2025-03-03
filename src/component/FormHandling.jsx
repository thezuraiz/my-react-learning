import { useState } from "react";

const FormHandling = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    let email = user.email;
    if (email == "") {
      setErrors((prev) => ({ ...prev, email: "Email Required" }));
    } else if (!email.includes("@")) {
      setErrors((prev) => ({ ...prev, email: "Email Invaild" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    let password = user.password;
    if (password == "") {
      setErrors((prev) => ({ ...prev, password: "Password Required" }));
    } else if (password.length < 5) {
      setErrors((prev) => ({ ...prev, password: "password is too short!" }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }

    console.log("Form Submited");
    console.log({ email: user.email, password: user.password });
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  return (
    <div className="h-screen bg-emerald-400 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 h-1/2 w-1/4 rounded-xl flex flex-col justify-center items-center"
      >
        <input
          type="text"
          placeholder="email"
          value={user.emaiil}
          onChange={(e) => {
            console.log("E ", e.target.value);
            setUser((prev) => ({ ...prev, email: e.target.value }));
          }}
          className="border rounded-xl m-2 px-4 py-2 border-gray-500"
        />
        {errors.email && (
          <p className="text-red-500 font-medium text-lg">{errors.email}</p>
        )}
        <br />
        <input
          type="text"
          placeholder="password"
          value={user.password}
          onChange={(e) => {
            console.log("Password ", e.target.value);
            setUser((prev) => ({ ...prev, password: e.target.value }));
          }}
          className="border rounded-xl m-2 px-4 py-2 border-gray-500"
        />
        {errors.password && (
          <p className="text-red-500 font-medium text-lg">{errors.password}</p>
        )}
        <br />
        <button
          type="submit"
          className="px-20 rounded-xl text-white cursor-pointer py-2 my-2 bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
