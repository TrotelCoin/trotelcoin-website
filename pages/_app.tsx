import { AppProps } from "next/app";
import { NextPage } from "next";
import "../app/globals.css";
import { LocaleProvider } from "../context/LocaleContext";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
};

export default App;
