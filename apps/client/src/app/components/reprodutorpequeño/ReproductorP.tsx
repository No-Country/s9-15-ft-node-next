/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoIosMore, IoIosPodium } from 'react-icons/io';
import { TbPlayerPlayFilled, TbPlaystationSquare } from 'react-icons/tb';
import MetodoDePago from '@/app/components/ModalAlerts/AlertMetodoDePago';
import Opciones from '@/app/assets/Opciones.png';
import Play from '@/app/assets/Play.png';
import Reproduciendo from '@/app/assets/Reproduciendo.png';
import Stop from '@/app/assets/Stop.png';

// TODAS LAS ALERTAS DEL SITIO - IR BORRANDO A MEDIDA QUE SE UTILIZAN
// import PagoExitoso from '@/app/components/ModalAlerts/AlertPagoExitoso';
// import PagoError from '@/app/components/ModalAlerts/AlertPagoError';
// import FotoPortadaUsuario from '@/app/components/ModalAlerts/AlertFotoPortadaUsuario';
// import FotoPortadaAlbum from '@/app/components/ModalAlerts/AlertFotoPortadaAlbum';
// import ArchivoDeAudio from '@/app/components/ModalAlerts/AlertArchivoDeAudio';
// import AlertEliminarArchivos from '../ModalAlerts/AlertEliminarArchivos';
// import MetodoDeCobro from '../ModalAlerts/AlertMetodoDeCobro';
// import AlertMetodoCobro from '../ModalAlerts/AlertMetodoDeCobro';
// import AlertFelicidades from '../ModalAlerts/AlertFelicidades';
// import AlertPublicarComentario from '../ModalAlerts/AlertPublicarComentario';

import img from '@/app/assets/landingpage/p.jpg';

interface Song {
  id: number;
  title: string;
  src: string;
  artista: string;
  price: string;
  disco: string;
  duracion: string;
}

interface ReproductorProps {
  songs: Song[];
}

const ReproductorP: React.FC<ReproductorProps> = ({ songs }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);

  const handleClose = () => {
    setShowMyModal(false);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    const handlePlayPause = async () => {
      if (isPlaying) {
        try {
          // @ts-expect-error
          await audioElement.play();
        } catch (error) {}
      } else {
        // @ts-expect-error
        audioElement.pause();
      }
    };

    void handlePlayPause();
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full md:w-[100%]">
      <audio ref={audioRef} src={songs[0].src} />
      
      {/* Diseño José */}
      <div className="flex h-14 w-[326px] items-center justify-between border-b border-neutral-400 md:h-[58px] md:w-[525px]">
        <div className="relative h-[42px] w-[270px]">
          <div className="absolute left-0 top-[0px] text-2xl font-semibold leading-normal text-black md:text-3xl">
            {songs[0].id}
          </div>
          <div className="absolute left-[30px] top-[-2px] inline-flex items-center justify-start gap-4 md:left-[35px]">
            <Image
              className="h-[33px] w-[33px] object-cover md:h-[42px] md:w-[42px]"
              src={img}
              alt="imagen de portada"
            />
            <div className="inline-flex flex-col items-start justify-center">
              <div className="md:w-[178px] w-[118px] truncate text-base font-semibold text-zinc-700">
                {songs[0].title}
              </div>
              <div className="md:w-[178px] w-[118px] truncate text-sm font-medium text-neutral-500">
                {songs[0].artista}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="w-4 h-12 md:w-4 md:h-12 mr-[-9px] md:m-0">
            {isPlaying ? <Image src={Reproduciendo} alt="Reproduciendo" /> : ''}
          </div>
          <div className="w-12 h-12 mr-[-9px] md:m-0">
            <button
              onClick={() => {
                handlePlayPause();
              }}
            >
              {isPlaying ? <Image src={Play} alt="Play" /> : <Image src={Stop} alt="Stop" />}
            </button>
          </div>
          <div className="inline-flex h-[30px] md:w-[85px] w-14 items-center justify-center gap-2.5 border border-zinc-700 px-5 py-2 hover:border-orange-500">
            <button
              className="group relative text-center text-xs font-medium leading-[13.46px] text-zinc-700"
              onClick={() => {
                setShowMyModal(true);
              }}
            >
              <span className="text-center text-xs font-medium leading-[13.46px] text-zinc-700">
                {songs[0].price + '0'}
              </span>
              <span className="absolute left-1/2 mt-[-8px] h-[30px] md:w-[85px] w-14 -translate-x-1/2 transform bg-orange-500 pt-2 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                COMPRAR
              </span>
            </button>
          </div>
          <div className="relative w-8 h-8 md:w-12 md:h-12 md:m-0 m-[-5px]">
            <Image className="cursor-pointer" src={Opciones} alt="Opciones" />
          </div>
        </div>
      </div>
      <MetodoDePago onClose={handleClose} visible={showMyModal} />

      {/* TODAS LAS ALERTAS DEL SITIO - IR BORRANDO A MEDIDA QUE SE UTILIZAN */}
      {/* <PagoExitoso onClose={handleClose} visible={showMyModal} /> */}
      {/* <PagoError onClose={handleClose} visible={showMyModal} /> */}
      {/* <FotoPortada onClose={handleClose} visible={showMyModal} /> */}
      {/* <AlertEliminarArchivos onClose={handleClose} visible={showMyModal} /> */}
      {/* <AlertMetodoCobro onClose={handleClose} visible={showMyModal} /> */}
      {/* <FotoPortadaAlbum onClose={handleClose} visible={showMyModal} /> */}
      {/* <ArchivoDeAudio onClose={handleClose} visible={showMyModal} /> */}
      {/* <AlertFelicidades onClose={handleClose} visible={showMyModal} /> */}
      {/* <AlertPublicarComentario onClose={handleClose} visible={showMyModal} /> */}
    </div>
  );
};

export default ReproductorP;
