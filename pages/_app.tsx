import { AppProps } from "next/app";
import { NextPage } from "next";
import "../app/globals.css";
import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import i18n from "i18next";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    i18n.init({
      lng: "fr",
      resources: {
        en: { translation: require("../locales/en.json") },
        fr: { translation: require("../locales/fr.json") },
      },
      interpolation: { escapeValue: false },
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
