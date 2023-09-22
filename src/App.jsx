import React from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import UploadFile from "./Pages/UploadFile/UploadFile";

const App = () => {
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/uploadfile" element={<UploadFile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Login />} />
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
      </CookiesProvider>
    </>
  );
};

export default App;
