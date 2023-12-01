import HeroNavbar from "./HeroNavbar";

function Hero() {
  return (
    <div id="Início" className="bg-[#292929] relative pb-8">
      <HeroNavbar />
      <div className="max-w-6xl flex flex-col lg:flex-row gap-28 lg:gap-40  min-h-screen lg:max-h-[500px] px-4 pt-6 md:pt-32 lg:pt-12 mx-auto">
        <div className="gap-5 flex flex-col justify-center w-full">
          <h1 className="text-3xl lg:text-4xl font-bold text-white ">
            Algum titulo.
          </h1>
          <h1 className="text-3xl lg:text-4xl font-thin text-white ">
            Minim fugiat qui ad ad doad ad do.
          </h1>
          <div className="flex flex-row gap-5 justify-center mt-5">
            {["Sobre", "Download", "Início"].map((v, i) => (
              <a
                key={i}
                className="transition-all inline-flex items-center gap-2 rounded-lg border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-[#111111] hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                href="/"
              >
                <span className="text-sm mx-auto font-medium">{v}</span>
              </a>
            ))}
          </div>
        </div>
        <img
          className="max-h-[640px] m-auto "
          alt="xd"
          src="https://imagesuggest.com/wp-content/uploads/2021/06/8-Example-of-1-x-1-aspect-ratio-what-size-should-blog-post-image-be.png"
        />
      </div>
    </div>
  );
}

export default Hero;
