import Text from "./global/Text";
import TopHeader from "./global/TopHeader";

function Teams() {
  return (
    <div
      id="Nosso time"
      className="flex flex-col gap-10 py-5 lg:py-32 px-4 justify-center "
    >
      {/* TOP */}
      <TopHeader title="Nosso time" desc="Esse é o nosso time ☕" />
      {/* TOP */}
      <div className="max-w-6xl grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:mx-auto">
        {[1, 2, 3].map(() => (
          <TeamCard />
        ))}
      </div>
    </div>
  );
}

export default Teams;

function TeamCard() {
  return (
    <div className="flex flex-col gap-2 min-h-[14rem] rounded-md">
      <img
        className="mx-auto inline-block h-[140px] w-[140px] rounded-full ring-2 ring-white"
        src="https://cis.cusat.ac.in/wp-content/uploads/ultimatemember/12/noperson.jpg"
        alt="avatar"
      />
      <Text color="text-black">Edgar Santiago</Text>
      <Text>Developer</Text>
      <div className="mt-4">
        <Text color="text-gray-500">
          Aliquip mollit quis qui irure. In proident enim ad sit aliqua nulla.
        </Text>
      </div>
    </div>
  );
}
