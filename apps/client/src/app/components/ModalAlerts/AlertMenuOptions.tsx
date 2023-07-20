/* eslint-disable prettier/prettier */
'use client';
import React from 'react';
import { MouseEvent } from 'react';
import Image from 'next/image';
import bell from '@/app/assets/bell.png';
import exit from '@/app/assets/exit.png';
import user from '@/app/assets/user.png';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertMenuOptions({ visible, onClose }: ModalAlertProps) {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    onClose();
  };

  if (!visible) return null;

  return (
      <div className="flex justify-center bg-black bg-opacity-25 modal backdrop-blur-sm" onClick={handleClose} data-id="menuOptions">
        <div className="absolute right-10 top-[70px] z-10 h-[160px] w-[284px] border-2 border-orange-300 bg-white pl-2 pt-2 shadow-lg">
          <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-200">
            <div className="flex items-center gap-2">
              <Image className="h-[14px] w-[14px]" src={user} alt="user" />
              <button>Mis Datos</button>
            </div>
          </a>
          <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-200">
            <div className="flex items-end gap-2">
              <Image className="h-[14px] w-[14px]" src={bell} alt="bell" />
              <button>Notificaciones</button>
            </div>
          </a>
          <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-200">
            <div className="flex items-center gap-2">
              <Image className="h-[14px] w-[14px]" src={exit} alt="exit" />
              <button>Cerrar Sesion</button>
            </div>
          </a>
        </div>
      </div>
  );
}
