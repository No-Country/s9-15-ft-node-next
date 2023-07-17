/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoIosPodium } from 'react-icons/io';

import vector from '@/app/assets/Vector.png';
import HeaderGlobal from '@/app/components/header-global/Header_Global';

import { ButtonCreate } from '../components/Buttons/seccion/Button_Create';
import Menu from '../components/menu/Menu';
import Reproductor from '../components/Reproductor/Reproductor';

interface Song {
  id: number;
  title: string;
  src: string;
  artista: string;
  price: string;
  disco: string;
  duracion: string;
}

export default function Page() {
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

  const [selectedSongIndex, setSelectedSongIndex] = useState<number | null>(null);
  const colors = ['bg-orange-200', 'bg-white'];

  const handleSongSelect = (index: number) => {
    setSelectedSongIndex(index);
  };

  return (
    <div>
      <HeaderGlobal />
      <div className="flex">
        <Menu />

        {songs.length > 0 ? (
          <div className="flex flex-grow flex-col">
            <div className="overflow-x-auto " style={{ maxHeight: '70%' }}>
              <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
                <div className="">
                  <table className="w-[100%]">
                    <thead className="border-b bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900"
                        >
                          Nombre
                        </th>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900"
                        >
                          Artista
                        </th>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900 "
                        >
                          Disco
                        </th>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900"
                        >
                          Duracion
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {songs.map((song, index) => (
                        <tr
                          key={index}
                          className={`border-b ${colors[index % colors.length]}`}
                          onClick={() => {
                            handleSongSelect(index);
                          }}
                        >
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                            <div className="flex items-center gap-1">
                              {selectedSongIndex === index && (
                                <td className="whitespace-nowrap  text-[8px] text-gray-900">
                                  <FaPlay />
                                </td>
                              )}
                              <div>{song.title}</div>
                              {selectedSongIndex === index && (
                                <td className="whitespace-nowrap  text-[15px] text-gray-900">
                                  <IoIosPodium />
                                </td>
                              )}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-light text-gray-900">
                            {song.artista}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-light text-gray-900">
                            {song.disco}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-light text-gray-900">
                            {song.duracion}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <nav className="flex items-center justify-center pt-10">
              <Reproductor songs={songs} onSongSelect={handleSongSelect} />
            </nav>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center">
            <section className="flex flex-col items-center gap-10">
              <Image src={vector} alt="logo vector" />
              <h2 className="ANNoTienesMSicaEnTuListaDeReproducciN w-[449px] text-center text-[32px] font-semibold text-zinc-700">
                Aún no tienes música en tu lista de reproducción
              </h2>
              <ButtonCreate>AGREGAR</ButtonCreate>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
