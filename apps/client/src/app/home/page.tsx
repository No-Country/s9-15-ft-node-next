import Albumes from '@/app/components/Albumes/Albumes';
import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Menu from '@/app/components/menu/Menu';
import Top from '@/app/components/top10/Topdies';
import { useStore } from '@/app/store';

import CardArtistList from '../components/CadrArtistList/CardArtistList';

function home() {
  console.log(useStore.getState().name);
  return (
    <>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="flex flex-grow flex-col justify-center">
          <CardArtistList />
          <div className="mx-4 my-10 h-px bg-black"></div>
          <Top />
          <Albumes />
          <div className="mb-3 ml-7 text-[11px]">
            © 2023 SoundWave | Todos los Derechos Reservados
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
