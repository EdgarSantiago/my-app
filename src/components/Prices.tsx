import Text from "./global/Text";
import TopHeader from "./global/TopHeader";

function Prices() {
  return (
    <div
      id="Preços"
      className="flex flex-col gap-10 py-32 px-4 bjustify-center"
    >
      {/* TOP */}
      <TopHeader title="Preços" desc="Um pouquinho sobre nossos preços" />
      {/* TOP */}
      <div className="max-w-6xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:mx-auto">
        {[1, 2, 3].map(() => (
          <PriceCard />
        ))}
      </div>
    </div>
  );
}

export default Prices;

function PriceCard() {
  return (
    <div className="flex flex-col gap-4 min-h-[14rem] border-2 border-gray-100 rounded-md  p-4">
      <Text>🔷 Meu diario</Text>
      <h1 className="text-3xl ">R$50</h1>
      <Text>
        Ea tempor et nostrud nostrud consequat consequat magna quis aliquip
        nulla quis.
      </Text>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gray-100"></span>
      </span>
      <ul>
        {[1, 2, 3].map((v, i) => (
          <li key={i}>
            <Text>{String(v)} benefício</Text>
          </li>
        ))}
      </ul>
      <a
        className="inline-block w-[150px] mx-auto items-center gap-2 rounded-lg border  px-4 py-1 text-black hover:bg-transparent hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="/download"
      >
        <span className="text-sm font-medium">Saiba mais</span>
      </a>
    </div>
  );
}
