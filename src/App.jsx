import React from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/UploadFile/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/">
            <Route path="home" element={<Navbar />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;
