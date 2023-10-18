const timeline = [
  {
    name: "Création de TrotelCoin",
    description:
      "Un étudiant en informatique passionné par les cryptomonnaies et la technologie blockchain a décidé de créer TrotelCoin.",
    date: "Mai 2023",
    dateTime: "2023-05",
  },
  {
    name: "Projet défini",
    description:
      "La distribution des jetons du projet, le livre blanc et les détails connexes ont été finalisés.",
    date: "Octobre 2023",
    dateTime: "2023-10",
  },
  {
    name: "Lancement de la version bêta",
    description:
      "La version bêta est en ligne, et la plateforme fait l'objet de tests utilisateurs.",
    date: "Juin 2024",
    dateTime: "2024-06",
  },
  {
    name: "Déploiement mondial de la plateforme",
    description:
      "La plateforme est lancée à l'échelle mondiale, offrant un accès à l'apprentissage pour tous.",
    date: "Octobre 2024",
    dateTime: "2024-10",
  },
];

export default function Roadmap() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Roadmap.
        </h2>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-blue-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
