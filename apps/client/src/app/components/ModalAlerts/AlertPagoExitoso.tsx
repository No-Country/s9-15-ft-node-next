/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import React, { type MouseEvent } from 'react';

import Check from '@/app/assets/CheckGreen.png';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertPagoExitoso({ visible, onClose }: ModalAlertProps) {
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    if (id === 'salir') {
      onClose();
    } else if (id === 'musica') {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="modal flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="inline-flex h-[278px] w-[264px] flex-col items-center justify-center gap-4 border-2 border-orange-500 bg-white px-6 pb-10 pt-10 shadow md:h-[251px] md:w-[432px] md:pb-7">
          <Image src={Check} alt="Compra exitosa"></Image>
          <div className="self-stretch text-center text-lg font-semibold text-zinc-700 md:text-2xl">
            Tu compra se realizó con éxito
          </div>
          <div className="flex h-[104px] flex-col items-center justify-center gap-2 self-stretch">
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap">
              <div className="mb-3 md:mb-0 md:mr-2">
                <button
                  id="salir"
                  className="flex h-12 w-[141px] items-center justify-center gap-2.5 border border-orange-500 font-semibold hover:shadow-md"
                  onClick={handleClose}
                >
                  Salir
                </button>
              </div>
              <div>
                <button
                  id="musica"
                  className="flex h-12 w-[141px] items-center justify-center gap-2.5 bg-orange-500 font-semibold hover:shadow-md"
                  onClick={handleClose}
                >
                  Ir a mi música
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
