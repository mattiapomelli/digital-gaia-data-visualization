import React, { useState, useEffect } from "react";

import { useCeramicContext } from "../context";
import { authenticateCeramic } from "../utils";
import { usePrompts } from "@/lib/usePrompts";
import PromptCard from "./PromptCard";

const PromptsQuery = () => {
  const clients = useCeramicContext();
  const { ceramic, composeClient } = clients;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: prompts, refetch: refetchPrompts } = usePrompts();

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
    <>
      <h3 className="text-lg text-green-800 font-extrabold mt-4" id="response">
        Community Queries
      </h3>
      <p>
        These are the prompts that have been created by the community and
        available to use to explore your dataset.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-4">
        {prompts?.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </>
  );
};

export default PromptsQuery;
