/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { type MouseEvent } from 'react';

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
    <div
      className="modal flex justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
      data-id="menuOptions"
    >
      <div className="absolute right-10 top-[70px] z-10 h-[160px] w-[284px] border-2 border-orange-300 bg-white pl-2 pt-2 shadow-lg">
        <a href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-200">
          <div className="flex items-center gap-2">
            <Image className="h-[14px] w-[14px]" src={user} alt="user" />
            <Link href={'/Mydata'}>
              <p>Mis Datos</p>
            </Link>
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
            <Link href={'/'}>
              <p>Cerrar Sesion</p>
            </Link>
          </div>
        </a>
      </div>
    </div>
  );
}
