import React from "react";

const home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className="text-xl text-green-800 font-extrabold"> </h2>
        <h2 className="text-3xl text-green-800 font-extrabold"> </h2>
      </div>
      <span className="text-6xl text-green-800  p-4 font-extrabold">
        {" "}
        🪴 HempHub
      </span>
      <div className="p-4">
        <img className="p-4" src={"/helper.webp"} alt="Hemp Logo" />
        <br></br>
        <span className="text-4xl text-green-800 p-4 font-extrabold">
          {" "}
          Meet HempHub
        </span>
        <br></br>
        <span className="text-xl text-green-600 p-4 font-extrabold">
          {" "}
          YOUR ONE-STOP SHOP FOR FARMING DATA
        </span>
        <br></br>
        <div className="p-4 text-justify">
          <span className="text-l text-green-800 x">
            HempHub is your admin center for all the data you gather at your
            farm! Whether you are trying to understand how much yield you've
            produced, how your plants height has changed over time, HempHub has
            got you covered.
          </span>
        </div>
      </div>
      <br></br>
      <div className="p-4">
        <img className="p-4" src={"/helperweed.webp"} alt="Hemp Logo" />
        <br></br>
        <span className="text-4xl text-green-800 p-4 font-extrabold">
          {" "}
          Meet HempHelper
        </span>
        <br></br>
        <span className="text-xl text-green-600 p-4 font-extrabold">
          {" "}
          YOUR DIGITAL ASSISTANT FOR A DATA-DRIVEN FARM
        </span>
        <br></br>
        <div className="p-4 text-justify">
          <span className="text-l text-green-800 x">
            HempHelper is your digital farm hand - here to help you interpret
            your Hemp farm's data, every step of the way. Simply visit the
            "Track My Farm" tab in HempHub and ask HempHelper questions like
            "what do you think about the correlation between fertilizing and
            plant height?", "What was the average increase in density from month
            to month for my hemp plants?", and more!
          </span>
          <br></br>
          <br></br>
          <span className="text-l text-green-800 x">
            HempHelper V1 is based uses ChatGPT3 to help you better understand
            your farm. Future versions of ChatGPT will enhance even more the
            insights from prior data and predictions of future data that
            HempHelper can bring! Stay tuned for updates.
          </span>
        </div>
      </div>
    </div>
  );
};

export default home;
