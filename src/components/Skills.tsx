import Text from "./global/Text";
import TopHeader from "./global/TopHeader";
import { FaRegEye } from "react-icons/fa";
import { IoGiftOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import { CiUmbrella, CiHeart } from "react-icons/ci";
function Skills() {
  const skillsData = [
    { icon: <IoGiftOutline size={"40px"} className="text-indigo-500" /> },
    { icon: <FaRegEye size={"40px"} className="text-indigo-500" /> },
    { icon: <BsGraphUp size={"40px"} className="text-indigo-500" /> },
    { icon: <IoMdTimer size={"40px"} className="text-indigo-500" /> },
    { icon: <CiUmbrella size={"40px"} className="text-indigo-500" /> },
    { icon: <CiHeart size={"40px"} className="text-indigo-500" /> },
  ];
  return (
    <div
      id="Habilidades"
      className="flex  flex-col gap-12 py-32 px-4 justify-center "
    >
      {/* TOP */}
      <TopHeader
        title="Nossas habilidades"
        desc="Essas são nossas habilidades ☕"
      />
      {/* TOP */}
      <div className="max-w-6xl grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:mx-auto">
        {skillsData.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;

function SkillCard({ skill }: any) {
  const { icon } = skill;
  return (
    <div className="flex gap-5 text-start rounded-md  ">
      <div>{icon}</div>
      <div className=" flex flex-col gap-2">
        <Text color="text-black">titulo</Text>
        <Text>
          Aliquip ullamco laborum eu laborum adipisicing.Do aliquip do mollit
          laborum ipsum amet ipsum aliquip est cupidatat amet nostrud id.
        </Text>
      </div>
    </div>
  );
}
