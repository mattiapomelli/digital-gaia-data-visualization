import { useCeramicContext } from "@/context";
import { Prompt } from "@/types";
import { useMutation } from "@tanstack/react-query";

type CreatePromptInput = Omit<Prompt, "id">;

interface UseCreatePromptOptions {
  onSuccess: () => void;
}

export const useCreatePrompt = ({ onSuccess }: UseCreatePromptOptions) => {
  const { composeClient } = useCeramicContext();

  return useMutation(
    async (promptData: CreatePromptInput) => {
      await composeClient.executeQuery(
        `
      mutation CreatePrompt($i: CreatePromptInput!) {
        createPrompt(input: $i) {
          document {
            id
            text
            title
          }
        }
      }
    `,
        {
          i: {
            content: promptData,
          },
        },
      );
    },
    {
      onSuccess,
    },
  );
};
