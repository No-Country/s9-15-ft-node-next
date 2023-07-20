/* eslint-disable prettier/prettier */
'use client';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import React, { type MouseEvent } from 'react';

import DiscoDuro from '@/app/assets/DiscoDuro.png';
import Drive from '@/app/assets/Drive.png';
import Dropbox from '@/app/assets/Dropbox.png';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertFotoPortada({ visible, onClose }: ModalAlertProps) {
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    if (id === 'DiscoDuro') {
      onClose();
    } else if (id === 'Drive') {
      onClose();
    } else if (id === 'Dropbox') {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="modal flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
        <div className="inline-flex h-[278px] w-[264px] flex-col items-center justify-center gap-6 border-2 border-orange-500 bg-white px-6 pb-10 shadow sm:pb-7 md:h-[211px] md:w-[432px] md:pt-10">
          <div className="self-stretch text-center text-lg font-semibold text-zinc-700 sm:text-2xl">
            Carga la foto de la portada
          </div>

          <div className="inline-flex items-center justify-center gap-4 md:gap-6">
            <Button
              id="DiscoDuro"
              onClick={handleClose}
              className="inline-flex h-16 w-16 flex-col items-center justify-center rounded bg-orange-400 hover:shadow-md"
            >
              <div className="relative h-8 w-8">
                <Image src={DiscoDuro} alt="DiscoDuro" />{' '}
              </div>
            </Button>
            <Button
              id="Drive"
              onClick={handleClose}
              className="inline-flex h-16 w-16 flex-col items-center justify-center rounded border border-gray-200 bg-white hover:shadow-md"
            >
              <div className="relative h-8 w-[35.84px]">
                <Image src={Drive} alt="Drive" />{' '}
              </div>
            </Button>
            <Button
              id="Dropbox"
              onClick={handleClose}
              className="inline-flex h-16 w-16 flex-col items-center justify-center rounded bg-blue-600 hover:shadow-md"
            >
              <div className="relative h-8 w-[35.84px]">
                <Image src={Dropbox} alt="PayPal" />{' '}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
