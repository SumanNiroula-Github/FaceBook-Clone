import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mb-8">
        <div className="bg-white h-3/6 w-1/4 rounded-xl relative">
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
    </>
  );
}

export default SignIn