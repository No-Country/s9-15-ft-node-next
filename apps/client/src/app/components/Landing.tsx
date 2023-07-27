/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-floating-promises */
import Image from 'next/image';
import Link from 'next/link';

import cuatro from '@/app/assets/Final landing.png';
import ruedamusical from '@/app/assets/landingpage/1.png';
import dos from '@/app/assets/landingpage/2.png';
import Audifonos from '@/app/assets/landingpage/audifonos.png';
import Mujer from '@/app/assets/landingpage/mujer.png';
import ola from '@/app/assets/landingpage/ola.png';
import tres from '@/app/assets/Social.png';
import { ButtonDos } from '@/app/components/desk/Buttons/landing/Button_dos';
import { ButtonUno } from '@/app/components/desk/Buttons/landing/Button_uno';
import Header from '@/app/components/header/Header';

import { ButtonCuatro } from './mobile/buttons/Button_cuatro';
import { ButtonTres } from './mobile/buttons/Button_tres';
export default function Landing() {
  return (
    <div className="w-full max-w-[100%]">
      <Header />
      <div className="flex flex-col items-center justify-center ">
        <section className="md:gab-10 md:width-[100%] mt-10 flex ">
          <section className="md:flex md:flex-col md:justify-evenly">
            <h2 className="px-5 pt-10 text-center text-2xl font-medium leading-7 text-orange-500 md:w-4/5 md:text-4xl md:font-bold md:leading-10">
              Explora, compra y descubre la música de talentosos artistas de todo el mundo.
            </h2>
            <div className="md-justify-between hidden grid-cols-1 md:ml-10 md:grid md:w-full md:grid-cols-2 md:items-center md:justify-center md:pb-36">
              <ButtonUno>CONOCE MÁS</ButtonUno>
              <Link href={`/login`}>
                <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
              </Link>
            </div>
          </section>
          <div className=" md:relative md:z-10 md:h-[765.35px] md:w-[880.32px]">
            <Image src={Mujer} alt="audifonos" className="" />
          </div>
        </section>
      </div>
      <section className="relative z-10 mb-10 flex flex-col items-center justify-center gap-5 pt-10 ">
        <Link href={`/login`}>
          <ButtonTres>CONOCE MÁS</ButtonTres>
        </Link>
        <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
      </section>
      {/* segunda */}
      <div className="hidden xl:block">
        <section className="mb-10 flex flex-col items-center justify-evenly">
          <h3 className="z-10 hidden  w-[851px] text-left text-[38px] font-medium leading-loose text-orange-500 md:block md:text-center md:font-bold ">
            Una plataforma 100% gratis para amantes de la música que busca apoyar al nuevo talento.
          </h3>

          <section className="md:flex">
            <div className="relative z-10 mt-5 flex items-center ">
              <div className="h-[186px] w-[214px] md:h-[749px] md:w-[864px]">
                <Image
                  className="mt-16 h-[200px] w-[740px] md:mt-12 md:h-[800px] md:w-[764px] "
                  src={Audifonos}
                  alt="Mujer"
                />
              </div>
              <div className="h-[132px] w-full md:w-4">
                <h3 className=" mt-14 px-2 text-left text-[20px] font-medium leading-[22.4px] text-orange-500 md:hidden md:font-bold">
                  Una plataforma 100% gratis para amantes de la música que busca apoyar al nuevo
                  talento.
                </h3>
              </div>
            </div>

            <div className="mt-20 flex flex-col gap-5 md:mt-2 md:flex md:flex-col md:justify-evenly">
              <div className="z-10 px-7 md:relative md:h-[165px] md:w-[512px]">
                <h4 className="text-[20px] font-medium leading-loose text-orange-500 md:absolute md:left-0 md:top-0 md:w-[490.42px] md:text-[30px] md:font-medium">
                  SoundWave Marketplace
                </h4>
                <p className="left-0 w-80 text-[16px] font-normal leading-[17px] text-zinc-700 md:absolute md:top-[45px] md:mt-5 md:text-[21px] md:font-medium md:leading-[30px] ">
                  Explora un amplio catálogo de músicos talentosos y descubre nuevo talento. Además,
                  al adquirir sus obras musicales, apoyas directamente al artista, ya que el 100% de
                  la venta se destina directamente a ellos.
                </p>
              </div>
              <div className=" relative z-10 px-7 md:h-[165px] md:w-[512px]">
                <h4 className="left-0  top-0 text-[20px] font-medium leading-loose text-orange-500 md:absolute md:w-[490.42px] md:text-[30px] md:font-medium">
                  SoundWave Social
                </h4>
                <p className="left-0 w-80 font-normal leading-[17px] text-zinc-700 md:absolute md:top-[45px] md:mt-5 md:text-[21px] md:font-medium md:leading-[30px]">
                  Conecta con tu artista favorito y descubre sus próximas presentaciones. <br />{' '}
                  Interactúa con ellos y sé parte de su comunidad de seguidores
                </p>
              </div>
              <div className="relative z-10 flex justify-center md:bottom-20 md:mt-16 ">
                <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
                <Link href={`/login`}>
                  <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
                </Link>
              </div>
            </div>
          </section>
          <div className="absolute md:top-[600px]">
            <Image className="h-[610px] w-[1920px] md:h-[1240px] " src={ola} alt="ola" />
          </div>
        </section>
        {/* tercera */}
        <div className="flex items-center justify-center text-center md:mt-40 md:flex-col">
          <h5 className="hidden  text-center font-medium  text-zinc-700 md:block md:w-[1104px] md:text-[28px] md:font-medium">
            Si eres un creador de música, has llegado al lugar correcto.
          </h5>
          <h2 className="mb-10 mt-5 w-[340px] text-center text-[20px]  font-medium leading-[22px] text-orange-500 md:w-[711px] md:text-[38px] md:leading-[48px]">
            Tu música es la protagonista y tú tienes el control total sobre su valor.
          </h2>
        </div>

        <section className=" md:flex md:h-[740px] md:items-center md:justify-evenly">
          <Image
            className="relative  hidden h-[735.79px] w-[1540.72px] origin-top-left  md:block"
            src={ruedamusical}
            alt="perrito"
          />
          <div>
            <div className="relative bottom-20 right-36 w-[592px]">
              <span className="text-[32px] font-normal leading-[48px] text-black">
                Tú decides el valor de tu música y lo mejor de todo es que recibirás el 100% de las
                ganancias.
                <br />
                <br />
              </span>
              <span className="text-[32px] font-bold leading-[48px] text-black">
                ¡Sí, lo has leído bien, el 100% de cada venta es para ti!
              </span>
              <div className="relative top-16">
                <div className="mb-20 flex items-center justify-center ">
                  <Link href={`/login`}>
                    <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center px-10 pt-10 text-center text-[20px] font-semibold text-orange-500 md:hidden">
          ¡Sí, lo has leído bien, el 100% de cada venta es para ti!
        </div>

        <div className="flex items-center justify-center">
          <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
        </div>

        {/* curta */}
        <div className=" mt-10 bg-yellow-50 md:flex md:h-[740px] md:flex-col md:items-center md:justify-center">
          <section className="flex items-center justify-evenly gap-20 overscroll-contain">
            <div>
              <div className="flex flex-col  items-start px-7 pt-10 text-[20px] md:w-[643px] md:justify-evenly md:gap-2 md:px-5">
                <span className="text-[20px]  font-bold leading-10 text-orange-500 md:text-[32px]">
                  SoundWave Marketplace
                  <br />
                </span>
                <span className="text-[20px] font-normal leading-[17.92px] text-zinc-700 md:text-[26px] md:leading-[42px]">
                  Comparte tu talento con el mundo y obtén el 100% de las ganancias sin cargos
                  ocultos ni comisiones abusivas. Valora tu música y benefíciate directamente de tu
                  esfuerzo.
                </span>
                <div className="pt-20 md:relative md:left-60">
                  <Link href={`/login`}>
                    <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
                  </Link>
                </div>
              </div>
            </div>
            <Image className="hidden h-[731px] w-[85rem]  md:block" src={dos} alt="perrito" />
          </section>
        </div>

        <section className=" md:flex md:h-[740px] md:items-center md:justify-evenly">
          <Image className="hidden h-[711px] w-[636px]  md:block" src={tres} alt="perrito" />
          <div className="ms:justify-evenly flex flex-col md:gap-2">
            <div className="px-5 pt-5 text-end md:w-[575px] md:px-2  md:text-left">
              <span className="text-[20px] font-bold leading-10 text-orange-500 md:text-[32px]">
                SoundWave Social
                <br />
              </span>
              <span className="text-[20px] font-normal leading-[17.92px] text-zinc-700 md:text-[26px] md:leading-[42px]">
                El espacio ideal donde puedes interactuar directamente con tu audiencia, promocionar
                tu música y compartir información sobre tus presentaciones en vivo
              </span>
            </div>
            <div className="pt-10 md:ml-48">
              <Link href={`/login`}>
                <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
              </Link>
            </div>
          </div>
        </section>
        <section className=" ">
          <Image className="h-[1168px] " src={cuatro} alt="footer" />
        </section>
      </div>
    </div>
  );
}
