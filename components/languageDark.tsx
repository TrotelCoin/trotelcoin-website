import React from "react";
import { useLocale } from "@/context/LocaleContext";

export default function Language() {
  const { locale, setLocale } = useLocale();

  const handleChangeLocale = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-gray-100">
        Language
      </h3>
      <select
        id="language"
        name="language"
        className="mt-6 block w-auto rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
        defaultValue={locale}
        onChange={(e) => handleChangeLocale(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
