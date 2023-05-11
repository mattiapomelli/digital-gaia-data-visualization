import { useCeramicContext } from "@/context";
import { Prompt } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

const getPromptsQuery = gql`
  query GetPrompts {
    promptIndex(first: 100) {
      edges {
        node {
          id
          text
          title
        }
      }
    }
  }
`;

export const usePrompts = () => {
  const { ceramic, composeClient } = useCeramicContext();

  return useQuery(
    ["prompts", ceramic.did],
    async () =>
      composeClient
        .executeQuery<{
          promptIndex: {
            edges: {
              node: Prompt;
            }[];
          };
        }>(getPromptsQuery)
        .then((data) => data.data?.promptIndex.edges.map((edge) => edge.node)),
    {
      enabled: !!ceramic.did,
    },
  );
};
