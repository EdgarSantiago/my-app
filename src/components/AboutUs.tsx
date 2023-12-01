import Text from "./global/Text";
import TopHeader from "./global/TopHeader";

function AboutUs() {
  return (
    <div
      id="Sobre nós"
      className="flex flex-col gap-10 py-10 lg:py-32 px-4 sm:px-20 "
    >
      {/* TOP */}
      <TopHeader title="Sobre nós" desc="Um pouquinho sobre nós" />
      {/* TOP */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 max-w-6xl mx-auto">
        <img
          className="w-[50%] sm:w-[30%] lg:w-[80%] "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Heraldic_Sun.svg/1200px-Heraldic_Sun.svg.png"
          alt="aboutusimg"
        />
        <div className="text-md text-gray-400 text-start  lg:col-span-2 my-auto">
          <Text>
            <span className="text-red-400">meu diario</span> Commodo et qui enim
            duis reprehenderit mollit.Et sunt voluptate in incididunt ullamco
            occaecat ullamco minim fugiat ullamco.
            <br />
            <br />
            Tempor excepteur sunt enim voluptate anim irure velit anim fugiat
            dolore nisi.
            <br />
            <br />
            Tempor excepteur sunt enim voluptate anim irure velit!!
          </Text>
          <br />
          <a
            className="inline-flex transition-all items-center gap-2 rounded-md border border-indigo-600 bg-indigo-600 px-6 py-2 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            href="/download"
          >
            <span className="text-sm font-medium">Saiba mais</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
