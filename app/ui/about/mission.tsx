export default function Mission() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto justify-center flex text-center -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">
            Our mission.
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-stone-600 dark:text-stone-200">
                The mission is to provide individuals with the knowledge and
                tools necessary to navigate and thrive in the world of Web3.
              </p>
              <div className="mt-10 m-auto max-w-xl text-base leading-7 text-stone-700 dark:text-stone-300">
                <p>
                  We provide a comprehensive educational platform that
                  simplifies complex concepts and offers examples for learning
                  about transactions, DeFi, etc. Our goal is to democratize
                  access to decentralized finance, foster a dynamic community,
                  and encourage widespread adoption of Web3 technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
