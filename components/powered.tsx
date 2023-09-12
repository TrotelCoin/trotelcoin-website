import Image from "next/image";

export default function Powered() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Powered by.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="flooz.svg"
            alt="Flooz"
            width={158}
            height={48}
          />
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">
              With Flooz, you have the capability to purchase $TROTEL using
              Apple Pay and Google Pay.
            </span>
            <a
              href="https://flooz.xyz/trade/how-to-buy/0xf04ab1a43cBA1474160B7B8409387853D7Be02d5?network=bsc"
              target="_blank"
              className="font-semibold text-blue-600"
            >
              <span className="absolute inset-0" aria-hidden="true" /> What's
              Flooz ? <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
