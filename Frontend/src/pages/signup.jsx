import React, { useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

// import { useQuery, useMutation, queryCache } from "react-query";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const { setToken } = useUserContext();

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const register = await api.post("/register", inputs);
      toast(register.data.message);

      setToken(register.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setErrors(err.response.data.errors);
      toast.error("Something went wrong!");
    }
  };

  const fields = [
    {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Name",
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: "phone",
      name: "phone",
      type: "text",
      placeholder: "Phone",
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Password",
    },
  ];

  return (
    <div className="max-w-lg mx-auto mt-5">
      <div className="text-4xl">SignUp</div>
      <form action="#" method="post">
        <div className="mt-5">
          {fields.map((field) => (
            <>
              <input
                key={field.id}
                type={field.type}
                className="p-3 mt-5 border-black border  w-full rounded-xl"
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                autoFocus={field.name == "name" ? true : false}
                onChange={handleChange}
              />
              <span key={field.id + "-error"} className="text-red-500">
                {errors ? errors[field.name] : null}
              </span>
            </>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="p-2 mt-8 w-24 ml-4 rounded-lg font-medium border-white border duration-500 bg-black text-white"
          >
            Sign Up
          </button>
          <br />
          <p className="mt-2">
            Have an account ?{" "}
            <Link
              to="/login"
              className="text-lg text-gray-800 underline cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
