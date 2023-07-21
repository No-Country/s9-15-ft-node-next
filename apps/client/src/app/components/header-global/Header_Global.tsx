/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import { useState } from 'react';

import bell from '@/app/assets/bell.png';
import dw from '@/app/assets/dw.png';
import opciones from '@/app/assets/Flecha.png';
// import exit from '@/app/assets/exit.png';
import logo from '@/app/assets/landingpage/soundwave.png';
import user from '@/app/assets/user.png';
import MenuOptions from '@/app/components/ModalAlerts/AlertMenuOptions';

export default function HeaderGlobal() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setShowMyModal(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowMyModal(true);
  };

  return (
    <div>
      <header className="w-full border-b-2 border-gray-400">
        <nav>
          <div className="items-center justify-between px-4 pb-1 pt-3 md:flex md:items-center">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Image src={logo} alt="logo" />{' '}
                </div>
                <div className="md:hidden">
                  <button
                    className="rounded-md p-2 text-white outline-none focus:border focus:border-gray-400"
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
                          <div onClick={toggleMenu} className="flex cursor-pointer items-center">
                            <div className="relative h-12 w-12">
                              <Image src={user} alt="user" className="text-white md:block" />
                            </div>
                            <div className="relative h-[18px] ">
                              <Image src={opciones} alt="opciones" />
                            </div>
                          </div>
                          {isOpen && <MenuOptions onClose={handleClose} visible={showMyModal} />}
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
