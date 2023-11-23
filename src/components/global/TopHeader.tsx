function TopHeader({ title = "", desc = "" }) {
  return (
    <div className="bg-blue mb-4">
      <h1 className="text-3xl md:text-4xl xl:text-5xl border-b-2 pb-2 mb-4 border-blue-400 inline-block">
        {title}
      </h1>
      <p className="text-lg md:text-2xl lg:text-3xl text-gray-400">{desc}</p>
    </div>
  );
}

export default TopHeader;
