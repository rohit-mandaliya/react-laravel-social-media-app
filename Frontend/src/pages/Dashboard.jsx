import React, { useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [inputs, setInputs] = useState({});
  const { token } = useUserContext();
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const store = await api.post("room/create", inputs, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(store.data.message);
      navigate("/chat");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
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
            autoFocus={field.name == "room_id" ? true : false}
          />
        ))}
        <div className="text-center">
          <button
            onClick={onSubmit}
            className="p-2 mt-4 rounded-lg font-medium border-white border duration-500 bg-black text-white"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
