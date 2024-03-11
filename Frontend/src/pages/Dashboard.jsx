import React from "react";
import { api } from "../api";

const Dashboard = () => {
  let fields = [
    {
      id: 1,
      name: "room_id",
      placeholder: "Room Id",
    },
    {
      id: 2,
      name: "name",
      placeholder: "Room Name",
    },
  ];

  const handleChange = async () => {
    const store = await api.post("room/create", inputs);
  };
  return (
    <div>
      <div className="max-w-lg mx-auto mt-5">
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
        <div className="text-center">
          <button className="p-2 mt-4 rounded-lg font-medium border-white border duration-500 bg-black text-white">
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
