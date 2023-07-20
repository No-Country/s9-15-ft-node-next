'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import LikeTransparent from '@/app/assets/Seguir-Like-Transparent.png';
import LikeOrange from '@/app/assets/Seguir-Like-Orange.png';
interface CardArtistProps {
  index?: number;
}

export default function CardArtist({ index = 0 }: CardArtistProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="m-[1%] md:m-[0.7%] inline-flex cursor-pointer flex-col items-start justify-start gap-2 rounded-2xl border border-zinc-700 px-4 py-6 md:w-[206px] h-[157px] w-[156px] md:h-[213px]">
        <div className="inline-flex items-center self-stretch justify-between gap-2">
          <Image
            alt="imagen artista"
            className="rounded-full"
            src="https://via.placeholder.com/49x49"
            width="49"
            height="49"
          />
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image src={isHovered ? LikeOrange : LikeTransparent} alt="seguir"></Image>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-[16px] font-semibold leading-tight text-zinc-700">Nombre</div>
          <div className="text-[11px] font-medium text-neutral-500">Género</div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="text-[9.639604568481445px] font-semibold text-zinc-700">
            Cant. Seguidores {index + 1}
          </div>
          <div className="md:h-px md:w-[171px] md:bg-black"></div>
        </div>
        <div className="md:h-[106px] h-0 w-0 text-transparent md:w-[171px] md:text-xs md:font-normal md:leading-[14px] md:text-zinc-700">
          <p className="m-0 line-clamp-4">
            Breve descripción del artista Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium deleniti officia perferendis vel reprehenderit nisi laboriosam facere
            voluptates tenetur eligendi, alias deserunt odio beatae eveniet expedita atque
            aspernatur voluptatem facilis.
          </p>
        </div>
      </div>
    </>
  );
}
