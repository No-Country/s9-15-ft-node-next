export default function Buscador() {
  return (
    <div className="mt-4 w-[97%] items-center md:mt-2 md:w-[50%]">
      <div className="relative flex h-12 overflow-auto rounded-full border border-gray-500 bg-white focus-within:shadow-lg">
        <div className="grid h-full w-12 place-items-center text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          className="peer w-[100%] border-none pr-2 text-sm text-gray-600  outline-none"
          type="text"
          id="search"
          placeholder="¿Qué quieres escuchar hoy?"
        />
      </div>
    </div>
  );
}
