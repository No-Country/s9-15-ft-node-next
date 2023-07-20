/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// Se ha desactivado el eslint de tipos porque me lansaba error el staticImages de nextjs
'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import hideEye from '@/app/assets/auth/hide-eye.svg';
import showEye from '@/app/assets/auth/show-eye.svg';
import logo from '@/app/assets/landingpage/soundwave.png';

import usePostRegister from './hooks/usePostRegister';

interface data {
  name: string;
  username: string;
  artist: boolean;
  email: string;
  password: string;
  fechaNacimiento: Date;
}

export interface dataFetch extends data {
  surname: string;
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
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{5,}$/,
      'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial'
    ),
  name: yup.string().required('El nombre es obligatorio'),
  username: yup.string().required('El nombre de usuario es obligatorio'),
  artist: yup.boolean().required('El campo de artista es obligatorio'),
  fechaNacimiento: yup.date().required('La fecha de nacimiento es obligatoria'),
});

const initialFormValues = {
  name: '',
  username: '',
  artist: false,
  email: '',
  password: '',
  fechaNacimiento: '2023-07-19',
};

export default function FormRegister() {
  const [visible, setVisible] = useState(false);
  const postRoute = 'http://localhost:4000/auth-jwt/register';
  const { postRegister } = usePostRegister(postRoute);
  const [error, setError] = useState<Error | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<data>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: data) => {
    const data: dataFetch = {
      email: values.email,
      password: values.password,
      artist: false,
      name: values.name,
      surname: values.name,
      username: values.name,
      fechaNacimiento: values.fechaNacimiento,
    };

    const result = await postRegister(data);

    if (result.ok) {
      // hacer algo si la solicitud es exitosa
    } else {
      console.log(values);

      setError(new Error('Algo ha pasado, vuelvalo ha intentar mas tarde'));
    }
  };

  return (
    <>
      <section className="z-10 h-[889px] bg-orange-100 md:relative md:z-10 md:mt-[129px] md:w-[588px] md:rounded-xl md:px-[120px] md:pt-[59px] md:shadow-2xl">
        <Image src={logo} alt="Logo" width={348} height={53} priority className="" />
        <p className="text-center font-semibold text-black md:pt-[57px] md:text-[24px] ">
          Registrate
        </p>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="md:pt-[46px] ">
          <div className="relative md:mb-4">
            <input
              {...register('name', { required: true })}
              name="name"
              type="text"
              id="floating_outlined"
              className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
            >
              Nombre Completo
            </label>
            {errors.name != null && (
              <p className="my-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="relative md:mb-4">
            <input
              type="date"
              id="fechaNacimiento"
              {...register('fechaNacimiento', { required: true })}
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
          <div className="relative md:mb-4">
            <input
              type="email"
              {...register('email', { required: true })}
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
          <div className="relative md:mb-4">
            <input
              {...register('password', { required: true })}
              type={visible ? 'text' : 'password'}
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
            disabled={isSubmitting}
            className="inline-flex h-12 w-[348px] items-center justify-center gap-2.5 bg-zinc-300 p-4 text-[16px] font-semibold uppercase leading-none text-neutral-400"
          >
            {isSubmitting ? 'Loading...' : 'Continuar'}
          </button>
          {error != null && <div>Error: {error.message}</div>}
        </form>
        <p className="text-center hover:underline hover:decoration-1 md:mt-[16px]">
          Si ya tenés cuenta, inicia sesión aquí
        </p>
      </section>
    </>
  );
}
