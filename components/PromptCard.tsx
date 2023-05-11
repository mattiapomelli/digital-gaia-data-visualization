import { Prompt } from "@/types";
import { useState } from "react";
import { Spinner } from "./Spinner";

interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard = ({ prompt }: PromptCardProps) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const onSubmit = async () => {
    setLoading(true);

    const response = await fetch("/api/generate?query=" + prompt.text);
    const data = await response.json();

    console.log("Reponse: ", data);

    setResponse(data);
    setLoading(false);
  };

  return (
    <div key={prompt.id} className="bg-gray-300 rounded-lg p-4">
      <h3 className="font-bold text-lg">{prompt.title}</h3>
      <p>Prompt: {prompt.text}</p>
      <p>Example input: {prompt.exampleInput}</p>
      <p>Example output: {prompt.exampleOutput}</p>
      <button
        onClick={onSubmit}
        className="mt-2 py-2 px-4 flex items-center justify-center bg-green-800 hover:bg-green-950 text-white rounded-lg min-w-[100px]"
      >
        {loading ? <Spinner /> : "Use prompt"}
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

export default PromptCard;
