import React from "react";
import CustomQuery from "@/components/CustomQuery";
import ExampleQuery from "@/components/ExampleQuery";
import CommunityQuery from "./CommunityQuery";

const AIAssistantCard = () => {
  return (
    <div className="p-4 bg-white border rounded-lg w-full">
      <div>
        <span className="text-3xl text-green-800 font-extrabold">
          🙋 HempHelper AI Assistant
        </span>
        <ExampleQuery />
        <div className="h-px w-full bg-gray-300 mt-6" />
        <CustomQuery />
        <div className="h-px w-full bg-gray-300 mt-6" />
        <CommunityQuery />
      </div>
    </div>
  );
};

export default AIAssistantCard;
