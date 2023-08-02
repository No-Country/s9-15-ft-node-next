/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-floating-promises */
import Image from 'next/image';
import Link from 'next/link';

import cuatro from '@/app/assets/Final landing.png';
import cinco from '@/app/assets/footer2.png';
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
    <div className=" w-full max-w-[100%]">
      <Header />
      <div className="flex flex-col items-center justify-center ">
        <section className="md:width-[100%] mt-10 flex ">
          <section className="md:ml- md:flex md:flex-col md:space-y-20 md:pt-20">
            <h2 className="px-2 pt-10 text-end text-xl font-medium leading-6 text-orange-500 md:ml-20 md:w-4/5 md:text-center md:text-4xl md:font-bold md:leading-10">
              Explora, compra y descubre la música de talentosos artistas de todo el mundo.
            </h2>
            <div className="md: hidden md:flex md:justify-center md:gap-20 ">
              <ButtonUno>CONOCE MÁS</ButtonUno>
              <Link href={`/login`}>
                <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
              </Link>
            </div>
          </section>
          <div className=" md:relative md:z-10">
            <Image src={Mujer} alt="audifonos" className="md:h-[800px] md:w-[1500px]" />
          </div>
        </section>
      </div>
      <section className="relative z-10 mb-[-25px] flex flex-col items-center justify-center gap-5 pt-10 ">
        <Link href={`/login`}>
          <ButtonTres>CONOCE MÁS</ButtonTres>
        </Link>
        <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
      </section>
      {/* segunda */}
      <div className=" xl:block">
        <section className="mb-10 flex flex-col items-center justify-evenly">
          <h3 className="z-10 hidden  w-[851px] text-left text-[38px] font-medium leading-loose text-orange-500 md:block md:text-center md:font-bold ">
            Una plataforma 100% gratis para amantes de la música que busca apoyar al nuevo talento.
          </h3>

          <section className="md:flex">
            <div className="relative z-10 mt-5 flex items-center ">
              <div className="h-[186px] w-[214px] md:h-[749px] md:w-[764px]">
                <Image
                  className="mt-16 h-52 w-[388px] md:mt-12 md:h-[800px] md:w-[764px] "
                  src={Audifonos}
                  alt="Mujer"
                />
              </div>
              <div className="h-[132px] w-[155px] md:w-4">
                <h3 className=" mt-20 px-2 text-left text-[20px] font-medium leading-[22.4px] text-orange-500 md:hidden md:font-bold">
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
                <p className="left-0 w-80 font-normal leading-[17px] text-zinc-700 md:absolute md:top-[45px] md:mt-5 md:w-[520px] md:text-[21px] md:font-medium md:leading-[30px] ">
                  Explora un amplio catálogo de músicos talentosos y descubre nuevo talento. Además,
                  al adquirir sus obras musicales, apoyas directamente al artista, ya que el 100% de
                  la venta se destina directamente a ellos.
                </p>
              </div>
              <div className=" relative z-10 px-7 md:h-[165px] md:w-[512px]">
                <h4 className="left-0  top-0 text-[20px] font-medium leading-loose text-orange-500 md:absolute md:w-[490.42px] md:text-[30px] md:font-medium">
                  SoundWave Social
                </h4>
                <p className="left-0 w-80 font-normal leading-[17px] text-zinc-700 md:absolute md:top-[45px] md:mt-5 md:w-[520px] md:text-[21px] md:font-medium md:leading-[30px]">
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
          <div className="absolute md:top-[650px]">
            <Image className="h-[610px] w-[1920px] md:h-[1240px] " src={ola} alt="ola" />
          </div>
        </section>
        {/* tercera */}
        <div className="flex items-center justify-center text-center md:mt-40 md:flex-col">
          <h2 className="mb-10 mt-5 w-[340px] text-center text-[20px]  font-medium leading-[22px] text-orange-500 md:w-[711px] md:text-[38px] md:leading-[48px]">
            Tu música es la protagonista y tú tienes el control total sobre su valor.
          </h2>
        </div>

        <section className=" md:mb-[-200px] md:flex md:h-[740px] md:items-center ">
          <Image className="absolute md:flex md:w-9/12" src={ruedamusical} alt="rueda-musical" />
          <div>
            <div className=" relative left-48 top-10 w-44   md:left-[700px] md:top-[-100px] md:w-[592px]">
              <span className=" font-normal text-black  md:text-[32px] md:leading-[48px]">
                Tú decides el valor de tu música y lo mejor de todo es que recibirás el 100% de las
                ganancias.
              </span>
              <span className="hidden text-[32px] font-bold leading-[48px] text-black md:mt-10 md:flex">
                ¡Sí, lo has leído bien, el 100% de cada venta es para ti!
              </span>
              <div className="relative top-16 ">
                <div className="mb-20 mt-40 flex items-center justify-center md:mt-1 ">
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

        <div className="mt-10 flex items-center justify-center">
          <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
        </div>
        {/* curta */}
        <div className=" bottom-10 mt-10 h-[272px] bg-yellow-50 md:flex md:h-[840px] md:flex-col md:items-center md:justify-center">
          <section className="flex items-center overscroll-contain">
            <div>
              <div className="flex flex-col items-start px-7 pt-10 text-[20px] md:relative md:left-20 md:z-10 md:mt-20 md:w-[643px] md:justify-evenly md:gap-2 md:px-5">
                <span className="text-[20px]  font-medium leading-10 text-orange-500 md:text-[32px]">
                  SoundWave Marketplace
                  <br />
                </span>
                <span className="text-[20px] font-normal leading-[22px] text-zinc-700 md:text-[26px] md:leading-[42px]">
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
            <Image className="hidden  md:mt-80 md:block  md:h-[930px]" src={dos} alt="perrito" />
          </section>
        </div>

        <section className=" md:mt-72 md:flex md:h-[740px] md:items-center ">
          <Image className="hidden h-[900px] md:block" src={tres} alt="perrito" />
          <div className="ms:justify-evenly right-20 flex flex-col md:relative md:z-10 ">
            <div className="mt-10 px-5 pt-5 text-end md:w-[575px] md:px-2  md:text-left">
              <span className=" text-[20px] font-medium leading-10 text-orange-500 md:text-[32px]">
                SoundWave Social
                <br />
              </span>
              <span className="text-[20px] font-normal leading-[22px] text-zinc-700 md:text-[26px] md:leading-[42px]">
                El espacio ideal donde puedes interactuar directamente con tu audiencia, promocionar
                tu música y compartir información sobre tus presentaciones en vivo
              </span>
            </div>
            <div className="pt-20 md:ml-48">
              <Link href={`/login`}>
                <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
              </Link>
            </div>
          </div>
          <div className="h-[300px] bg-yellow-50  md:hidden md:h-[840px] md:flex-col md:items-center md:justify-center">
            <section className="flex items-center overscroll-contain">
              <div>
                <div className="flex flex-col items-start px-7 pt-10 text-[20px] md:relative md:left-20 md:z-10 md:mt-20 md:w-[643px] md:justify-evenly md:gap-2 md:px-5">
                  <div className="inline-flex h-6 w-[95px] items-center justify-center bg-amber-200 px-2 py-1">
                    <div className="text-center text-sm font-medium text-zinc-700">
                      Próximamente
                    </div>
                  </div>
                  <span className="text-[20px]  font-medium leading-10 text-orange-500 md:text-[32px] ">
                    SoundWave Clips
                    <br />
                  </span>
                  <span className="text-[20px] font-normal leading-[22px] text-zinc-700 md:text-[26px] md:leading-[42px]">
                    Es un espacio de videos para que los fanáticos de la música descubran nuevos
                    artistas y bandas, brindando a los músicos independientes una exposición
                    valiosa. Los fans pueden interactuar dejando comentarios, compartiendo videos o
                    disfrutando de eventos en vivo.
                  </span>
                  <div className="pt-20 md:relative md:left-60">
                    <Link href={`/login`}>
                      <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
                    </Link>
                  </div>
                </div>
              </div>
              <Image className="hidden  md:mt-80 md:block  md:h-[930px]" src={dos} alt="perrito" />
            </section>
          </div>
        </section>
        <div className="ml-10 mt-10 w-[311px] text-center text-lg font-semibold text-zinc-700 md:hidden">
          Únete de forma gratuita a SoundWave, la comunidad que te llevará a vivir la experiencia de
          ser un músico exitoso.
        </div>
        <div className="mt-10 flex items-center justify-center">
          <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
        </div>
        <section className="">
          <Image className="hidden md:flex md:h-[1168px]" src={cuatro} alt="footer" />
          <Image className="relative bottom-24 w-full md:hidden" src={cinco} alt="footer" />
        </section>
      </div>
    </div>
  );
}
