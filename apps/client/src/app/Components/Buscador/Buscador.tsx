import Image from 'next/image';
import logoMarketPlace from '@/app/assets/homePage/logoMarketPlace.png';

export default function Header() {
  return (
    <div className="col-span-10 row-span-1">
      <div className="flex items-center p-5">
        <Image className="hidden mr-4 md:block" src={logoMarketPlace} alt="logo market place" />
        <div className="flex flex-grow md:justify-center lg:justify-end">
          <div className="relative flex h-12 w-full items-center overflow-hidden rounded-full border border-gray-500 bg-white focus-within:shadow-lg lg:w-[60%]">
            <div className="grid w-12 h-full text-gray-600 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="w-full h-full pr-2 text-sm text-gray-600 outline-none peer"
              type="text"
              id="search"
              placeholder="¿Qué quieres escuchar hoy?"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center p-5">
        <div className="text-[18px] font-semibold leading-normal text-zinc-700 lg:text-[20px]">
          Descubre y apoya a nuevo talento musical
        </div>
      </div>
      <div className="inline-flex h-[213px] w-[206px] flex-col items-start justify-start gap-2 rounded-2xl border border-zinc-700 px-4 py-6">
        <div className="inline-flex items-center self-stretch justify-between gap-2">
          <img className="h-[49px] w-[49px] rounded-full" src="https://via.placeholder.com/49x49" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-[16px] font-semibold leading-tight text-zinc-700">Nombre</div>
          <div className="text-[11px] font-medium text-neutral-500">Género</div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-[9.639604568481445px] font-semibold text-zinc-700">
            Cant. Seguidores
          </div>
          <div className="h-[0px] w-[171px] border border-black"></div>
        </div>
        <div className="h-[56px] w-[171px] overflow-hidden text-[10px] font-normal leading-[14px] text-zinc-700">
          <p className="m-0">
            Breve descripción del artista Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium deleniti officia perferendis vel reprehenderit nisi laboriosam facere
            voluptates tenetur eligendi, alias deserunt odio beatae eveniet expedita atque
            aspernatur voluptatem facilis.
          </p>
        </div>
      </div>
    </div>
  );
}
