/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { type ChangeEvent, useState } from 'react';

import btnApple from '@/app/assets/auth/Apple.svg';
import btnFacebook from '@/app/assets/auth/Facebook.svg';
import btnGoogle from '@/app/assets/auth/Google.svg';
import hideEye from '@/app/assets/auth/hide-eye.svg';
import showEye from '@/app/assets/auth/show-eye.svg';
import btnTwitter from '@/app/assets/auth/Twitter.svg';
import logo from '@/app/assets/landingpage/soundwave.png';

export default function FormLogin() {
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({
    field1: '',
    field2: '',
  });

  const { field1, field2 } = form;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };
  const isFormCompleted = field1 !== '' && field2 !== '';

  return (
    <>
      <section className="z-10 max-h-screen md:relative md:z-10 md:mt-[129px] md:h-[751px] md:w-[588px] md:rounded-xl md:bg-orange-100 md:px-[120px] md:pt-[59px] md:shadow-2xl">
        <Image src={logo} alt="Logo" width={348} height={53} priority className="hidden md:flex" />
        <p className="mt-10 px-7 text-start text-2xl font-bold text-black md:mt-5 md:px-5 md:pt-[25px] md:text-center md:text-[24px] md:font-semibold">
          Iniciar Sesión
        </p>
        <form className="mt-10 px-5 md:mt-[46px] md:px-0" onSubmit={handleSubmit}>
          <div className="relative mb-4 md:mb-4">
            <input
              type="email"
              name="field1"
              value={field1}
              onChange={handleChange}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Correo electrónico
            </label>
          </div>
          <div className="relative mb-10 md:mb-4">
            <input
              type={visible ? 'text' : 'password'}
              name="field2"
              value={field2}
              onChange={handleChange}
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10  origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-orange-500 md:text-[16px]"
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
                onClick={() => {
                  setVisible(false);
                }}
              />
            ) : (
              <Image
                src={hideEye}
                width={25}
                height={25}
                alt=""
                className="absolute right-4 top-[15%] cursor-pointer"
                onClick={() => {
                  setVisible(true);
                }}
              />
            )}
          </div>
          <button
            className={`inline-flex h-12 w-full items-center justify-center gap-2.5 p-4 text-[16px] font-semibold uppercase leading-none   ${
              isFormCompleted
                ? 'bg-orange-500 text-black hover:bg-orange-400'
                : ' bg-zinc-300 text-neutral-400'
            }`}
            type="submit"
            disabled={!isFormCompleted}
          >
            Continuar
          </button>
        </form>
        <div className="mb-6 mt-5 flex justify-center md:mb-8 md:mt-4">
          <div className="inline-flex items-center justify-center ">
            <hr className="my-6 h-px w-[155px] border-0 bg-orange-500 md:w-40" />
            <span className="px-3 text-[16px]  font-bold  text-gray-900">O</span>
            <hr className="my-6 h-px w-[155px] border-0 bg-orange-500 md:w-40" />
          </div>
        </div>
        <section className="flex justify-between px-7 md:px-5">
          <button className=" inline-flex h-12 w-[52px] items-center justify-center gap-2 rounded border border-black px-4 py-3.5">
            <Image src={btnApple} alt="btn-google" width={348} height={53} priority className="" />
          </button>
          <button
            onClick={() => signIn('google')}
            className=" inline-flex h-12 w-[52px] items-center justify-center gap-2 rounded border border-black px-4 py-3.5"
          >
            <Image src={btnGoogle} alt="btn-google" width={348} height={53} priority className="" />
          </button>
          <button
            onClick={() => signIn('facebook')}
            className=" inline-flex h-12 w-[52px] items-center justify-center gap-2 rounded border border-black px-4 py-3.5"
          >
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
        <section className="mt-20 flex flex-col space-y-10 md:mt-[38px] md:space-y-7">
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
