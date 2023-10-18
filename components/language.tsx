import React from "react";
import { useRouter } from "next/router";

export default function Language() {
  const router = useRouter();

  const handleChangeLocale = (newLocale: string) => {
    router.push(`/${newLocale}${router.pathname}`, undefined, {
      locale: newLocale,
    });
  };

  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-gray-900">Langue</h3>
      <select
        id="language"
        name="language"
        className="mt-6 block w-auto rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
        defaultValue=""
        onChange={(e) => handleChangeLocale(e.target.value)}
      >
        <option value="">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
