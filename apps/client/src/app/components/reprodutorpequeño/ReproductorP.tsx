/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
// import Loader from '@/app/components/Loader/Loader';
import img from '@/app/assets/landingpage/p.jpg';
import Opciones from '@/app/assets/Opciones.png';
import Play from '@/app/assets/Play.png';
import Reproduciendo from '@/app/assets/Reproduciendo.png';
import Stop from '@/app/assets/Stop.png';
import type { Artist } from '@/app/components/CadrArtistList/CardArtist';

// import AlertSongsOptions from '@/app/components/ModalAlerts/AlertSongsOptions';
export interface Song {
  _id: string;
  name: string;
  duration: number;
  user: Artist;
  coArtist: string;
  price: number;
  genre: string;
  image: string;
  date: string;
  album: string;
  src: string;
}
interface ReproductorProps {
  songs: Song[];
  index: number;
  handlePayment: (song: Song) => void; // Accept handlePayment function as a prop
}
const ReproductorP: React.FC<ReproductorProps> = ({ songs, index, handlePayment }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

      <div className="flex h-14 w-[326px] items-center justify-between border-b border-neutral-400 md:h-[58px] md:w-full md:min-w-[430px] md:max-w-[525px]">
        <div className="relative h-[42px] w-[270px]">
          <div className="absolute left-0 top-[0px] text-2xl font-semibold leading-normal text-black md:text-3xl">
            {index}
          </div>
          <div className="absolute left-[30px] top-[-2px] inline-flex items-center justify-start gap-4 md:left-[35px]">
            <Image
              className="h-[33px] w-[33px] rounded object-cover md:h-[42px] md:w-[42px]"
              src={img}
              alt="imagen de portada"
            />
            <div className="inline-flex flex-col items-start justify-center">
              <div className="w-[118px] truncate text-base font-semibold text-zinc-700 md:w-[178px]">
                {songs[0].name}
              </div>
              <div className="w-[118px] truncate text-sm font-medium text-neutral-500 md:w-[178px]">
                {songs[0]?.user?.name + ' ' + songs[0]?.user?.surname}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="mr-[-9px] h-12 w-4 md:m-0 md:h-12 md:w-4">
            {isPlaying ? <Image src={Reproduciendo} alt="Reproduciendo" /> : ''}
          </div>
          <div className="mr-[-9px] h-12 w-12 md:m-0">
            <button
              onClick={() => {
                handlePlayPause();
              }}
            >
              {isPlaying ? <Image src={Stop} alt="Stop" /> : <Image src={Play} alt="Play" />}
            </button>
          </div>
          <div className="inline-flex h-[30px] w-14 items-center justify-center gap-2.5 rounded border border-zinc-700 px-5 py-2 hover:border-orange-500 md:w-[85px]">
            <button
              className="group relative text-center text-xs font-medium text-zinc-700"
              onClick={() => {
                handlePayment(songs[0]);
              }} // Use handlePayment function here
            >
              <span
                className="text-center text-xs font-medium text-zinc-700"
                style={{ whiteSpace: 'nowrap' }}
              >
                $ {songs[0].price}
              </span>
              <span className="absolute left-1/2 mt-[-8px] h-[30px] w-14 -translate-x-1/2 transform rounded bg-orange-500 pt-2 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:w-[85px]">
                COMPRAR
              </span>
            </button>
          </div>
          <div className="relative m-[-5px] h-8 w-8 md:m-0 md:h-12 md:w-12">
            <Image className="cursor-pointer" src={Opciones} alt="Opciones" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReproductorP;
