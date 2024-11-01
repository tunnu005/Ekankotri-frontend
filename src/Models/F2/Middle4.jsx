import React from "react";

const Middle4 = ({data}) => {
  return (
    <div className="bg-gradient-to-t from-orange-200 pt-16 lg:pt-52 px-4 lg:pl-24 pb-12 lg:pb-0 to-yellow-100 h-screen" id="mapSection">
      <div className="flex flex-col lg:flex-row">
        <iframe
          src={`${data.map_url} `}
          className="w-full lg:w-1/2 h-64 lg:h-[22rem] lg:mr-4 lg:mb-0"
          title="Map"
        ></iframe>
        <div className="mt-4 lg:mt-0 lg:ml-4 sm:left-0 text-xl lg:text-3xl font-serif">
          <h2 className="font-bold">Venue:</h2>
          <p className="border-2 border-black p-2 lg:p-5 w-full lg:w-[32rem] rounded-tl-xl rounded-br-2xl">
          {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle4;
