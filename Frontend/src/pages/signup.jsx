import React, { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
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
            <input
              type={field.type}
              className="p-3 mt-5 border-black border w-full rounded-xl"
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              autoFocus={field.name == "name" ? true : false}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="p-2 mt-8 w-24 ml-4 rounded-lg font-medium border-white border duration-500 bg-black text-white hover:text-black hover:bg-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
