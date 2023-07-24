/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import React, { type MouseEvent } from 'react';

import compartir from '@/app/assets/compartir.png';
import editar from '@/app/assets/Editar.png';
import eliminar from '@/app/assets/eliminar.png';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertSongsOptions({ visible, onClose }: ModalAlertProps) {
  const handleClose = (e: MouseEvent<HTMLElement>) => {
    const { id } = e.currentTarget;
    if (id === 'editar') {
      onClose();
    } else if (id === 'eliminar') {
      onClose();
    } else if (id === 'compartir') {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    /*
       <div className="flex items-center justify-center bg-black bg-opacity-25 modal backdrop-blur-sm">
       
       <div className="inline-flex h-[278px] w-[264px] flex-col items-center justify-center gap-6 border-2 border-orange-500 bg-white px-6 pb-10 shadow sm:pb-7 md:h-[211px] md:w-[432px] md:pt-10">
    */
    <div className="modal flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="h-40 w-[185px] items-center justify-center border-2 border-orange-500 bg-white pl-2 pt-2 shadow-lg">
        <a
          id="editar"
          onClick={handleClose}
          href="#"
          className="block px-4 py-3 text-gray-800 hover:bg-gray-200"
        >
          <div className="flex items-center gap-2">
            <Image className="h-[14px] w-[14px]" src={editar} alt="user" />
            <button>Editar Precio</button>
          </div>
        </a>
        <a
          href="#"
          id="eliminar"
          onClick={handleClose}
          className="block py-3 pl-[10px] text-gray-800 hover:bg-gray-200"
        >
          <div className="flex items-end gap-1">
            <Image className="h-[24px] w-[24px]" src={eliminar} alt="bell" />
            <button>Eliminar</button>
          </div>
        </a>
        <a
          id="compartir"
          onClick={handleClose}
          href="#"
          className="block px-4 py-3 text-gray-800 hover:bg-gray-200"
        >
          <div className="flex items-center gap-2">
            <Image className="h-[14px] w-[14px]" src={compartir} alt="exit" />
            <button>Compartir</button>
          </div>
        </a>
      </div>
    </div>
  );
}
