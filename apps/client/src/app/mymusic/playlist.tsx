'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoIosPodium } from 'react-icons/io';

import vector from '@/app/assets/Vector.png';

import Buscador from '../components/Buscador/Buscador';
import { ButtonCreate } from '../components/Buttons/seccion/Button_Create';
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

export default function PlayList() {
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
    {
      id: 11,
      title: ' She Dont Give a FO ',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688782116/X2Download.app-Duki_-_She_Don_t_Give_a_FO_ft._Khea_Prod._by_Omar_Varela_azesq4.mp4',
      artista: 'duki',
      disco: 'RockStart',
      duracion: '3.50',
      price: '$2.4',
    },
    {
      id: 12,
      title: 'Coco Chanel',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688781959/X2Download.app_-_Eladio_Carri%C3%B3n_ft._Bad_Bunny_-_Coco_Chanel_Visualizer___3MEN2_KBRN_128_kbps_cwayqn.mp3',
      artista: 'Eladio Carrio',
      disco: 'Cultura',
      duracion: '3.30',
      price: '$6.4',
    },
    {
      id: 13,
      title: 'Bohemian Rhapsody',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921224/musica/pp24auznir04izrrvnkc.mp4',
      artista: 'Queen',
      disco: 'Bohemian Rhapsody',
      duracion: '5.24',
      price: '$12.4',
    },
    {
      id: 14,
      title: 'Seminare',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921396/X2Download.app-_SEMINARE__-_CHARLY_GARC%C3%8DA_%C3%89pica_versi%C3%B3n_bajo_la_lluvia_-_Quilmes_Rock_2004-_480p_d4j89g.mp4',
      artista: 'CHARLY GARCÍA ',
      disco: 'Seminare',
      duracion: '4.41',
      price: '$8.4',
    },
    {
      id: 15,
      title: 'Perfecta',
      src: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
      artista: 'Miranda',
      disco: 'Perfecta',
      duracion: '3.45',
      price: '$1.4',
    },
    {
      id: 16,
      title: 'De Musica Ligera',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921888/musica/X2Download.app-Soda_Stereo_-_De_Musica_Ligera_El_%C3%9Altimo_Concierto_-_480p_uihs9a.mp4',
      artista: 'Soda Stereo',
      disco: 'De Musica Ligera',
      duracion: '4.49',
      price: '$1.4',
    },
    {
      id: 17,
      title: 'Seguir Viviendo Sin Tu Amor',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688922018/musica/X2Download.app-Seguir_Viviendo_Sin_Tu_Amor-_480p_ee4slf.mp4',
      artista: 'Spinetta',
      disco: 'Sin Tu Amo',
      duracion: '2.40',
      price: '$6.4',
    },
    {
      id: 18,
      title: ' She Dont Give a FO ',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688782116/X2Download.app-Duki_-_She_Don_t_Give_a_FO_ft._Khea_Prod._by_Omar_Varela_azesq4.mp4',
      artista: 'duki',
      disco: 'RockStart',
      duracion: '3.50',
      price: '$7.4',
    },
    {
      id: 19,
      title: 'Coco Chanel',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688781959/X2Download.app_-_Eladio_Carri%C3%B3n_ft._Bad_Bunny_-_Coco_Chanel_Visualizer___3MEN2_KBRN_128_kbps_cwayqn.mp3',
      artista: 'Eladio Carrio',
      disco: 'Cultura',
      duracion: '3.30',
      price: '$3.4',
    },
    {
      id: 20,
      title: 'Bohemian Rhapsody',
      src: 'https://res.cloudinary.com/dmxriftxk/video/upload/v1688921224/musica/pp24auznir04izrrvnkc.mp4',
      artista: 'Queen',
      disco: 'Bohemian Rhapsody',
      duracion: '5.24',
      price: '$3.4',
    },
  ];

  const [selectedSongIndex, setSelectedSongIndex] = useState<number | null>(null);
  const colors = ['bg-orange-100', 'bg-white'];

  const handleSongSelect = (index: number) => {
    setSelectedSongIndex(index);
  };

  return (
    <>
      <div className="m-8 flex justify-between">
        <div className="hidden w-auto md:block">
          <div className="text-[32px] font-bold leading-normal text-orange-500">Mi Música</div>
        </div>
        <Buscador />
      </div>
      {songs.length > 0 ? (
        <div className="m-[1%] flex flex-grow flex-col">
          <div className="hidden overflow-x-auto sm:block">
            <div className="inline-block w-full px-4 py-2">
              <div className="">
                <table className="w-[100%]">
                  <thead className="sticky top-0 border-b bg-white">
                    <tr className="h-12 border-b border-zinc-700 text-left">
                      <th scope="col" className="p-[11px]">
                        Nombre
                      </th>
                      <th scope="col" className="p-[11px]">
                        Artista
                      </th>
                      <th scope="col" className="p-[11px]">
                        Disco
                      </th>
                      <th scope="col" className="p-[11px]">
                        Duración
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {songs.map((song, index) => (
                      <tr
                        key={index}
                        className={`whitespace-nowrap border-b border-neutral-400 text-sm font-medium ${
                          colors[index % colors.length]
                        }`}
                        onClick={() => {
                          handleSongSelect(index);
                        }}
                      >
                        <td className="px-3 py-4 ">
                          <div className="flex items-center gap-1">
                            {selectedSongIndex === index && (
                              <td className="text-[8px]">
                                <FaPlay />
                              </td>
                            )}
                            <div>{song.title}</div>
                            {selectedSongIndex === index && (
                              <td className="text-[15px]">
                                <IoIosPodium />
                              </td>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-4">{song.artista}</td>
                        <td className="px-3 py-4">{song.disco}</td>
                        <td className="px-3 py-4">{song.duracion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* PLAYLIST PEQUEÑO */}
          <div className="overflow-x-auto sm:hidden">
            <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
              <div className="">
                <table className="w-[98%]">
                  <tbody>
                    {songs.map((song, index) => (
                      <tr
                        key={index}
                        className={`whitespace-nowrap border-b border-neutral-400 text-sm font-medium`}
                        onClick={() => {
                          handleSongSelect(index);
                        }}
                      >
                        <td className="px-3 py-4 ">
                          <div className="flex items-center gap-1">
                            <div>{song.title}</div>
                            <div>{song.artista}</div>
                          </div>
                        </td>
                        <td className="text-[15px]">
                          <IoIosPodium />
                        </td>
                        <td className="text-[8px]">
                          <FaPlay />
                        </td>
                        <td className="px-3 py-4">{song.duracion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <nav className="flex items-center justify-center pt-20">
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
    </>
  );
}
