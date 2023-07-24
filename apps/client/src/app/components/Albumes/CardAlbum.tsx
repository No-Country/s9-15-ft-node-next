'use client';
import Image from 'next/image';

export interface Album {
  _id: string;
  canciones: string[];
  duracion: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  usuario: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function CardAlbum({ album }: { album: Album }) {
  return (
    <>
      <div className="m-[0.8%] inline-flex h-[261px] w-[156px] flex-col items-start justify-start gap-4 md:h-[319px] md:w-[206px]">
        <Image
          alt="tampa del album"
          className="rounded-[2.94px] md:h-52 md:w-[206px]"
          src={'https://via.placeholder.com/206x208'}
          width="156"
          height="261"
        />
        <div className="h-10 w-[156px] md:h-[49px] md:w-[206px]">
          <div className="left-0 top-0 w-[156px] truncate text-base font-semibold text-zinc-700 md:text-2xl">
            {/* Nombre Artista */}
            {album.nombre}
          </div>
          <div className="left-0 top-[18px] w-[156px] truncate text-sm font-medium text-neutral-500 md:top-[27px] md:text-xl">
            {/* Nombre Álbum */}
            {album.descripcion}
          </div>
        </div>
        <div className="inline-flex cursor-pointer items-center justify-center gap-2.5 self-stretch rounded border border-zinc-700 px-5 py-2">
          <div className="text-center text-xs font-medium leading-[13.46px] text-zinc-700">
            {/* $ {Number(index) !== 0 && !isNaN(Number(index)) ? Number(index) + 1 : 1}0.00 */}${' '}
            {album.precio}
          </div>
        </div>
      </div>
    </>
  );
}
