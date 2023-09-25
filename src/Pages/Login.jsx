import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import LoginLogo from "../assets/Login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInUser, useUser } from "./AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useUser();
  const token = user?.token;
  console.log("user", user);

  useEffect(() => {
    if (token) {
      navigate("../uploadfile");
    }
  }, [token]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email Required!"),
    password: Yup.string().required("Password Required!"),
  });
  const onSubmit = async (values) => {
    const payload = Object.assign(values);
    const response = await dispatch(signInUser(payload));
    console.log("response", response);
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center w-screen h-screen bg-white">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                  <div className="flex">
                    <h1 className="font-bold uppercase text-5xl">
                      Login <br /> Here
                    </h1>
                  </div>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-1 w-full mt-5">
                    <div className="flex flex-col justify-center">
                      <Field
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Email*"
                        name="email"
                      />
                      <div className="text-red-500 text-sm">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Field
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Password*"
                        name="password"
                      />
                      <div className="text-red-500 text-sm">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <Link to="/register">
                      <p className="text-blue-600">
                        Don’t have an account? Sign up here!
                      </p>
                    </Link>
                  </div>
                  <div className="my-2 w-1/2 lg:w-1/4">
                    <button
                      className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                    focus:outline-none focus:shadow-outline"
                    >
                      Log in
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
              <img src={LoginLogo} alt="" />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a
              title="Buy me a pizza"
              href="https://www.buymeacoffee.com/Dekartmc"
              target="_blank"
              className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
