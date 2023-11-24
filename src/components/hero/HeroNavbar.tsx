import Text from "../global/Text";

function HeroNavbar() {
  return (
    <div className="absolute w-full hidden md:block">
      <nav className="text-white py-6 font-semibold align-middle max-w-6xl flex flex-wrap items-center justify-between w-full mx-auto p-2 ">
        <a href="/" className="text-4xl">
          Lading page
        </a>

        <div className="flex flex-row gap-5">
          {["Início", "Preços", "Sobre nós", "Nosso time", "Habilidades"].map(
            (v, i) => (
              <Text color="text-white" key={i}>
                <a href={`/#${v}`} className="nav-hover p-2 cursor-pointer">
                  {v}
                </a>
              </Text>
            )
          )}
        </div>
      </nav>
    </div>
  );
}

export default HeroNavbar;
