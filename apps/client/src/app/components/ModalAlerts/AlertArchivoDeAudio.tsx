/* eslint-disable prettier/prettier */
'use client';
import React from 'react';
import { MouseEvent } from 'react';
import DiscoDuro from '@/app/assets/DiscoDuro.png';
import Drive from '@/app/assets/Drive.png';
import Dropbox from '@/app/assets/Dropbox.png';
import Image from 'next/image';
import { Button } from 'flowbite-react';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertArchivoDeAudio({ visible, onClose }: ModalAlertProps) {
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
      <div className="flex items-center justify-center bg-black bg-opacity-25 modal backdrop-blur-sm">
        <div className="inline-flex h-[278px] w-[264px] flex-col items-center justify-center gap-6 border-2 border-orange-500 bg-white px-6 pb-10 shadow sm:pb-7 md:h-[211px] md:w-[432px] md:pt-10">
          <div className="self-stretch text-lg font-semibold text-center text-zinc-700 sm:text-2xl">
            Carga el archivo de audio
          </div>

          <div className="inline-flex items-center justify-center gap-4 md:gap-6">
            <Button
              id="DiscoDuro"
              onClick={handleClose}
              className="inline-flex flex-col items-center justify-center w-16 h-16 bg-orange-400 rounded hover:shadow-md"
            >
              <div className="relative w-8 h-8">
                <Image src={DiscoDuro} alt="DiscoDuro" />{' '}
              </div>
            </Button>
            <Button
              id="Drive"
              onClick={handleClose}
              className="inline-flex flex-col items-center justify-center w-16 h-16 bg-white border border-gray-200 rounded hover:shadow-md"
            >
              <div className="relative h-8 w-[35.84px]">
                <Image src={Drive} alt="Drive" />{' '}
              </div>
            </Button>
            <Button
              id="Dropbox"
              onClick={handleClose}
              className="inline-flex flex-col items-center justify-center w-16 h-16 bg-blue-600 rounded hover:shadow-md"
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
