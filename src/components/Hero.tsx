function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-28 md:gap-10  bg-blue-500 min-h-screen px-4 py-12">
      <div className="gap-5 flex flex-col">
        <h1 className="text-3xl font-bold text-white ">🔷 Meu diario!</h1>
        <h1 className="text-3xl font-thin text-white ">
          Aqui você monta seu blog com facilidade
        </h1>
        <div className="flex flex-row gap-5 justify-center mt-5">
          {[1, 2, 3].map(() => (
            <a
              className="inline-flex w-full items-center gap-2 rounded-lg border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="/download"
            >
              <span className="text-sm font-medium">Download</span>
            </a>
          ))}
        </div>
      </div>
      <div>
        <img
          alt="xd"
          src="https://store.mmbkz.cn/usr/themes/crew/img/mydiary_00.webp"
        />
      </div>
    </div>
  );
}

export default Hero;
