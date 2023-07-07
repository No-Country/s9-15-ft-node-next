export default function Menu() {
  return (
    <nav className="left-0 top-0 col-span-2 row-span-6 gap-6 border-r-4 border-t-2 border-r-orange-500 border-t-gray-500 bg-orange-200 py-12">
      <ul className="w-full">
        <li className="min-w-full pb-4 pl-10 pt-4 text-left hover:bg-orange-300">Mi música</li>
        <li className="min-w-full pb-4 pl-10 pt-4 text-left hover:bg-orange-300">
          Mi perfil SoundWave
        </li>
      </ul>
      <div className="w-full border-t border-black"></div>
      <div>
        <button className="min-w-full pb-4 pl-10 pt-4 text-left hover:bg-orange-300">
          SoundWave Marketplace
        </button>
        <button className="min-w-full pb-4 pl-10 pt-4 text-left hover:bg-orange-300">
          SoundWave Social
        </button>
        <button className="min-w-full pb-4 pl-10 pt-4 text-left hover:bg-orange-300">
          SoundWave Connect
        </button>
      </div>
    </nav>
  );
}
