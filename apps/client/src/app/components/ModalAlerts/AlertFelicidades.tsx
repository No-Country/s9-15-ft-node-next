/* eslint-disable prettier/prettier */
'use client';
import React from 'react';
import { MouseEvent } from 'react';
import Check from '@/app/assets/CheckOrange.png';
import Image from 'next/image';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertFelicidades({ visible, onClose }: ModalAlertProps) {
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    if (id === 'ok') {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="flex items-center justify-center bg-black bg-opacity-25 modal backdrop-blur-sm">
        <div className="inline-flex h-[278px] w-[264px] flex-col items-center justify-center gap-4 border-2 border-orange-500 bg-white px-6 pb-10 pt-10 shadow md:h-[251px] md:w-[432px] md:pb-7">
          <Image src={Check} alt="Compra exitosa"></Image>
          <div className="self-stretch text-lg font-semibold text-center text-zinc-700 md:text-2xl">
            ¡Felicidades ya eres un rockstar!
          </div>
          <div className="flex h-[104px] flex-col items-center justify-center gap-2 self-stretch">
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap">
              <div>
                <button
                  id="ok"
                  className="flex h-12 w-[141px] items-center justify-center gap-2.5 bg-orange-500 font-semibold hover:shadow-md"
                  onClick={handleClose}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
