import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "./UI/Forms/Form";
import FormInput from "./UI/FormInput/FormInput";
import { useLoginMutation } from "../redux/api/authApi";
import { storeUserInfo } from "../services/service.auth";
import { isLoggedIn } from "../services/service.auth";
import logo from "../assets/hrm without bg.png";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const userLoggedIn = isLoggedIn();
  const [login] = useLoginMutation();

  useEffect(() => {
    if (userLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const res = await login(values).unwrap();
      console.log(res);

      if (res) {
        storeUserInfo({ accessToken: res?.token });
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden">
        {/* Background */}
      </div>
      <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10 mt-5">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
              <p className="text-gray-400">
                Don't have an account?
                <a
                  href="#"
                  className="text-sm text-purple-700 hover:text-purple-700"
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                {/* <input
                className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                type="text"
                placeholder="Email"
              /> */}
                <Form submitHandler={onSubmit}>
                  <FormInput
                    name="email"
                    placeholder="Enter your email"
                    type="text"
                    className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                  />
                  <div className="relative mt-5" x-data="{ show: true }">
                    <FormInput
                      name="password"
                      placeholder="Password"
                      type={passwordVisible ? "text" : "password"}
                      className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                    />
                    <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                      {passwordVisible ? (
                        <FaEyeSlash
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                      ) : (
                        <FaEye
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full mt-5 flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                    >
                      Sign in
                    </button>
                  </div>
                </Form>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-purple-700 hover:text-purple-600">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-transparent absolute w-full bottom-0 left-0 z-30">
        <div className="container p-5 mx-auto flex items-center justify-between">
          <div className="flex mr-auto">
            <img
              src={logo}
              alt="logo"
              className="object-cover mx-auto  rounded-full w-full"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Login;
