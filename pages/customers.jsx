import React from "react";
import data from "../data/farm-data.json";
import report from "../data/report.json";

const customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className="text-xl text-green-800 font-extrabold"> </h2>
        <h2 className="text-3xl text-green-800 font-extrabold">🪴 HempHub </h2>
      </div>
      <span className="text-3xl text-green-800  p-4 font-extrabold">
        {" "}
        About My Farm: "{data.name}"
      </span>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <img src={"/crop.webp"} alt="Hemp Logo" />
          <br></br>
          <span className="text-xl text-green-800 font-extrabold">
            Crop Type
          </span>
          <br></br>
          <span className="text-sm text-green-800">
            The types of crops grown on your farm are shown here.
          </span>
          <div className="my-3 p-2 grid md:grid-cols-2 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Crop 1</span>
            <span className="sm:text-left text-right">
              {
                data.strategies[0].interventions.planting
                  .split(".")
                  .slice(-1)[0]
              }
            </span>
          </div>
        </div>
        <br></br>
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <img src={"/geographic.webp"} alt="Hemp Logo" />
          <br></br>
          <span className="text-xl text-green-800 font-extrabold">
            Geographic Information
          </span>
          <br></br>
          <span className="text-sm text-green-800">
            Information on your farming region and your plot of land are shown
            here.
          </span>
          <div className="my-3 p-2 grid md:grid-cols-2 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>
              Soil
              <a
                className="text-blue-800"
                target="_blank"
                href="https://en.wikipedia.org/wiki/World_Reference_Base_for_Soil_Resources"
              >
                {" "}
                ⓘ Guide
              </a>
            </span>
            <span className="sm:text-left text-right">
              {data.lots[0].geo_params.soil_type.type.split(".").slice(-1)[0]}
            </span>
            <span>
              Climate
              <a
                className="text-blue-800"
                target="_blank"
                href="https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification"
              >
                {" "}
                ⓘ Guide
              </a>
            </span>
            <span className="sm:text-left text-right">
              {data.lots[0].geo_params.climate_zone.type}
            </span>
            <span className="hidden md:grid">Average Slope</span>
            <span className="sm:text-left text-right">
              {data.lots[0].geo_params.avg_slope.slope_pct}
            </span>
            <span className="hidden md:grid">Average Rainfall</span>
            <span className="sm:text-left text-right">
              {data.lots[0].geo_params.avg_annual_rainfall.mm_m2}
            </span>
          </div>
        </div>
        <br></br>
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <img src={"/practice.webp"} alt="Hemp Logo" />
          <br></br>
          <span className="text-xl text-green-800 font-extrabold">
            Current Farming Practices
          </span>
          <br></br>
          <span className="text-sm text-green-800">
            Based on your most recent farm data set, you are using the following
            practices.
          </span>
          <div className="my-3 p-2 grid md:grid-cols-2 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Irrigation</span>
            <span className="sm:text-left text-right">
              {
                data.strategies[0].interventions.irrigation
                  .split(".")
                  .slice(-1)[0]
              }
            </span>
            <span className="hidden md:grid">Fertilizer</span>
            <span className="sm:text-left text-right">
              {
                data.strategies[0].interventions.fertilizer
                  .split(".")
                  .slice(-1)[0]
              }
            </span>
            <span className="hidden md:grid">Pruning</span>
            <span className="sm:text-left text-right">
              {data.strategies[0].interventions.pruning.split(".").slice(-1)[0]}
            </span>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default customers;
