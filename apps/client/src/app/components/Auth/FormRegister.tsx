/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Se ha desactivado el eslint de tipos porque me lansaba error el staticImages de nextjs
'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import hideEye from '@/app/assets/auth/hide-eye.svg';
import showEye from '@/app/assets/auth/show-eye.svg';
import logo from '@/app/assets/landingpage/soundwave.png';

import usePostRegister from './hooks/usePostRegister';

interface data {
  name: string;
  username: string;
  email: string;
  password: string;
  fechaNacimiento: Date;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('El correo electrónico es obligatorio')
    .email('Ingresa un correo electrónico válido'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/,
      'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial'
    ),
  name: yup.string().required('El nombre es obligatorio'),
  username: yup.string().required('El nombre de usuario es obligatorio'),
  fechaNacimiento: yup.date().required('La fecha de nacimiento es obligatoria'),
});

export interface dataFetch extends Omit<data, 'fechaNacimiento'> {
  surname: string;
  artist: boolean;
}

export default function FormRegister() {
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const postRoute = 'https://example-xi-lemon.vercel.app/auth-jwt/register';
  const { postRegister } = usePostRegister(postRoute);
  const [error, setError] = useState<Error | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<data>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<data> = async (dataSubmit) => {
    console.log('ESSUBmiT');
    setIsSubmitting(true);
    const data: dataFetch = {
      email: dataSubmit.email,
      password: dataSubmit.password,
      artist: false,
      name: dataSubmit.name,
      surname: dataSubmit.name,
      username: dataSubmit.name,
    };

    const result = await postRegister(data);
    setIsSubmitting(false);

    if (result.ok) {
      router.push('/login');
    } else {
      const errorData = result.errorMessage;
      const error = typeof errorData === 'string' ? errorData : 'Vuelve a intentarlo más tarde';
      console.log(dataSubmit);
      setError(new Error(error));
    }
  };

  return (
    <>
      <section className="z-10 max-h-screen md:relative md:z-10 md:mt-[129px] md:min-h-[889px] md:w-[588px] md:rounded-xl md:bg-orange-100 md:px-[120px] md:pt-[59px] md:shadow-2xl">
        <Image src={logo} alt="Logo" width={348} height={53} priority className="hidden md:flex" />
        <p className="mt-10 px-7 text-start text-2xl font-bold text-black md:mt-5  md:pt-[25px] md:text-center md:text-[24px] md:font-semibold ">
          ¡Regístrate ahora y sumérgete en el mundo de la música!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 px-5 md:mt-[46px] md:px-0 ">
          <div className="relative mb-4 md:mb-4">
            <input
              {...register('name')}
              type="text"
              id="name"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Nombre Completo
            </label>
            {errors.name != null && (
              <p className="my-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="relative mb-4 md:mb-4">
            <input
              {...register('username')}
              type="text"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              id="username"
              placeholder=" "
            />
            <label
              htmlFor="username"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Eligue tu usuario
            </label>
            {errors.username != null && (
              <p className="my-1 text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="relative mb-4 md:mb-4">
            <input
              {...register('fechaNacimiento', { required: true })}
              type="date"
              id="fechaNacimiento"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="fechaNacimiento"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Fecha de nacimiento
            </label>
            {errors.fechaNacimiento != null && (
              <p className="my-1 text-sm text-red-500">
                {errors.fechaNacimiento.message}{' '}
                {errors.fechaNacimiento.type === 'date.default' ? 'Ponga nuevamente la fecha' : ''}
              </p>
            )}
          </div>
          <div className="relative mb-4 md:mb-4">
            <input
              {...register('email', { required: true })}
              type="email"
              id="email"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Correo electrónico
            </label>
            {errors.email != null && (
              <p className="my-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="relative mb-4 md:mb-4">
            <input
              type={visible ? 'text' : 'password'}
              {...register('password', { required: true })}
              id="password"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
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

            {errors.password != null && (
              <p className="my-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`inline-flex h-12 w-[348px] items-center justify-center gap-2.5 rounded-md p-4 text-[16px] font-semibold uppercase leading-none   
            ${
              isSubmitting
                ? ' bg-zinc-300 text-neutral-400'
                : 'bg-orange-500 text-black hover:bg-orange-400'
            }`}
          >
            {isSubmitting ? 'Loading...' : 'Continuar'}
          </button>
          {error != null && (
            <p className="flex items-center justify-center text-center text-sm  text-red-500">
              {error.message}
            </p>
          )}
        </form>
        <Link
          href={'/login'}
          className=" md:mt-[35 px] mt-10 flex justify-center hover:underline hover:decoration-1 "
        >
          Si ya tenés cuenta, inicia sesión aquí
        </Link>
      </section>
    </>
  );
}
