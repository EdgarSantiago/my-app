import { ReactNode } from "react";

function Text({
  children,
  color = "text-gray-400",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <p className={`text-base sm:text-sm md:text-md lg:text-[16px] ${color}`}>
      {children}
    </p>
  );
}

export default Text;
