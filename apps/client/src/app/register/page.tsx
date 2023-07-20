import Image from 'next/image';
import React from 'react';

import background from '@/app/assets/auth/soundwave-bg.png';

import FormRegister from '../components/Auth/FormRegister';
import Header from '../components/header/Header';

export default function Register() {
  return (
    <>
      <div className="md:hidden">
        <Header />
      </div>
      <div className="bg-white md:flex md:w-[100%] md:flex-col md:items-center md:justify-center">
        <Image
          src={background}
          alt="Logo"
          width={1669}
          height={619}
          priority
          className="hidden md:absolute md:flex md:w-full"
        />
        <FormRegister />
        <p className="hidden font-normal text-black md:mb-[29px] md:mt-[89px] md:flex">
          © 2023 SoundWave | Todos los Derechos Reservados
        </p>
      </div>
    </>
  );
}
