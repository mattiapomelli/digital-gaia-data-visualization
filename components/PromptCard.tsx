import { PromptWithAuthor } from "@/types";
import { useState } from "react";
import { Spinner } from "./Spinner";

interface PromptCardProps {
  prompt: PromptWithAuthor;
}

const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

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

  const address = prompt.author.id.split(":").slice(-1)[0];

  return (
    <div key={prompt.id} className="bg-gray-300 rounded-lg p-5">
      <h3 className="font-bold text-lg">{prompt.title}</h3>
      <p className="mt-2">
        <b>Prompt: </b>
        {prompt.text}
      </p>
      <p className="mt-2">
        <b>By: </b>
        {prompt.author.id.replace(address, formatAddress(address))}
      </p>
      <button
        onClick={onSubmit}
        className="mt-3 py-2 px-4 flex items-center justify-center bg-green-800 hover:bg-green-950 text-white rounded-lg min-w-[100px] h-10"
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
