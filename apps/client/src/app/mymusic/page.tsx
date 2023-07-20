/* eslint-disable prettier/prettier */
'use client';
import HeaderGlobal from '@/app/components/header-global/Header_Global';

import Menu from '../components/menu/Menu';
import PlayList from './playlist';

export default function Page() {
  return (
    <div>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="flex flex-grow flex-col justify-center">
          <PlayList />
          <div className="mb-3 ml-7 text-[11px]">
            © 2023 SoundWave | Todos los Derechos Reservados
          </div>
        </div>
      </div>
    </div>
  );
}
