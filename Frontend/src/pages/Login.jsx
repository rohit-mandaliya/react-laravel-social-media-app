import React, { useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import useUserContext from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const { setToken } = useUserContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const login = await api.post("/login", inputs);
      setToken(login.data.token);
      toast(login.data.message);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const fields = [
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
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
      <div className="text-4xl">Login</div>
      <form action="" method="post">
        <div className="mt-5">
          {fields.map((field) => (
            <input
              type={field.type}
              className="p-3 mt-5 border-black border w-full rounded-xl"
              id={field.id}
              name={field.name}
              onChange={handleChange}
              placeholder={field.placeholder}
              autoFocus={field.name == "email" ? true : false}
            />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="p-2 mt-8 w-24 ml-4 rounded-lg font-medium border-white border duration-500 bg-black text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
