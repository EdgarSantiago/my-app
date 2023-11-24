import React from "react";
import Text from "./global/Text";
import { motion, useScroll } from "framer-motion";

function Navbar() {
  return (
    <div className="absolute w-full z-50 bg-white">
      <motion.nav /** the variants object needs to be passed into the motion component **/
        className="py-6 font-semibold align-middle max-w-6xl flex flex-wrap items-center justify-between w-full mx-auto p-2 "
      >
        <a href="/" className="text-4xl">
          Lading page
        </a>

        <div className="flex flex-row gap-5">
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
      </motion.nav>
    </div>
  );
}

export default Navbar;
