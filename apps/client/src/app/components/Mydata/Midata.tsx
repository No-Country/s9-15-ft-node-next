/* eslint-disable prettier/prettier */
import Image from 'next/image';
import React from 'react';

import mp from '@/app/assets/pagos/Mercado Pago.png';
import paypal from '@/app/assets/pagos/Pay Pal.png';

import { ButtonCuatro } from '../mobile/buttons/Button_cuatro';
import { ButtonTres } from '../mobile/buttons/Button_tres';
export default function Midata() {
  return (
    <div className=" mb-20 w-full">
      <h2 className="ml-7  mt-10 text-[32px] font-medium leading-normal text-orange-500">
        Mis datos
      </h2>
      <section className=" mt-10 flex w-[100%] flex-col items-center justify-center  ">
        <div className="">
          <div className="flex w-full justify-between px-5">
            <h3 className="text-2xl font-semibold leading-normal text-black">Información básica</h3>
            <div className="text-center text-lg font-normal leading-[48px] text-black">Editar</div>
          </div>
          <div className="h-[0px]  w-[100%] border border-gray-400 "></div>
          <section className="flex flex-col items-center md:flex-row md:justify-evenly">
            <div className="mx-14 my-10 ">
              <div className="text-[21px] font-medium leading-normal text-black">
                Foto de perfil
              </div>
              <div className="relative h-20 w-[84px]">
                <div className="absolute left-0 top-0 h-20 w-20">
                  <div className="absolute left-0 top-0 h-20 w-20 rounded-full bg-zinc-300" />
                </div>
                <div className="absolute left-[64px] top-[56px] h-5 w-5">
                  <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-zinc-300" />
                </div>
              </div>
            </div>
            <div className="my-10">
              <div className="flex justify-between">
                <div className="py-2 text-xl font-medium leading-normal text-black">Nombre</div>
                <input
                  type="text"
                  placeholder="Craig Álvarez"
                  className="mr-20 w-[40%] border-none"
                />
              </div>
              <div className="h-[0px] w-[100%] border border-black"></div>
              <div className="flex justify-between">
                <div className="py-2 text-xl font-medium leading-normal text-black">
                  Fecha de nacimiento
                </div>
                <input
                  type="text"
                  placeholder="04 de febrero 1880"
                  className="mr-20 w-[40%] border-none"
                />
              </div>
              <div className="h-[0px] w-[100%] border border-black"></div>
              <div className="flex justify-between">
                <div className="py-2 text-xl font-medium leading-normal text-black">
                  Correo electrónico
                </div>
                <input
                  type="text"
                  placeholder="vcraig_alvarez@gmail.com"
                  className="mr-20 w-[40%] border-none"
                />
              </div>
              <div className="h-[0px] w-[100%] border border-black"></div>
              <div className="flex justify-between">
                <div className="py-2 text-xl font-medium leading-normal text-black">Contraseña</div>
                <input
                  type="text"
                  placeholder="******************"
                  className="mr-20 w-[40%] border-none"
                />
              </div>
              <div className="h-[0px] w-[100%] border border-black"></div>
            </div>
          </section>
          <h2 className=" pl-5 text-2xl font-semibold leading-normal text-black ">
            Método de cobro
          </h2>
          <div className=" mt-2 h-[0px] w-[100%] border border-gray-400 "></div>
          <p className="mt-3 w-full pl-5 text-[21px] font-medium leading-normal text-black">
            Configura tu método de cobro. Una vez que esté configurado, podrás recibir los pagos por
            tus ventas.
          </p>
          <section className="mb-20 mt-20 flex justify-around">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <Image src={paypal} alt="paypal " />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <Image src={mp} alt="paypal " />
              </div>
            </div>
          </section>
          <h2 className=" pl-5 text-2xl font-semibold leading-normal text-black">
            Información del artista
          </h2>
          <div className="mt-2  h-[0px] w-[100%] border  border-gray-400"></div>
          <div className="my-5 pl-5">
            <input
              type="text"
              name=""
              className="w-[40%]  rounded border-[1px]  "
              placeholder="Escribe el género musical"
              id=""
            />
          </div>
          <div className="my-5 pl-5">
            <input
              type="text"
              name=""
              className="w-[90%] rounded border border-neutral-400 pb-[20%]"
              placeholder="Escribe una breve descripción acerca del artista"
              id=""
            />
          </div>
          <div className="hidden  md:block">
            <div className="mt-10 flex  justify-end gap-5 pr-5 ">
              <div className="inline-flex h-12 w-[141px] items-center justify-center gap-2.5 border border-orange-500 p-4">
                <div className="shrink grow basis-0 text-center text-base font-semibold uppercase leading-none text-black">
                  Cancelar
                </div>
              </div>
              <div className="inline-flex h-12 w-[158px] items-center justify-center gap-2.5 bg-orange-500 p-4">
                <div className="shrink grow basis-0 text-center text-base font-semibold uppercase leading-none text-black">
                  Guardar cambios
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center gap-5">
              <ButtonCuatro>Guardar cambios</ButtonCuatro>
              <ButtonTres>Cancelar</ButtonTres>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
