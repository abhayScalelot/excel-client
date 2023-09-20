import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import LoginLogo from "../assets/Login.svg";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email Required!"),
    password: Yup.string().required("Password Required!"),
  });
  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <>
      <div>
        <div class="flex justify-center items-center w-screen h-screen bg-white">
          <div class="container mx-auto my-4 px-4 lg:px-20">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                  <div class="flex">
                    <h1 class="font-bold uppercase text-5xl">
                      Login <br /> Here
                    </h1>
                  </div>
                  <div class="grid grid-cols-1 gap-5 md:grid-cols-1 w-full mt-5">
                    <div className="flex flex-col justify-center">
                      <Field
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Last Name*"
                        name="password"
                      />
                      <div className="text-red-500 text-sm">
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                  </div>
                  <div class="my-4">
                    {/* <textarea
              placeholder="Message*"
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea> */}
                  </div>
                  <div class="my-2 w-1/2 lg:w-1/4">
                    <button
                      class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                    focus:outline-none focus:shadow-outline"
                    >
                      Log in
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
              <img src={LoginLogo} alt="" />
            </div>
          </div>
        </div>

        <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
          <div>
            <a
              title="Buy me a pizza"
              href="https://www.buymeacoffee.com/Dekartmc"
              target="_blank"
              class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                class="object-cover object-center w-full h-full rounded-full"
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
