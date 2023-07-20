/* eslint-disable prettier/prettier */
import Image from 'next/image';
import React from 'react';

import error from '@/app/assets/error.png';

import HeaderGlobal from '../components/header-global/Header_Global';
import Menu from '../components/menu/Menu';
export default function page() {
  return (
    <div>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="flex flex-grow flex-col items-center justify-evenly">
          <Image className="w-[270px] md:w-[450px]" src={error} alt="error" />
          <h2 className=" w-[270px] text-center text-[20px] font-medium text-zinc-700 md:w-[596px] md:text-[42px]">
            ¡Ups, nos hemos perdido en el escenario! 🎵🎸
          </h2>
          <div className="inline-flex h-12 w-[271px] items-center justify-center gap-2.5 bg-orange-500 p-4">
            <div className="shrink grow basis-0 text-center text-base font-semibold uppercase leading-none text-black">
              Ir a incio
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
