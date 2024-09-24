import React, { useState } from "react";

import UserCard from "./Components/UserCard";
import { FaPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import person from "./Components/suman.jpeg";

const App = () => {
  const [popCard, setPopcard] = useState(false);
  const [popUser, setPopuser] = useState(false);
  const [signUser, setSignUser] = useState(false);

  const handleUserPop = () => {
    setPopuser(!popUser);
  };

  const handleUsercard = () => {
    setPopcard(!popCard);
  };

  const handleSignUser = (e) => {
    e.stopPropagation();
    console.log("This is working fine");
    setSignUser(!signUser);
  };

  return (
    <div
      className="text-4xl  bg-zinc-200 h-screen flex items-center justify-around
    "
    >
      <div className="max-w-lg rounded overflow-hidden  h-[50rem] w-[700rem]">
        <div className="font-bold tracking-wide text-blue-600 text-5xl mb-5">
          facebook
        </div>
        <div className=" text-5xl  mb-5">Recent Logins</div>
        <div className=" text-xl mb-5 text-slate-700">
          Click your picture or add an account.
        </div>
        <div className="flex space-x-5 rounded-xl">
          <div onClick={handleUsercard}>
            <UserCard name={"Suman"} imgUrl={person} />
          </div>
          {popCard && (
            <div className="fixed inset-0  bg-black bg-opacity-30 flex items-center justify-center ">
              <div className="bg-white h-4/6  w-1/4 rounded-xl relative">
                {" "}
                <div className="flex flex-col items-center justify-center space-y-5 h-full">
                  <div>
                    <img
                      src={person}
                      alt="User"
                      className="h-[250px] w-[250px] rounded-full  "
                    />
                  </div>
                  <span>Suman Niroula</span>
                  <input
                    className="mt-8 p-3 ps-5  h-2rem w-11/12 ms-2 me-2 border border-cyan-700 text-gray-400   bg-blue-100  hover:bg-blue-200  text-[1.25rem] rounded-xl"
                    placeholder="Enter Email or Password"
                    type="text"
                  />
                  <div className="flex items-center justify-start space-x-3 mt-4 w-5/6">
                    <input
                      id="custom-checkbox"
                      type="checkbox"
                      className="h-5 w-5 text-cyan-700 bg-blue-100 border-2 border-cyan-700 rounded focus:ring-cyan-500 cursor-pointer"
                    />
                    <label
                      htmlFor="custom-checkbox"
                      className="text-gray-700 text-[1.25rem] cursor-pointer"
                    >
                      Remember Me
                    </label>
                  </div>
                  <button
                    className="mt-8 p-3 ps-5 ms-2 me-2 h-2rem w-5/6 border-cyan-500 text-white text-[2rem] bg-blue-500 hover:bg-blue-400
          rounded-xl
          "
                  >
                    Log In
                  </button>
                  <span className="text-xl mt-5 mb-5 text-blue-600 hover:underline cursor-pointer">
                    Forget Password?
                  </span>
                </div>
                <FaTimes
                  onClick={() => setPopcard(false)}
                  className="mt-2 bg-gray-200 px-2 py-1 rounded-full absolute top-0 right-2 text-gray-600 cursor-pointer p-1  hover:bg-gray-400"
                />
              </div>
            </div>
          )}
          <div onClick={handleUserPop}>
            <UserCard icons={<FaPlus />} name="Add Account" />
          </div>
          {popUser && (
            <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center mb-8">
              <div className="bg-white h-3/6  w-1/4 rounded-xl relative">
                <div className="flex flex-col items-center space-y-5 h-full mt-8">
                  <span className="text-3xl">Log into Facebook</span>
                  <div className="border border-solid border-grey-300 mx-4 w-full"></div>
                  <input
                    className="mt-8 p-3 ps-5  h-2rem w-11/12 ms-2 me-2 border border-cyan-700 text-gray-400   bg-blue-100  hover:bg-blue-200  text-[1.25rem] rounded-xl"
                    placeholder="Enter Email"
                    type="text"
                  />
                  <input
                    className="mt-8 p-3 ps-5  h-2rem w-11/12 ms-2 me-2 border border-cyan-700 text-gray-400   bg-blue-100  hover:bg-blue-200  text-[1.25rem] rounded-xl"
                    placeholder="Enter Password"
                    type="text"
                  />
                  <div className="flex items-center justify-start space-x-3 mt-4 w-5/6">
                    <input
                      id="custom-checkbox"
                      type="checkbox"
                      className="h-5 w-5 text-cyan-700 bg-blue-100 border-2 border-cyan-700 rounded focus:ring-cyan-500 cursor-pointer"
                    />
                    <label
                      htmlFor="custom-checkbox"
                      className="text-gray-700 text-[1.25rem] cursor-pointer"
                    >
                      Remember Me
                    </label>
                  </div>
                  <button
                    className="mt-8 p-3 ps-5 ms-2 me-2 h-2rem w-5/6 border-cyan-500 text-white text-[2rem] bg-blue-500 hover:bg-blue-400
          rounded-xl
          "
                  >
                    Log In
                  </button>
                  <span className="text-xl mt-5 mb-5 text-blue-600 hover:underline cursor-pointer">
                    Forget Password?
                  </span>
                </div>
                <FaTimes
                  onClick={() => setPopuser(false)}
                  className="mt-2 bg-gray-200 px-2 py-1 rounded-full absolute top-0 right-2 text-gray-600 cursor-pointer p-1  hover:bg-gray-400"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-sm rounded-xl overflow-hidden shadow-xl bg-white h-[32rem]  w-[35rem] mb-10 ps-4 pe-4 text-center">
          <div className="flex flex-col ">
            <input
              className="mt-8 p-3 ps-5 ms-2 me-2 h-2rem border border-cyan-700 text-gray-400   bg-blue-100  hover:bg-blue-200  text-[1.25rem] rounded-xl"
              placeholder="Enter Email or Password"
              type="text"
            />
            <input
              className="mt-8 p-3 ps-5 ms-2 me-2 h-2rem border border-cyan-700 text-gray-400 text-[1.25rem] bg-blue-100 hover:bg-blue-200 rounded-xl"
              placeholder="Enter Email or Password"
              type="password"
            />

            <button
              className="mt-8 p-3 ps-5 ms-2 me-2 h-2rem border-cyan-500 text-white text-[2rem] bg-blue-500 hover:bg-blue-400
          rounded-xl
          "
            >
              Log In
            </button>
            <span className="text-xl mt-5 mb-5 text-blue-600 hover:underline cursor-pointer">
              Forget Password?
            </span>
            <div className="border border-slate-400 mx-4 "></div>
            <div className="text-center">
              <button
                onClick={handleSignUser}
                className="mt-8 p-3 ps-8 ms-2 me-2 h-2rem w-80 text-white text-[1.5rem] bg-green-500
          rounded-xl
          "
              >
                Create New Account
              </button>
            </div>
            {signUser && (
              <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center mb-8 p-5">
                <div className="bg-white h-3/6 w-1/4 rounded-xl relative shadow-xl">
                  <div className="flex flex-col items-start space-y-5 h-full mt-3 ">
                    <span className="text-4xl font-bold ms-2">Sign Up</span>
                    <span className="text-2xl text-gray-600 ms-2">
                      It's quick and easy
                    </span>
                    <div className="border border-slate-400 w-full"></div>
                    <input
                      className="mt-8 p-3 ps-5 h-2rem w-11/12 ms-2 me-2 border border-cyan-700 text-gray-400 bg-blue-100 hover:bg-blue-200 text-[1.25rem] rounded-xl"
                      placeholder="Enter Name"
                      type="text"
                    />
                    <input
                      className="mt-8 p-3 ps-5 h-2rem w-11/12 ms-2 me-2 border border-cyan-700 text-gray-400 bg-blue-100 hover:bg-blue-200 text-[1.25rem] rounded-xl"
                      placeholder="Enter Email"
                      type="email"
                    />
                    <button className="mt-8 p-3 ps-5 ms-2 me-2 h-2rem w-5/6 border-cyan-500 text-white text-[2rem] bg-blue-500 hover:bg-blue-400 rounded-xl">
                      Sign Up
                    </button>
                  </div>
                  <FaTimes
                    onClick={() => setSignUser(false)}
                    className="mt-2 bg-gray-200 px-2 py-1 rounded-full absolute top-0 right-2 text-gray-600 cursor-pointer p-1 hover:bg-gray-400"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="text-2xl mb-[100px] ms-[5rem]">
          <small>
            <span className="font-bold hover:underline cursor-pointer">
              Create a Page{" "}
            </span>
            for a celebrity, brand or business.
          </small>
        </div>
      </div>
    </div>
  );
};

export default App;
