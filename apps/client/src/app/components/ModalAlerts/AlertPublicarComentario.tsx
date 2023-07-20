/* eslint-disable prettier/prettier */
'use client';
import React, {useState, ChangeEvent} from 'react';
import { MouseEvent } from 'react';
import Cerrar from '@/app/assets/CerrarXOrange.png';
import UsuarioArtista from '@/app/assets/UsuarioArtista.png';
import UsuarioFan from '@/app/assets/UsuarioFan.png';
import AñadirEmoji from '@/app/assets/AñadirEmoji.png';
import AñadirImagen from '@/app/assets/AñadirImagen.png';
import AñadirGif from '@/app/assets/AñadirGif.png';
import Image from 'next/image';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertPublicarComentario({ visible, onClose }: ModalAlertProps) {
  const [esPublicable, setEsPublicable] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setEsPublicable(value.trim() !== '');
  }

  const handleClose = (e: MouseEvent<HTMLButtonElement | HTMLImageElement>) => {
    const { id } = e.currentTarget;
    if (id === 'publicar') {
      onClose();
    } else if (id === 'cerrar') {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="flex items-center justify-center bg-black bg-opacity-25 modal backdrop-blur-sm">
        <div className="items-left inline-flex h-[280px] w-[328px] flex-col justify-center border-2 border-orange-500 bg-white px-4 py-3 shadow md:h-[352px] md:w-[668px] md:px-8 md:py-5">
          <div className="flex items-center justify-between w-full h-8 md:h-14">
            <div className="flex items-center w-full h-14 md:gap-2">
              <Image
                className="h-[30px] w-[30px] rounded-full md:h-14 md:w-14"
                src={UsuarioArtista}
                alt="imagen del artista"
              />
              <div className="justify-between flex-none gap-2 pl-3 md:flex">
                <div className="text-sm font-normal leading-tight text-zinc-700 md:text-base">
                  Nombre del Artista
                </div>
                <div className="text-sm font-normal leading-tight text-neutral-500 md:text-base">
                  @nameArtista
                </div>
              </div>
              <span className="mx-2 text-4xl font-bold md:mx-0">·</span>
              <div className="text-sm font-light leading-tight text-zinc-700 md:text-base">
                <span>15 min</span>
              </div>
            </div>
            <Image
              className="w-12 h-12 rounded-md cursor-pointer hover:shadow-md"
              onClick={handleClose}
              id="cerrar"
              src={Cerrar}
              alt="cerrar"
            />
          </div>
          <div className="flex items-start justify-start h-16 md:gap-2">
            <div className="">
              <div className="mx-[-16px] mt-[31px] w-16 rotate-90 border border-orange-500 md:mx-[-4px] md:mt-[31px] md:w-16"></div>
            </div>
            <div className="flex items-start justify-start gap-2 pt-3 pb-8 md:pt-1">
              <div className="self-stretch w-full">
                <span className="pl-3 pr-1 text-sm font-normal leading-normal line-clamp-2 text-zinc-700 md:text-xl">
                  Texto del post del Artista Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Officia temporibus optio expedita eaque fuga quas maiores id ad hic ea
                  veritatis consequatur quibusdam, corrupti tenetur rem nemo autem provident
                  perspiciatis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, cumque ducimus, delectus distinctio eos dolorem quaerat animi qui voluptates doloremque odio, ipsa totam dolore! Nostrum debitis quaerat sunt quae pariatur?
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start h-8 md:h-14 md:gap-1">
            <div className="flex items-center w-full h-14 md:gap-2">
              <Image
                className="w-8 h-8 rounded-full md:h-14 md:w-14"
                src={UsuarioFan}
                alt="imagen del fan"
              />
              <div className="pl-3 text-sm font-normal leading-tight text-zinc-700 md:text-base">
                Nombre del Fan
              </div>
              <div className="ml-2 text-sm font-normal leading-tight text-neutral-500 md:ml-0 md:text-base">
                @fanName
              </div>
            </div>
          </div>
          <div className="mr-[1px] flex items-start justify-start pl-[44px] md:pl-[72px]">
            <div className="flex items-start justify-start w-full">
              <textarea id="publicacion"
                className="w-full h-auto mb-[1px] text-sm border-none resize-none max-h-14 text-zinc-700 focus:border-none focus:outline-none focus:ring-1 focus:ring-orange-500 md:pl-1 md:text-xl"
                placeholder="Deja tu comentario aquí..."
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between h-12">
            <div className="flex items-center justify-start h-12 md:gap-6">
              <Image
                src={AñadirImagen}
                alt="añadir imagen"
                className="relative w-8 h-8 rounded-md cursor-pointer hover:shadow-md md:h-12 md:w-12"
              />
              <Image
                src={AñadirGif}
                alt="añadir gif"
                className="relative w-8 h-8 rounded-md cursor-pointer hover:shadow-md md:h-12 md:w-12"
              />
              <Image
                src={AñadirEmoji}
                alt="añadir emoji"
                className="relative w-8 h-8 rounded-md cursor-pointer hover:shadow-md md:h-12 md:w-12"
              />
            </div>
            <div>
              <button
                id="publicar"
                className="flex h-12 w-[141px] mt-2 items-center justify-center gap-2.5 bg-orange-500 font-semibold hover:shadow-md disabled:bg-zinc-300 disabled:text-neutral-400 disabled:shadow-none"
                disabled={!esPublicable}
                onClick={handleClose}
              >
                PUBLICAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
