import { useEffect, useState } from "react";
import Text from "./global/Text";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    const handleScroll = () => {
      if (window.scrollY > 30 || window.innerWidth < 1000) {
        setScrolling(true);
        setIsMobile(true);
      } else {
        setScrolling(false);
        setIsMobile(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarVariants = {
    hidden: { opacity: isMobile ? 1 : 0 },
    visible: {
      opacity: isMobile ? 1 : scrolling ? 0 : -100,
      y: isMobile ? 0 : scrolling ? 0 : -100,
    },
  };
  return (
    <motion.div
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      className="sticky top-0 lg:fixed w-full z-50 bg-white"
    >
      <nav className="py-6 font-semibold align-middle max-w-6xl flex flex-wrap items-center justify-between w-full mx-auto p-2">
        <a href="/" className="text-3xl lg:text-4xl">
          Landing page
        </a>
        <MobileLinks />

        <div className=" flex-row gap-5 hidden md:flex">
          {["Início", "Preços", "Sobre nós", "Nosso time", "Habilidades"].map(
            (v, i) => (
              <Text color="" key={i}>
                <a href={`/#${v}`} className="nav-hover p-2 cursor-pointer">
                  {v}
                </a>
              </Text>
            )
          )}
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;

function MobileLinks() {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setshowMenu(!showMenu)}
        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition md:hidden hover:text-white  hover:bg-indigo-500 active:bg-black"
      >
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[90px] right-1"
          >
            <Menu />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Menu() {
  return (
    <ul className="space-y-1 bg-white rounded-lg p-2">
      {["Início", "Preços", "Sobre nós", "Nosso time", "Habilidades"].map(
        (v, i) => (
          <li>
            <a
              href={`/#${v}`}
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              {v}
            </a>
          </li>
        )
      )}
    </ul>
  );
}
