import Navbar from "./components/Navbar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider, useUserContext } from "./contexts/userContext";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("ACCESS_TOKEN") == null
      ? navigate("/login")
      : navigate("/dashboard");
  }, []);

  return (
    <>
      <UserProvider>
        <Navbar />
        <ToastContainer />
        <Outlet />
      </UserProvider>
    </>
  );
}

export default App;
