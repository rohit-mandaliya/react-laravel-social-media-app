import Navbar from "./components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider, useUserContext } from "./contexts/userContext";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.getItem("ACCESS_TOKEN") == null ? (
      <Navigate to="/login" />
    ) : (
      <Navigate to="/dashboard" />
    );
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
