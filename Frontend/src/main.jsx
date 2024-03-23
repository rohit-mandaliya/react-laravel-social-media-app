import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Chat from "./pages/chat.jsx";
import { useUserContext } from "./contexts/userContext.jsx";

const IsAuthenticated = ({ condition }) => {
  const { token } = useUserContext();
  const navigate = useNavigate();

  if (condition)
    useEffect(() => {
      !token && navigate("/login");
    }, []);
  else
    useEffect(() => {
      token && navigate("/dashboard");
    }, []);

  return <Outlet />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<IsAuthenticated condition={true} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
      <Route element={<IsAuthenticated condition={false} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
