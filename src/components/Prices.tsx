function Prices() {
  return (
    <div className="flex flex-col gap-10 py-10 px-4">
      {/* TOP */}
      <div className="bg-blue">
        <h1 className="text-2xl border-b-2 pb-2 mb-4 border-blue-400 inline-block">
          Preços
        </h1>
        <p className="text-1xl">Aqui está alguns de nossos preços</p>
      </div>
      {/* TOP */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
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
    <div className="flex flex-col gap-4 min-h-[14rem] border-2 border-gray-100 rounded-sm  p-4">
      <p className="text-sm">🔷 Meu diario</p>
      <h1 className="text-3xl ">R$50</h1>
      <p className="text-sm text-gray-500">
        自适应、多功能、照片集、文集、旅行地图
      </p>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-gray-100"></span>
      </span>
      <ul>
        {[1, 2, 3].map((v, i) => (
          <li className="text-gray-500 text-sm" key={i}>
            {v} benefício
          </li>
        ))}
      </ul>
    </div>
  );
}
