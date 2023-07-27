/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import axios from 'axios';
import Image from 'next/image';
import { type SetStateAction, useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoIosPodium } from 'react-icons/io';

import vector from '@/app/assets/Vector.png';

import { ButtonCreate } from '../components/Buttons/seccion/Button_Create';
import Reproductor from '../components/Reproductor/Reproductor';

export interface Song {
  _id: string;
  name: string;
  duration: number;
  user: User | null;
  coArtist: string;
  price: number;
  genre: string;
  image: string;
  date: Date;
  album: string;
  src: string;
  __v: number;
}

export interface User {
  _id: string;
  name: string;
  surname: string;
  artist: boolean;
  username: string;
  profilePhoto: string;
  favoriteArtists: string[];
  email: string;
  coverPhoto: string;
  password: string;
  songsPurchased: SongsPurchased[];
  songsUplodaded: SongsUplodaded[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  description?: string;
  genre: null | string;
  albumes: any[];
  followers: null[];
  mercadopagoApproved: boolean;
  paypalApproved: boolean;
}

export enum SongsPurchased {
  The64Aefa5Ac86Ee8204Ee39E72 = '64aefa5ac86ee8204ee39e72',
  The64Aefaa2C86Ee8204Ee39E74 = '64aefaa2c86ee8204ee39e74',
}

export enum SongsUplodaded {
  The64Aef870C86Ee8204Ee39E6A = '64aef870c86ee8204ee39e6a',
  The64Aef8E5C86Ee8204Ee39E6C = '64aef8e5c86ee8204ee39e6c',
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} Min`;
};

function findIndexById(array: any[], id: string) {
  return array.findIndex((obj) => obj._id === id);
}

export default function PlayList() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchSongs = async (): Promise<void> => {
      try {
        const response = await axios.get<Song[]>('http://localhost:4000/songs?limit=0');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    const fetchData = () => {
      fetchSongs().catch((error) => {
        // Manejar el error aquí si es necesario
        console.error('Error in fetchData:', error);
      });
    };

    fetchData();
  }, []);

  const [selectedSongIndex, setSelectedSongIndex] = useState<number>(0);
  const colors = ['bg-orange-100', 'bg-white'];

  const handleSongSelect = (id: string, indexVisto: SetStateAction<number>) => {
    const index = findIndexById(songs, id);
    console.log('[CAMBIO-SONG]', index);
    setSelectedSongIndex(indexVisto);
  };

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="m-8 flex justify-between">
        <div className="hidden w-auto md:block">
          <div className="text-[32px] font-bold leading-normal text-orange-500">Mi Música</div>
        </div>
        <div className="mt-4 w-[97%] items-center md:mt-2 md:w-[50%]">
          <div className="relative flex h-12 overflow-auto rounded-full border border-gray-500 bg-white focus-within:shadow-lg">
            <div className="grid h-full w-12 place-items-center text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer w-[100%] border-none pr-2 text-sm text-gray-600  outline-none"
              type="text"
              id="search"
              placeholder="¿Qué quieres escuchar hoy?"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
          </div>
        </div>
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
                    {filteredSongs.map((song, index) => (
                      <tr
                        key={song._id}
                        className={`whitespace-nowrap border-b border-neutral-400 text-sm font-medium ${colors[index % colors.length]
                          }`}
                        onClick={() => {
                          handleSongSelect(song._id, index);
                        }}
                      >
                        <td className="px-3 py-4 ">
                          <div className="flex items-center gap-1">
                            {selectedSongIndex === index && (
                              <td className="text-[8px]">
                                <FaPlay />
                              </td>
                            )}
                            <div>{song.name}</div>
                            {selectedSongIndex === index && (
                              <td className="text-[15px]">
                                <IoIosPodium />
                              </td>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-4">{song.user?.username}</td>
                        <td className="px-3 py-4">{song.album}</td>
                        <td className="px-3 py-4">{formatTime(song.duration)}</td>
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
                    {filteredSongs.map((song, index) => (
                      <tr
                        key={song._id}
                        className={`whitespace-nowrap border-b border-neutral-400 text-sm font-medium ${colors[index % colors.length]
                          }`}
                        onClick={() => {
                          handleSongSelect(song._id, index);
                        }}
                      >
                        <td className="px-3 py-4 ">
                          <div className="flex items-center gap-1">
                            {selectedSongIndex === index && (
                              <td className="text-[8px]">
                                <FaPlay />
                              </td>
                            )}
                            <div>{song.name}</div>
                            {selectedSongIndex === index && (
                              <td className="text-[15px]">
                                <IoIosPodium />
                              </td>
                            )}
                          </div>
                        </td>
                        <td className="px-3 py-4">{song.user?.username}</td>
                        <td className="px-3 py-4">{song.album}</td>
                        <td className="px-3 py-4">{formatTime(song.duration)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <nav className="flex items-center justify-center pt-20">
            <Reproductor songs={songs} onSongSelect={selectedSongIndex} />
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
