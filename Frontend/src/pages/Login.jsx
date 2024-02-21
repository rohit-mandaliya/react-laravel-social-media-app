import React from "react";

const Login = () => {
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
              placeholder={field.placeholder}
              autoFocus={field.name == "email" ? true : false}
            />
          ))}
        </div>
        <div className="text-center">
          <button className="p-2 mt-8 w-24 ml-4 rounded-lg font-medium border-white border duration-500 bg-black text-white hover:text-black hover:bg-white">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
