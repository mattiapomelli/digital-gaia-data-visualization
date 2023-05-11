import { useCeramicContext } from "@/context";
import { PromptWithAuthor } from "@/types";
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
          author {
            id
          }
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
              node: PromptWithAuthor;
            }[];
          };
        }>(getPromptsQuery)
        .then((data) => data.data?.promptIndex.edges.map((edge) => edge.node)),
    {
      enabled: !!ceramic.did,
    },
  );
};
