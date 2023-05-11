import "../styles/globals.css";

import { CeramicWrapper } from "../context";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CeramicWrapper>
      <Sidebar>
        <Component {...pageProps} ceramic />
      </Sidebar>
    </CeramicWrapper>
  );
};

export default MyApp;
