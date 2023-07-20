export default function Buscador() {
  return (
    <div className="w-[97%] items-center md:w-[50%] md:mt-2 mt-4">
      <div className="relative flex h-12 overflow-auto bg-white border border-gray-500 rounded-full focus-within:shadow-lg">
        <div className="grid w-12 h-full text-gray-600 place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
