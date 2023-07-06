'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '@/app/assets/landingpage/soundwave.png';
import showEye from '@/app/assets/auth/show-eye.svg';
import hideEye from '@/app/assets/auth/hide-eye.svg';
import btnGoogle from '@/app/assets/auth/Google.svg';
import btnApple from '@/app/assets/auth/Apple.svg';
import btnFacebook from '@/app/assets/auth/Facebook.svg';
import btnTwitter from '@/app/assets/auth/Twitter.svg';
import Link from 'next/link';

export default function FormLogin() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <section className="z-10 h-[751px] bg-orange-100 md:relative md:z-10 md:mt-[129px] md:w-[588px] md:rounded-xl md:px-[120px] md:pt-[59px] md:shadow-2xl">
        <Image src={logo} alt="Logo" width={348} height={53} priority className="" />
        <p className="text-center font-semibold text-black md:pt-[57px] md:text-[24px] ">
          Iniciar Sesión
        </p>
        <form action="" className="md:pt-[46px] ">
          <div className="relative md:mb-4">
            <input
              type="email"
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2  peer-focus:text-orange-500 md:text-[16px]"
            >
              Correo electrónico
            </label>
          </div>
          <div className="relative md:mb-4">
            <input
              type={visible ? 'text' : 'password'}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-orange-500 md:text-[16px]"
            >
              Contraseña
            </label>
            {visible ? (
              <Image
                src={showEye}
                width={25}
                height={25}
                alt=""
                className="absolute right-4 top-[15%] cursor-pointer"
                onClick={() => setVisible(false)}
              />
            ) : (
              <Image
                src={hideEye}
                width={25}
                height={25}
                alt=""
                className="absolute right-4 top-[15%] cursor-pointer"
                onClick={() => setVisible(true)}
              />
            )}
          </div>
          <button className="inline-flex h-12 w-[348px] items-center justify-center gap-2.5 bg-zinc-300 p-4 text-[16px] font-semibold uppercase leading-none text-neutral-400">
            Continuar
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center justify-center ">
            <hr className="my-8 h-px w-24 border-0 bg-orange-500 lg:w-40" />
            <span className="border-2 px-3 text-[16px]  font-bold  text-gray-900">O</span>
            <hr className="my-8 h-px w-24 border-0 bg-orange-500 lg:w-40" />
          </div>
        </div>
        <section className="flex justify-between px-10">
          <button className=" inline-flex h-12 w-[52px] items-center justify-center gap-2 rounded border border-black px-4 py-3.5">
            <Image src={btnApple} alt="btn-google" width={348} height={53} priority className="" />
          </button>
          <button className=" inline-flex h-12 w-[52px] items-center justify-center gap-2 rounded border border-black px-4 py-3.5">
            <Image src={btnGoogle} alt="btn-google" width={348} height={53} priority className="" />
          </button>
          <button className=" inline-flex h-12 w-[52px] items-center justify-center gap-2 rounded border border-black px-4 py-3.5">
            <Image
              src={btnFacebook}
              alt="btn-google"
              width={348}
              height={53}
              priority
              className=""
            />
          </button>
          <button className=" inline-flex h-12 w-[52px] items-center justify-center gap-2 rounded border border-black px-4 py-3.5">
            <Image
              src={btnTwitter}
              alt="btn-google"
              width={348}
              height={53}
              priority
              className=""
            />
          </button>
        </section>
        <section className="mt-[38px] flex flex-col md:space-y-7">
          <Link href={'#'} className="text-center hover:underline hover:decoration-1 md:mt-[16px]">
            ¿Olvidaste tu contraseña?
          </Link>
          <Link
            href={'/register'}
            className="text-center hover:underline hover:decoration-1 md:mt-[16px]"
          >
            Regístrate para crear una cuenta
          </Link>
        </section>
      </section>
    </>
  );
}
