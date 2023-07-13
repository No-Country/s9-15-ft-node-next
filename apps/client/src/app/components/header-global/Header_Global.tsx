/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import bell from '@/app/assets/bell.png';
import dw from '@/app/assets/dw.png';
import exit from '@/app/assets/exit.png';
import logo from '@/app/assets/landingpage/soundwave.png';
import user from '@/app/assets/user.png';
export default function HeaderGlobal() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header className="border-b-2 border-gray-400">
        <nav>
          <div className="items-center justify-between px-4 pt-3 pb-1 md:flex md:items-center">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Image src={logo} alt="logo" />{' '}
                </div>
                <div className="md:hidden">
                  <button
                    className="p-2 text-white rounded-md outline-none focus:border focus:border-gray-400"
                    onClick={() => {
                      setNavbar(!navbar);
                    }}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[48px] w-[48px] text-orange-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[48px] w-[48px] text-orange-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <nav>
                  <div className={`flex ${navbar ? 'md:hidden' : 'md:flex'}`}>
                    {navbar ? (
                      <main className="flex flex-col items-start">
                        <div className="flex h-[110px] w-screen flex-col items-start justify-evenly border-b-2 border-t-2 border-gray-400">
                          <button>Mi musica</button>
                          <button>Mi Perfil SoundWave</button>
                        </div>
                        <div className="flex h-[180px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                          <button>SoundWave Maeketplace</button>
                          <button>SoundWave Social</button>
                          <button>SoundWave Connect</button>
                        </div>
                        <div className="flex h-[180px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                          <button>Mis Datos</button>
                          <button>Notificaciones</button>
                          <button>Metodos de Pago</button>
                        </div>
                        <div className="flex h-[80px] w-screen flex-col items-start justify-evenly border-b-2  border-gray-400">
                          <button>Cerrar Sesión</button>
                        </div>
                      </main>
                    ) : (
                      <div className="flex items-center gap-8 pr-10">
                        <Image src={dw} alt="descarga" className="cursor-pointer md:block" />
                        <Image src={bell} alt="campana" className="cursor-pointer md:block" />
                        <div className="relative">
                          <div onClick={toggleMenu} className="flex items-center cursor-pointer">
                            <Image src={user} alt="user" className="text-white md:block" />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="11"
                              viewBox="0 0 12 11"
                              fill="none"
                            >
                              <g clip-path="url(#clip0_1315_3856)">
                                <path
                                  d="M10.0332 3.66699L5.5332 7.79199L1.0332 3.66699"
                                  stroke="black"
                                  stroke-width="1.08613"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1315_3856">
                                  <rect
                                    width="11"
                                    height="11"
                                    fill="white"
                                    transform="translate(0.0332031)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          {isOpen && (
                            <div className="absolute right-0 z-10 mt-2 h-[160px] w-[284px]  border-2 border-orange-300 bg-white pl-2 pt-2 shadow-lg">
                              <a
                                href="#"
                                className="block px-4 py-3 text-gray-800 hover:bg-gray-200"
                              >
                                <div className="flex items-center gap-2">
                                  <Image className="h-[14px] w-[14px]" src={user} alt="user" />
                                  <button>Mis Datos</button>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-3 text-gray-800 hover:bg-gray-200"
                              >
                                <div className="flex items-end gap-2">
                                  <Image className="h-[14px] w-[14px]" src={bell} alt="bell" />
                                  <button>Notificaciones</button>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="block px-4 py-3 text-gray-800 hover:bg-gray-200"
                              >
                                <div className="flex items-center gap-2">
                                  <Image className="h-[14px] w-[14px]" src={exit} alt="exit" />
                                  <button>Cerrar Sesion</button>
                                </div>
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
