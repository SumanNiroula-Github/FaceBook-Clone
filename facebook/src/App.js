import React from "react";

import UserCard from "./Components/UserCard";
import { FaPlus } from "react-icons/fa";
import person from "./Components/suman.jpeg";

const App = () => {
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
          <UserCard name={"Suman"} imgUrl={person} />
          <UserCard icons={<FaPlus />} name="Add Account" />
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
            <div className="border-t border-blue-300 mx-4 "></div>
            <div className="text-center">
              <button
                className="mt-8 p-3 ps-8 ms-2 me-2 h-2rem w-80 text-white text-[1.5rem] bg-green-500
          rounded-xl
          "
              >
                Create New Account
              </button>
            </div>
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
