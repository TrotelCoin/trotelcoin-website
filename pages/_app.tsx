import { AppProps } from "next/app";
import { NextPage } from "next";
import "../app/globals.css";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
