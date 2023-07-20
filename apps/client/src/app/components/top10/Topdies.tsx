/* eslint-disable prettier/prettier */
'use client';
import { useEffect, useState } from 'react';

import ReproductorP from '@/app/components/reprodutorpequeño/ReproductorP';

import { ButtonCuatro } from '../mobile/buttons/Button_cuatro';
interface Song {
  id: number;
  title: string;
  src: string;
  artista: string;
  price: string;
  disco: string;
  duracion: string;
}
const songs: Song[] = [
  {
    id: 1,
    title: ' She Dont Give a FO ',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688782116/X2Download.app-Duki_-_She_Don_t_Give_a_FO_ft._Khea_Prod._by_Omar_Varela_azesq4.mp4',
    artista: 'duki',
    disco: 'RockStart',
    duracion: '3.50',
    price: '$2.4',
  },
  {
    id: 2,
    title: 'Coco Chanel',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688781959/X2Download.app_-_Eladio_Carri%C3%B3n_ft._Bad_Bunny_-_Coco_Chanel_Visualizer___3MEN2_KBRN_128_kbps_cwayqn.mp3',
    artista: 'Eladio Carrio',
    disco: 'Cultura',
    duracion: '3.30',
    price: '$6.4',
  },
  {
    id: 3,
    title: 'Bohemian Rhapsody',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921224/musica/pp24auznir04izrrvnkc.mp4',
    artista: 'Queen',
    disco: 'Bohemian Rhapsody',
    duracion: '5.24',
    price: '$12.4',
  },
  {
    id: 4,
    title: 'Seminare',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921396/X2Download.app-_SEMINARE__-_CHARLY_GARC%C3%8DA_%C3%89pica_versi%C3%B3n_bajo_la_lluvia_-_Quilmes_Rock_2004-_480p_d4j89g.mp4',
    artista: 'CHARLY GARCÍA ',
    disco: 'Seminare',
    duracion: '4.41',
    price: '$8.4',
  },
  {
    id: 5,
    title: 'Perfecta',
    src: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
    artista: 'Miranda',
    disco: 'Perfecta',
    duracion: '3.45',
    price: '$1.4',
  },
  {
    id: 6,
    title: 'De Musica Ligera',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921888/musica/X2Download.app-Soda_Stereo_-_De_Musica_Ligera_El_%C3%9Altimo_Concierto_-_480p_uihs9a.mp4',
    artista: 'Soda Stereo',
    disco: 'De Musica Ligera',
    duracion: '4.49',
    price: '$1.4',
  },
  {
    id: 7,
    title: 'Seguir Viviendo Sin Tu Amor',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688922018/musica/X2Download.app-Seguir_Viviendo_Sin_Tu_Amor-_480p_ee4slf.mp4',
    artista: 'Spinetta',
    disco: 'Sin Tu Amo',
    duracion: '2.40',
    price: '$6.4',
  },
  {
    id: 8,
    title: ' She Dont Give a FO ',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688782116/X2Download.app-Duki_-_She_Don_t_Give_a_FO_ft._Khea_Prod._by_Omar_Varela_azesq4.mp4',
    artista: 'duki',
    disco: 'RockStart',
    duracion: '3.50',
    price: '$7.4',
  },
  {
    id: 9,
    title: 'Coco Chanel',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688781959/X2Download.app_-_Eladio_Carri%C3%B3n_ft._Bad_Bunny_-_Coco_Chanel_Visualizer___3MEN2_KBRN_128_kbps_cwayqn.mp3',
    artista: 'Eladio Carrio',
    disco: 'Cultura',
    duracion: '3.30',
    price: '$3.4',
  },
  {
    id: 10,
    title: 'Bohemian Rhapsody',
    src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921224/musica/pp24auznir04izrrvnkc.mp4',
    artista: 'Queen',
    disco: 'Bohemian Rhapsody',
    duracion: '5.24',
    price: '$3.4',
  },
];

export default function Topdies() {
  const [showAll, setShowAll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const visibleSongs = showAll || !isSmallScreen ? songs : songs.slice(0, 5);
  const halfIndex = Math.ceil(visibleSongs.length / 2);
  const firstHalf = visibleSongs.slice(0, halfIndex);
  const secondHalf = visibleSongs.slice(halfIndex);

  return (
    <div>
      <h2 className="ml-6 text-xl font-semibold leading-normal text-zinc-700 md:ml-7 md:text-[32px]">
        Top 10 - Lo más vendido por nuestros artistas
      </h2>
      <div className="w-full">
        <section className={`ml-8 flex flex-wrap pb-7 pt-14 md:flex-row md:items-center md:gap-4`}>
          <div className="md:w-[49%]">
            {firstHalf.map((song, index) => (
              <div key={index} className={`flex-grow`}>
                <ReproductorP songs={[song]} />
              </div>
            ))}
          </div>
          <div className="md:w-[49%]">
            {secondHalf.map((song, index) => (
              <div key={index} className={`flex-grow`}>
                <ReproductorP songs={[song]} />
              </div>
            ))}
          </div>
        </section>
        {!showAll && isSmallScreen && (
          <div onClick={handleShowMore} className="mt-4 flex justify-center">
            <ButtonCuatro>VER MÁS</ButtonCuatro>
          </div>
        )}
      </div>
    </div>
  );
}
