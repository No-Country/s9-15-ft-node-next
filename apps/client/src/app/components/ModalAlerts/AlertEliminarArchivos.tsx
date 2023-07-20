/* eslint-disable prettier/prettier */
'use client';
import React from 'react';
import { MouseEvent } from 'react';
import EliminarArchivos from '@/app/assets/EliminarArchivos.png';
import Image from 'next/image';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertEliminarArchivos({ visible, onClose }: ModalAlertProps) {
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    if (id === 'cancelar') {
      onClose();
    } else if (id === 'aceptar') {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="flex items-center justify-center bg-black bg-opacity-25 modal backdrop-blur-sm">
        <div className="inline-flex h-[345px] w-[264px] flex-col items-center justify-center gap-4 border-2 border-orange-500 bg-white px-6 pb-10 pt-10 shadow md:h-[281px] md:w-[432px] md:pb-7">
          <Image src={EliminarArchivos} className='w-12 h-12' alt="Seguro que desea eliminar?"></Image>
          <div className="self-stretch text-lg font-semibold text-center text-zinc-700 md:text-2xl">
            ¿Estás seguro que deseas eliminar estos archivos?
          </div>
          <div className="self-stretch text-md text-center mt-[-10px] text-zinc-700 md:text-xl">
            Una vez eliminados, no es posible recuperarlos
          </div>
          <div className="flex h-[104px] flex-col items-center justify-center gap-2 self-stretch">
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap">
              <div className="mb-3 md:mb-0 md:mr-2">
                <button
                  id="cancelar"
                  className="flex h-12 w-[141px] items-center justify-center gap-2.5 border border-orange-500 font-semibold hover:shadow-md"
                  onClick={handleClose}
                >
                  Cancelar
                </button>
              </div>
              <div>
                <button
                  id="aceptar"
                  className="flex h-12 w-[141px] items-center justify-center gap-2.5 bg-orange-500 font-semibold hover:shadow-md"
                  onClick={handleClose}
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
