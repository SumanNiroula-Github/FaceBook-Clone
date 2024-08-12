import React from "react";

const UserCard = ({ imgUrl, icons, name }) => {
  return (
    <div className="h-[17rem] w-[17rem] text-center border border-gray-400 rounded-xl hover:shadow-2xl cursor-pointer transition-shadow duration-300 flex flex-col">
      <div className="flex-grow flex justify-center items-center h-[70%] ">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt="User"
            className="h-full w-full object-cover "
          />
        ) : (
          <button className="bg-blue-500 text-white font-bold py-2 px-2 rounded-full flex items-center hover:bg-blue-600 transition-all duration-300">
            {icons}
          </button>
        )}
      </div>
      <div className="border-t border-blue-500"></div>
      <div className="h-[30%] flex justify-center items-center text-2xl text-blue-500 font-semibold">
        {name}
      </div>
    </div>
  );
};

export default UserCard;
