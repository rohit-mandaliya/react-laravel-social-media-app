import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/userContext";

function App() {
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
