import Image from 'next/image';
import React from 'react';

import background from '@/app/assets/auth/soundwave-bg.png';

import FormLogin from '../components/Auth/FormLogin';
import Header from '../components/header/Header';
export default function Login() {
  return (
    <>
      <div className="md:hidden">
        <Header />
      </div>
      <div className="bg-white md:flex md:w-full md:flex-col md:items-center md:justify-center">
        <Image
          src={background}
          alt="Logo"
          width={1669}
          height={619}
          priority
          className="absolute hidden md:flex md:w-full"
        />
        <FormLogin />
        <p className="hidden font-normal text-black md:mb-[29px] md:mt-[89px] md:flex">
          © 2023 SoundWave | Todos los Derechos Reservados
        </p>
      </div>
    </>
  );
}
