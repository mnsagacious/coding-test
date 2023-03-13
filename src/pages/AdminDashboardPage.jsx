import React from "react";
import {useEffect} from 'react'
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";
// import { GlobalContext } from "../globalContext";

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  // const { state, dispatch } = React.useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/admin/login");
  };

  useEffect(() => {
    dispatch({ type: "SNACKBAR" });
  }, []);
  return (
    <>
      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
        Dashboard
      </div>
      <div>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    </>
  );
};

export default AdminDashboardPage;
