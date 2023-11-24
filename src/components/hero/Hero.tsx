import HeroNavbar from "./HeroNavbar";

function Hero() {
  return (
    <div id="Início" className="bg-blue-400 relative">
      <HeroNavbar />
      <div className="max-w-6xl flex flex-col lg:flex-row gap-28 lg:gap-40  min-h-screen lg:max-h-[500px] px-4 pt-6 md:pt-32 lg:pt-12 mx-auto">
        <div className="gap-5 flex flex-col justify-center w-full">
          <h1 className="text-3xl lg:text-4xl font-bold text-white ">
            🔷 irure ullamco.
          </h1>
          <h1 className="text-3xl lg:text-4xl font-thin text-white ">
            Minim fugiat qui ad ad doad ad do.
          </h1>
          <div className="flex flex-row gap-5 justify-center mt-5">
            {[1, 2, 3].map(() => (
              <a
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-black hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                href="/download"
              >
                <span className="text-sm mx-auto font-medium">Download</span>
              </a>
            ))}
          </div>
        </div>
        <img
          className="lg:max-h-[800px] m-auto "
          alt="xd"
          src="https://store.mmbkz.cn/usr/themes/crew/img/mydiary_00.webp"
        />
      </div>
    </div>
  );
}

export default Hero;
