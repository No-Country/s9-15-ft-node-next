/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import logo from '@/app/assets/landingpage/soundwave.png';

import { ButtonCreate } from '../desk/Buttons/seccion/Button_Create';
import { ButtonInicio } from '../desk/Buttons/seccion/button_Inicio';
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <header className="border-b-2 border-gray-400 md:border-none">
        <nav>
          <div className="items-center justify-between px-4 pt-5 md:flex md:items-center">
            <div>
              <div className="flex items-center justify-between ">
                <div className="flex">
                  <Image
                    className="h-[30px] w-[195px]  px-1 md:h-[54px] md:w-[353px]"
                    src={logo}
                    alt="logo"
                  />{' '}
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
                        className="h-[38px] w-[48px] text-orange-500"
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
                        className="h-12 w-12 text-orange-500 "
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
                <nav className="mb-5 flex flex-col space-y-6 px-3 md:mb-0 md:flex md:inline-flex md:flex-row md:items-center md:justify-center md:gap-8">
                  <div>
                    <Link href={`/login`}>
                      <ButtonInicio>Iniciar Sesión</ButtonInicio>
                    </Link>
                  </div>
                  <div>
                    <Link href={`/register`}>
                      <ButtonCreate>Crear Cuenta</ButtonCreate>
                    </Link>
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
