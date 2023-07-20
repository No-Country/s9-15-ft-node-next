'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
CardAlbum.propTypes = {
  index: PropTypes.number.isRequired,
};

export default function CardAlbum({ index }: { index: number }) {
  return (
    <>
      <div className="m-[0.8%] inline-flex h-[261px] w-[156px] flex-col items-start justify-start gap-4 md:h-[319px] md:w-[206px]">
        <Image
          alt="tampa del album"
          className="rounded-[2.94px] md:h-52 md:w-[206px]"
          src="https://via.placeholder.com/206x208"
          width="156"
          height="261"
        />
        <div className="h-10 w-[156px] md:h-[49px] md:w-[206px]">
          <div className="left-0 top-0 w-[156px] text-base font-semibold text-zinc-700 md:text-2xl">
            Nombre Artista
          </div>
          <div className="left-0 top-[18px] w-[156px] text-sm font-medium text-neutral-500 md:top-[27px] md:text-xl">
            Nombre Álbum
          </div>
        </div>
        <div className="inline-flex cursor-pointer items-center justify-center gap-2.5 self-stretch border border-zinc-700 px-5 py-2">
          <div className="text-center text-xs font-medium leading-[13.46px] text-zinc-700">
            $ {Number(index) !== 0 && !isNaN(Number(index)) ? Number(index) + 1 : 1}0.00
          </div>
        </div>
      </div>
    </>
  );
}
