import React from "react";

const Message = ({ data }) => {
  return (
    <div
      className="bg-gradient-to-r from-red-100 to-pink-300 h-screen flex flex-col lg:flex-row justify-center items-center p-4"
      id="mapSection"
    >
      <iframe
        src={`${data.map_url}`}
        className="w-full h-64 lg:w-96 lg:h-72"
        title="Location Map"
      ></iframe>
      <div className="text-xl sm:text-2xl md:text-3xl lg:ml-14 mt-4 lg:mt-0" id="bo">
        <h2 className="font-bold">Venue:</h2>
        <p className="border-2 border-black p-2 lg:p-5 w-full lg:w-[32rem] rounded-tl-xl rounded-br-2xl">
          {data.location}
        </p>
      </div>
    </div>
  );
};

export default Message;
