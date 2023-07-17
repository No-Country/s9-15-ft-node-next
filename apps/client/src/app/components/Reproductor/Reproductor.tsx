/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from 'react-icons/tb';

import random from '@/app/assets/Aleatorio.png';
import ant from '@/app/assets/Anterior.png';
import img from '@/app/assets/landingpage/p.jpg';
import repet from '@/app/assets/Repeat.png';
import next from '@/app/assets/Siguiente.png';

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
  onSongSelect: (index: number) => void;
}

const ReproductorResponsive: React.FC<ReproductorProps> = ({ songs, onSongSelect }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definir el ancho máximo para considerar como dispositivo móvil
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verificar el tamaño inicial de la pantalla

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement == null) {
      return;
    }

    const handleLoadedData = () => {
      setDuration(audioElement.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener('loadeddata', handleLoadedData);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('loadeddata', handleLoadedData);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement == null) {
      return;
    }

    audioElement.src = songs[currentSongIndex].src;
    audioElement.load();
    setCurrentTime(0);
  }, [currentSongIndex, songs]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement == null) {
      return;
    }
    if (isPlaying) {
      void audioElement.play();
    } else {
      audioElement.pause();
    }

    if (isExpanded) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [isPlaying, isExpanded]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement == null) {
      return;
    }
    audioElement.volume = volume;
  }, [volume]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    onSongSelect(nextIndex);
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    onSongSelect(prevIndex);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current == null) {
      return;
    }
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="my-5 flex w-[100%] justify-center">
      <audio ref={audioRef} />
      {isMobile ? (
        // REPRODUCTOR PEQUEÑO
        <section
          className={`mx-[5%] bg-[#FFE1CC] ${
            isExpanded ? 'h-[483px] w-full max-w-[360px]' : 'h-[64px] w-full max-w-[360px]'
          } rounded border-[1px]`}
          style={{ boxShadow: '0px 0px 6px 3px rgba(0,0,0,0.3)' }}
        >
          <div>
            {isExpanded ? (
              <div className="flex w-full flex-col items-center">
                <div className="h-[310px] w-[310px] cursor-pointer pt-8" onClick={toggleExpanded}>
                  <Image className="h-full w-full object-cover" src={img} alt="img" />
                </div>
                <div className="my-3 flex w-full items-center justify-center gap-4">
                  <button className="mr-2">
                    <Image src={random} alt="alt" className="mr-2 " />
                  </button>
                  <button className="mr-5" onClick={handlePreviousSong}>
                    <Image src={ant} alt="alt" className="" />
                  </button>
                  <button
                    className="relative bottom-2 mt-4 h-[60px] w-[60px] rounded-full border-[2px] border-orange-500 bg-[#FFF0E6] shadow-md shadow-slate-500"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? (
                      <div className="flex items-center justify-center">
                        <TbPlayerPauseFilled />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <TbPlayerPlayFilled />
                      </div>
                    )}
                  </button>
                  <button className="ml-5" onClick={handleNextSong}>
                    <Image src={next} alt="alt" className="" />
                  </button>
                  <button className="ml-2">
                    <Image src={repet} alt="alt" className="ml-2" />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-4 overflow-hidden">
                  <div className="text-xs font-semibold text-zinc-700">
                    <span>{formatTime(currentTime)}</span>
                  </div>
                  <input
                    className="h-1 w-[204px] cursor-pointer appearance-none overflow-hidden rounded-lg bg-gray-300 outline outline-1 outline-gray-400"
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    step={0.01}
                    onChange={handleSeek}
                  />
                  <div className="text-xs font-semibold text-zinc-700">
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
                <div
                  className="mt-[-6px] w-full cursor-pointer text-base font-medium text-black"
                  onClick={toggleExpanded}
                >
                  <p className="mt-5 flex justify-center text-center">
                    {songs[currentSongIndex].title} - {songs[currentSongIndex].artista}
                  </p>
                </div>
              </div>
            ) : (
              <div className="">
                <div className="flex justify-between ">
                  <div className="flex cursor-pointer items-center gap-2" onClick={toggleExpanded}>
                    <div>
                      <Image className="m-[14px] h-[35px] w-[35px]" src={img} alt="img" />
                    </div>
                  </div>
                  <div
                    className="ml-4 flex w-full cursor-pointer flex-col"
                    onClick={toggleExpanded}
                  >
                    <div className="mb-[-3px] mt-3 text-base font-medium text-black">
                      {songs[currentSongIndex].title}
                    </div>
                    <div className="text-[15px] font-medium text-zinc-700">
                      {songs[currentSongIndex].artista}
                    </div>
                  </div>
                  <div className="m-[14px] flex items-center rounded-full border-[2px] border-orange-500 bg-orange-100 p-2 shadow-md shadow-slate-500">
                    {isPlaying ? (
                      <button onClick={handlePlayPause}>
                        <TbPlayerPauseFilled />
                      </button>
                    ) : (
                      <button onClick={handlePlayPause}>
                        <TbPlayerPlayFilled />
                      </button>
                    )}
                  </div>
                </div>
                <div className="mt-[-4px] flex">
                  <input
                    className="h-1 w-[100%] cursor-pointer appearance-none overflow-hidden rounded-lg bg-[#FFE1CC]"
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    step={0.01}
                    onChange={handleSeek}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        // REPRODUCTOR GRANDE
        <section
          className="flex h-[100px] w-[70%] flex-col items-center justify-center rounded-3xl border-2 border-orange-500 bg-[#FFE1CC]"
          style={{ boxShadow: '0px -10px 10px 0px rgba(0,0,0,0.2)' }}
        >
          <div className="flex h-[52px] w-[206px] justify-evenly">
            {/* RANDOM */}
            <button className="mr-[5%]" onClick={handleNextSong}>
              <Image src={random} alt="alt" className="relative top-3 text-[18px]" />
            </button>
            {/* ANTERIOR */}
            <button onClick={handlePreviousSong}>
              <Image src={ant} alt="alt" className="relative top-3 text-[18px]" />
            </button>
            {/* PLAY / STOP */}
            <button
              className="relative bottom-2 h-[60px] w-[60px] rounded-full border-[2px] border-orange-500 bg-[#FFF0E6]"
              onClick={handlePlayPause}
              style={{ boxShadow: '0px -10px 10px 0px rgba(0,0,0,0.2)' }}
            >
              {isPlaying ? (
                <div className="flex items-center justify-center">
                  <TbPlayerPauseFilled />
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <TbPlayerPlayFilled />
                </div>
              )}
            </button>
            {/* SIGUIENTE */}
            <button onClick={handleNextSong}>
              <Image src={next} alt="alt" className="relative top-3 text-[18px]" />
            </button>
            {/* REPETIR */}
            <button className="ml-[5%]">
              <Image src={repet} alt="alt" className="relative top-3  text-[18px]" />
            </button>
          </div>
          {/* CONTENEDOR IMAGEN | RANGO REPR | RANGO VOL */}
          <div className="relative bottom-2 w-[100%]">
            <div className="ml-10 flex items-center justify-center gap-3">
              <div className="ml-[-10px] mt-[-15px] flex h-[60px] w-[120px]">
                <Image className="h-full w-full object-cover" src={img} alt="img" />
              </div>
              <div className="jusify-center ml-[1%] mt-[-7px] flex text-sm font-semibold text-zinc-700">
                <span className="">{formatTime(currentTime)}</span>
              </div>
              <div className="mt-[-7px] flex w-full">
                <input
                  className="h-1 w-full cursor-pointer appearance-none overflow-hidden rounded-lg bg-gray-300 outline outline-1 outline-gray-400"
                  type="range"
                  min="0"
                  step="0.1"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                />
              </div>
              <div className="jusify-center ml-[1%] mt-[-7px] flex text-sm font-semibold text-zinc-700">
                <span>{formatTime(duration)}</span>
              </div>
              <div className="mt-[-7px] flex w-[25%]">
                <input
                  className="h-1 w-[70%] cursor-pointer appearance-none overflow-hidden rounded-lg bg-gray-300 outline outline-1 outline-gray-400"
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
          <div className="text-center text-sm font-medium text-black">
            <p className="relative bottom-6 flex">{songs[currentSongIndex].title}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default ReproductorResponsive;
