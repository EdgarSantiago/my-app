function Navbar() {
  return (
    <nav className="text-[#6173f4] font-bold align-middle max-w-6xl flex flex-wrap items-center justify-between mx-auto p-2">
      <a href="/" className="text-2xl">
        Japanese
      </a>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  text-[#6173f4] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
