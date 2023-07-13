/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoIosPodium } from 'react-icons/io';

import compartir from '@/app/assets/compartir.png';
import subir from '@/app/assets/dw.png';
import eliminar from '@/app/assets/eliminar.png';

import { ButtonCreate } from '../Buttons/seccion/Button_Create';

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
export default function Markedplace() {
  const [selectedSongIndex, setSelectedSongIndex] = useState<number | null>(null);
  const colors = ['bg-orange-200', 'bg-white'];
  const handleSongSelect = (index: number) => {
    setSelectedSongIndex(index);
  };
  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <h2 className="pl-5 text-[32px] text-orange-500">Marketplace</h2>
        <div className="flex justify-between">
          <Image src={compartir} alt="logo" />
          <Image src={eliminar} alt="logo" />
          <Image src={subir} alt="logo" />
        </div>
      </div>
      <div className="border-greey-100 ml-5 flex  w-[98%]  items-center justify-center border-[2px] "></div>

      <section>
        {songs.length > 0 ? (
          <div className="flex h-[400px] w-[100%] flex-col">
            <div className="overflow-x-auto " style={{ maxHeight: '75%' }}>
              <article className="p-10 text-center">
                Aquí tienes la lista de tus alucinantes creaciones musicales publicadas en SoundWave
                Marketplace que van a conquistar los oídos del mundo
              </article>
              <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="w-[100%]">
                    <thead className="border-b bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900"
                        >
                          Nombre v
                        </th>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900"
                        >
                          Artista v
                        </th>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900 "
                        >
                          Disco v
                        </th>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900"
                        >
                          Duracion v
                        </th>
                        <th
                          scope="col"
                          className="pb-2 text-left text-sm font-medium text-gray-900"
                        ></th>
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
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-light text-gray-900">
                            :
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-[400px] w-full flex-col items-center justify-center gap-20">
            <h3 className="text-[21px]">
              ¡Da a conocer tu talento y comienza a vender tus obras musicales en nuestro
              marketplace!
            </h3>
            <section className="flex flex-col items-center gap-10">
              <ButtonCreate>Cargar Archivo</ButtonCreate>
            </section>
          </div>
        )}
      </section>
    </div>
  );
}
