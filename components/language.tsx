import { useRouter } from "next/router";

export default function Language() {
  const router = useRouter();

  const handleChangeLanguage = (e: { target: { value: any } }) => {
    const selectedLanguage = e.target.value;
    const link = selectedLanguage === "English" ? "/" : "/fr";

    router.replace(link);
  };

  return (
    <div>
      <h3 className="text-sm font-semibold leading-6 text-gray-900">
        Language
      </h3>
      <select
        id="language"
        name="language"
        className="mt-6 block w-auto rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
        defaultValue="English"
        onChange={handleChangeLanguage}
      >
        <option>English</option>
        <option>Français</option>
      </select>
    </div>
  );
}
