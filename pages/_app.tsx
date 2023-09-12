import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import i18n from "i18next";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    i18n.init({
      lng: "en",
      resources: {
        en: { translation: require("../locales/en.json") },
        fr: { translation: require("../locales/fr.json") },
      },
      interpolation: { escapeValue: false },
    });
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
