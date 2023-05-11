import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CeramicWrapper } from "../context";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CeramicWrapper>
        <Sidebar>
          <Component {...pageProps} ceramic />
        </Sidebar>
      </CeramicWrapper>
    </QueryClientProvider>
  );
};

export default MyApp;
