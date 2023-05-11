import React, { useState } from "react";
import { Spinner } from "./Spinner";

import cx from "classnames";

const statistics = [
  "General analysis",
  "Average",
  "Standard deviation",
  "Max value",
  "Min value",
  "Increase percentage",
];
const properties = ["Yield", "Hemp height", "Hemp density"];

const ExampleQuery = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const [selectedStatistic, setSelectedStatistic] = useState(statistics[0]);
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);

  const onSubmit = async () => {
    setLoading(true);

    const query = `${selectedStatistic} of ${selectedProperty}`;
    const response = await fetch("/api/generate?query=" + query);
    const data = await response.json();

    setResponse(data);
    setLoading(false);
  };

  return (
    <div>
      <h3 className="text-lg text-green-800 font-extrabold mt-4" id="response">
        Standard queries
      </h3>
      <div>
        <h4 className="font-extrabold mt-4" id="response">
          Statistic
        </h4>
        <div className="flex gap-2 mt-1 flex-wrap">
          {statistics.map((statistic) => (
            <button
              key={statistic}
              className={cx(
                " py-2 px-4 rounded-lg",
                selectedStatistic === statistic
                  ? "bg-green-600"
                  : "border border-green-600 text-green-600 hover:bg-gray-200",
              )}
              onClick={() => setSelectedStatistic(statistic)}
            >
              {statistic}
            </button>
          ))}
        </div>
        <div>
          <h4 className="font-extrabold mt-4" id="response">
            Property
          </h4>
          <div className="flex gap-2 mt-1 flex-wrap">
            {properties.map((property) => (
              <button
                key={property}
                className={cx(
                  "py-2 px-4 rounded-lg border border-green-600",
                  selectedProperty === property
                    ? "bg-green-600 "
                    : "text-green-600 hover:bg-gray-200",
                )}
                onClick={() => setSelectedProperty(property)}
              >
                {property}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="h-12 mt-4 py-2 px-4 flex items-center justify-center bg-green-800 hover:bg-green-950 text-white rounded-lg min-w-[100px]"
      >
        {loading ? <Spinner /> : "Submit"}
      </button>
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

export default ExampleQuery;
