import { ReactNode } from "react";

function Text({ children }: { children: ReactNode }) {
  return (
    <p className="text-base sm:text-sm md:text-md lg:text-[16px] text-gray-400">
      {children}
    </p>
  );
}

export default Text;
