/* eslint-disable prettier/prettier */
import React from 'react';

import AlbunDetails from '../components/albun/AlbunDetails';
import HeaderGlobal from '../components/header-global/Header_Global';
import Menu from '../components/menu/Menu';
import Perfiluser from '../components/perfilUser/Perfiluser';

export default function page() {
  return (
    <>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="flex flex-grow flex-col">
          <Perfiluser />
          <AlbunDetails />
          <div className="mb-3 ml-7 mt-10  text-[11px]">
            © 2023 SoundWave | Todos los Derechos Reservados
          </div>
        </div>
      </div>
    </>
  );
}
