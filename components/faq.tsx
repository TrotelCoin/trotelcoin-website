import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Qu'est-ce que TrotelCoin ?",
    answer:
      "TrotelCoin est une plateforme conçue pour offrir une manière interactive de comprendre comment fonctionnent les cryptomonnaies. Elle a été lancée en mai 2023 dans le but de fournir des ressources éducatives et des expériences pratiques liées aux cryptomonnaies.",
  },
  {
    question: "Qui a créé TrotelCoin ?",
    answer:
      "TrotelCoin a été créé par un étudiant en ingénierie passionné par l'éducation sur la cryptomonnaie et son potentiel pour autonomiser les individus.",
  },
  {
    question: "Que propose la plateforme éducative de TrotelCoin ?",
    answer:
      "La plateforme TrotelCoin offre des ressources éducatives complètes, des quiz interactifs et des activités pour aider les utilisateurs à comprendre les cryptomonnaies, la technologie de la blockchain et la finance décentralisée (DeFi).",
  },
  {
    question: "Comment puis-je gagner des TrotelCoin sur la plateforme ?",
    answer:
      "Vous pouvez gagner des TrotelCoin en participant à des quiz interactifs et des activités à mesure que vous progressez dans le processus d'apprentissage sur la plateforme TrotelCoin.",
  },
  {
    question: "Comment la token de TrotelCoin ($TROTEL) est-elle distribuée ?",
    answer:
      "À son lancement, TrotelCoin a une offre totale de 100 000 tokens. Ces tokens sont alloués à diverses fins, notamment la liquidité sur PancakeSwap, les récompenses pour l'engagement sur la plateforme, les ventes privées et les initiatives stratégiques.",
  },
  {
    question:
      "Comment sont calculées les récompenses pour les utilisateurs sur la plateforme TrotelCoin ?",
    answer:
      "Les récompenses pour les utilisateurs sont calculées à l'aide d'une formule qui prend en compte le nombre de quiz répondus et une récompense de base pour les quiz. La récompense diminue à mesure que les utilisateurs répondent à davantage de quiz.",
  },
  {
    question:
      "Pourquoi la destruction de token n'est-elle pas mise en œuvre dans la stratégie du projet TrotelCoin ?",
    answer:
      "TrotelCoin a choisi de ne pas mettre en œuvre la destruction de token afin de maintenir l'offre de token existante et d'éviter d'éventuelles perturbations de l'écosystème. Cela garantit la stabilité de la valeur du token et son utilité continue au sein de l'écosystème du projet.",
  },
  {
    question:
      "Comment TrotelCoin prévient-il la fraude et les abus dans son système de quiz ?",
    answer:
      "TrotelCoin met en place un système de participation à un quiz unique et relie les numéros de téléphone aux portefeuilles pour prévenir d'éventuelles fraudes et abus. Il est également prévu de envisager l'utilisation de Worldcoin ID pour une authentification renforcée à l'avenir.",
  },
  {
    question:
      "Où puis-je en savoir plus sur TrotelCoin et les détails de son projet ?",
    answer:
      "Vous pouvez trouver plus d'informations sur TrotelCoin et les détails de son projet dans le livre blanc fourni et sur la plateforme officielle de TrotelCoin.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Foire aux questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
