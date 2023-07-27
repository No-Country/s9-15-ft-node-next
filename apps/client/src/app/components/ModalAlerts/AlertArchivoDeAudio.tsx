/* eslint-disable prettier/prettier */
'use client';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import React, { useState, type MouseEvent, useEffect, useRef } from 'react';

import DiscoDuro from '@/app/assets/DiscoDuro.png';
import Drive from '@/app/assets/Drive.png';
import Dropbox from '@/app/assets/Dropbox.png';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
  archivo?: string;
  setArchivo: React.Dispatch<React.SetStateAction<string>>;
}

export default function AlertArchivoDeAudio({ visible, onClose, archivo = '', setArchivo }: ModalAlertProps) {
  const [fileProcess, setFileProcess] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
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

  const notify = () => toast("No esta disponible");
  if (!visible) return null;

  // Definimos el estado inicial del componente:
  // Definimos el estado inicial del archivo seleccionado:

  // Esta función se ejecuta cuando el usuario selecciona un archivo:
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileProcess(true)
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
    console.log(`Archivo seleccionado: ${file?.name}`);
    console.log(`Archivo seleccionado: Pero no cargado`);
    setFileProcess(false)
  };

  // Esta función se ejecuta cuando el usuario envía el formulario:
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setIsSending(true);
  };

  const handleCloseClick = () => {
    console.log('Si');

  };

  return (
    <>
      <div
        className="modal flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
        onClick={() => handleCloseClick}
      >
        <div className="inline-flex h-[278px] w-[264px] flex-col items-center justify-center gap-6 border-2 border-orange-500 bg-white px-6 pb-10 shadow sm:pb-7 md:h-[211px] md:w-[432px] md:pt-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="self-stretch text-center text-lg font-semibold text-zinc-700 sm:text-2xl">
            Carga el archivo de audio
          </div>

          <div className="inline-flex items-center justify-center gap-4 md:gap-6">
            <Button
              id="DiscoDuro"
              onClick={handleClose}
              className="inline-flex rounded h-16 w-16 flex-col items-center justify-center bg-orange-400 hover:shadow-md"
            >
              <div className="relative h-8 w-8 cursor-pointer">
                <Image src={DiscoDuro} alt="DiscoDuro" className='py-2 rounded' />
                {selectedFile && (
                  <p className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white bg-blue-500 rounded-md">
                    {selectedFile.name}
                  </p>
                )}
                <input
                  type="file"
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                  onChange={handleFileChange}
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
              )}
            </Button>
            <Button
              id="Drive"
              onClick={notify}
              className="inline-flex h-16 w-16 flex-col sepia border border-gray-400 items-center justify-center rounded bg-white hover:shadow-md"
            >
              <div className="relative h-8 w-[35.84px]">
                <Image src={Drive} alt="Drive" />{' '}
              </div>
            </Button>
            <Button
              id="Dropbox"
              onClick={notify}
              className="inline-flex h-16 w-16 flex-col sepia items-center justify-center rounded bg-blue-600 hover:shadow-md"
            >
              <div className="relative h-8 w-[35.84px]">
                <Image src={Dropbox} alt="PayPal" />{' '}
              </div>
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
