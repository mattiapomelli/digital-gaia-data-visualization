import type { NextPage } from "next";
import { useState, useEffect } from "react";

import { useCeramicContext } from "../context";
import { authenticateCeramic } from "../utils";
import { useCreatePrompt } from "@/lib/useCreatePrompt";
import { usePrompts } from "@/lib/usePrompts";

const CeramicPage: NextPage = () => {
  const clients = useCeramicContext();
  const { ceramic, composeClient } = clients;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: prompts, refetch: refetchPrompts } = usePrompts();
  const { mutate: createPrompt } = useCreatePrompt({
    onSuccess: refetchPrompts,
  });

  const handleLogin = async () => {
    const success = await authenticateCeramic(ceramic, composeClient);
    setIsLoggedIn(success);
  };

  useEffect(() => {
    if (localStorage.getItem("did") && !isLoggedIn) {
      handleLogin();
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-xl text-green-800 font-extrabold mb-2">Prompts</h2>
      {!isLoggedIn ? (
        <button
          className="py-2 px-4 flex items-center justify-center bg-green-800 hover:bg-green-950 text-white rounded-lg h-full min-w-[100px]"
          onClick={() => {
            handleLogin();
          }}
        >
          Login with Ceramic
        </button>
      ) : (
        <div>
          <button
            className="py-2 px-4 flex items-center justify-center bg-green-800 hover:bg-green-950 text-white rounded-lg h-full min-w-[100px]"
            onClick={() =>
              createPrompt({
                title: "New Prompt",
                text: "Descri[ption",
              })
            }
          >
            Create prompt
          </button>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8 auto-rows-fr mt-4">
        {prompts?.map((prompt) => (
          <div key={prompt.id} className="bg-gray-300 rounded-lg p-4">
            <h3 className="font-bold text-lg">{prompt.title}</h3>
            <p>Prompt: {prompt.text}</p>
            <p>Example input: {prompt.exampleInput}</p>
            <p>Example output: {prompt.exampleOutput}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CeramicPage;
