import React, { useState } from "react";
import { Spinner } from "./Spinner";

const CustomQuery = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch("/api/generate?query=" + query);
    const data = await response.json();

    console.log("Reponse: ", data);

    setResponse(data);
    setLoading(false);
  };

  return (
    <div>
      <h3 className="text-lg text-green-800 font-extrabold mt-4" id="response">
        Custom query
      </h3>
      <form
        onSubmit={onSubmit}
        className="flex gap-2 items-center mt-2 max-w-md h-12"
      >
        <input
          type="text"
          placeholder="E.g. how many times yield was below 37"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="border border-gray-300 p-2 rounded-lg w-full h-full"
        />
        <button className="py-2 px-4 flex items-center justify-center bg-green-800 hover:bg-green-950 text-white rounded-lg h-full min-w-[100px]">
          {loading ? <Spinner /> : "Submit"}
        </button>
      </form>
      {response && (
        <div>
          <h4 className="font-extrabold mt-4" id="response">
            Response
          </h4>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default CustomQuery;
