import React from "react";
import CustomQuery from "@/components/CustomQuery";
import ExampleQuery from "@/components/ExampleQuery";

const Gpt = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-xl text-green-800 font-extrabold">
        Query the dataset
      </h2>
      <ExampleQuery />
      <div className="h-px w-full bg-gray-300 mt-6" />
      <CustomQuery />
    </div>
  );
};

export default Gpt;
