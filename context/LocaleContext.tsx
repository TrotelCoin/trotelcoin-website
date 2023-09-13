import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";

const LocaleContext = createContext({
  locale: "en",
  setLocale: (_: string) => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<string>("en");

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
