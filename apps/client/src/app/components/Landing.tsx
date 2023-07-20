/* eslint-disable prettier/prettier */
import Image from 'next/image';
import Link from 'next/link';

import Audifonos from '@/app/assets/landingpage/audifonos.png';
import Mujer from '@/app/assets/landingpage/mujer.png';
import ola from '@/app/assets/landingpage/ola.png';
import perrito from '@/app/assets/landingpage/p.jpg';
import { ButtonDos } from '@/app/components/desk/Buttons/landing/Button_dos';
import { ButtonUno } from '@/app/components/desk/Buttons/landing/Button_uno';
import Header from '@/app/components/header/Header';

import Footer from './footer/footer';
import { ButtonCuatro } from './mobile/buttons/Button_cuatro';
import { ButtonTres } from './mobile/buttons/Button_tres';
export default function Landing() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center ">
        <section className="md:gab-10 md:width-[100%] mt-10 flex ">
          <section className="md:flex md:flex-col md:justify-evenly">
            <h2 className=" pr-5 pt-10 text-end text-[20px] font-medium leading-[22.4px] text-orange-500 md:w-[595px] md:text-center md:text-[42px] md:font-bold md:leading-[47.04px]">
              Explora, compra y descubre la música de talentosos artistas de todo el mundo.
            </h2>
            <div className="hidden md:flex md:w-full md:justify-evenly md:pb-36">
              <ButtonUno>CONOCE MÁS</ButtonUno>
              <Link href={`/login`}>
                <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
              </Link>
            </div>
          </section>
          <div className=" md:relative md:z-10 md:h-[765.35px] md:w-[680.32px]">
            <Image src={Audifonos} alt="audifonos" className="" />
          </div>
        </section>
      </div>
      <section className="relative z-10 flex flex-col items-center justify-center gap-5 pt-10 mb-10 ">
        <ButtonTres>CONOCE MÁS</ButtonTres>
        <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
      </section>
      {/* segunda */}
      <section className="flex flex-col items-center mb-10 justify-evenly">
        <h3 className="z-10 hidden  w-[851px] text-left text-[38px] font-medium leading-loose text-orange-500 md:block md:text-center md:font-bold ">
          Una plataforma 100% gratis para amantes de la música que busca apoyar al nuevo talento.
        </h3>

        <section className="md:flex">
          <div className="relative z-10 flex items-center mt-5 ">
            <div className="h-[186px] w-[214px] md:h-[749px] md:w-[864px]">
              <Image
                className="mt-16 h-[200px] w-[800px] md:mt-12 md:h-[800px] md:w-[864px] "
                src={Mujer}
                alt="Mujer"
              />
            </div>
            <div className="h-[132px] w-[155px] md:w-4">
              <h3 className=" mt-14 px-2 text-left text-[20px] font-medium leading-[22.4px] text-orange-500 md:hidden md:font-bold">
                Una plataforma 100% gratis para amantes de la música que busca apoyar al nuevo
                talento.
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-20 md:mt-2 md:flex md:flex-col md:justify-evenly">
            <div className="z-10 px-7 md:relative md:h-[165px] md:w-[512px]">
              <h4 className="text-[20px] font-medium leading-loose text-orange-500 md:absolute md:left-0 md:top-0 md:w-[490.42px] md:text-[30px] md:font-medium">
                SoundWave Marketplace
              </h4>
              <p className="left-0 text-[16px] font-normal leading-[17px] text-zinc-700 md:absolute md:top-[45px] md:mt-5 md:w-[512px] md:text-[21px] md:font-medium md:leading-[30px] ">
                Explora un amplio catálogo de músicos talentosos y descubre nuevo talento. Además,
                al adquirir sus obras musicales, apoyas directamente al artista, ya que el 100% de
                la venta se destina directamente a ellos.
              </p>
            </div>
            <div className=" relative z-10 px-7 md:h-[165px] md:w-[512px]">
              <h4 className="left-0  top-0 text-[20px] font-medium leading-loose text-orange-500 md:absolute md:w-[490.42px] md:text-[30px] md:font-medium">
                SoundWave Social
              </h4>
              <p className="left-0 font-normal leading-[17px] text-zinc-700 md:absolute md:top-[45px] md:mt-5 md:w-[512px] md:text-[21px] md:font-medium md:leading-[30px]">
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
        <div>
          <div className="flex items-center justify-center gap-2 px-5 md:w-[506px]  md:flex-col">
            <span className="px-3 text-end text-[20px] font-normal leading-[20px] text-gray-500 md:text-left md:text-[32px] md:leading-[48px]">
              Tú decides el valor de tu música y lo mejor de todo es que recibirás el 100% de las
              ganancias.
              <br />
              <br />
            </span>
            <Image className="h-[178px] w-[156px] md:hidden" src={perrito} alt="perrito" />
            <span className="hidden px-3 text-[32px] font-[600px] leading-[20px] text-black md:block md:font-bold md:leading-[48px]">
              ¡Sí, lo has leído bien, el 100% de cada venta es para ti!
            </span>
          </div>
        </div>
        <Image className="hidden h-[410px] w-[559px] md:block" src={perrito} alt="perrito" />
      </section>
      <div className="flex items-center justify-center px-10 pt-10 text-center text-[20px] font-semibold text-orange-500 md:hidden">
        ¡Sí, lo has leído bien, el 100% de cada venta es para ti!
      </div>
      <div className="flex items-center justify-center mb-20 ">
        <Link href={`/login`}>
          <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
      </div>

      {/* curta */}
      <div className=" mt-10 bg-yellow-50 md:flex md:h-[740px] md:flex-col md:items-center md:justify-center">
        <section className="flex items-center gap-20 justify-evenly">
          <Image className="hidden h-[410px] w-[559px] md:block" src={perrito} alt="perrito" />
          <div>
            <div className="flex flex-col  items-start px-7 pt-10 text-[20px] md:w-[643px] md:justify-evenly md:gap-2 md:px-5">
              <span className="text-[20px]  font-bold leading-10 text-orange-500 md:text-[32px]">
                SoundWave Marketplace
                <br />
              </span>
              <span className="text-[20px] font-normal leading-[17.92px] text-zinc-700 md:text-[26px] md:leading-[42px]">
                Comparte tu talento con el mundo y obtén el 100% de las ganancias sin cargos ocultos
                ni comisiones abusivas. Valora tu música y benefíciate directamente de tu esfuerzo.
              </span>
              <div className="pt-20">
                <Link href={`/login`}>
                  <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className=" md:flex md:h-[740px] md:items-center md:justify-evenly">
        <div className="flex flex-col ms:justify-evenly md:gap-2">
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
          <div className="pt-10">
            <Link href={`/login`}>
              <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
            </Link>
          </div>
        </div>
        <Image className="hidden h-[410px] w-[559px] md:block" src={perrito} alt="perrito" />
      </section>

      <div className=" mt-10 bg-yellow-50 md:flex md:h-[740px] md:flex-col md:items-center md:justify-center">
        <section className="flex items-center gap-20 justify-evenly">
          <Image className="hidden h-[410px] w-[559px] md:block" src={perrito} alt="perrito" />
          <div>
            <div className="flex flex-col  items-start px-10 pt-10 text-[20px] md:w-[643px] md:justify-evenly md:gap-2">
              <span className="text-[20px]  font-bold leading-10 text-orange-500 md:text-[32px]">
                SoundWave Connect
                <br />
              </span>
              <span className="text-[20px] font-normal leading-[17.92px] text-zinc-700 md:text-[26px] md:leading-[42px]">
                Conéctate y colabora con otros músicos independientes para crear una comunidad
                sólida y apoyarnos mutuamente en este emocionante viaje musical.
              </span>
              <div className="pt-20 text-start">
                <Link href={`/login`}>
                  <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="flex h-[280px] flex-col items-center justify-evenly gap-10 bg-white pt-8 md:h-[809px] md:bg-gray-200 ">
        <h3 className=" mt-10 px-5 text-center text-[20px] font-semibold text-zinc-700 md:w-[755px] md:text-[38px]">
          Únete de forma gratuita a SoundWave, la comunidad que te llevará a vivir la experiencia de
          ser un músico exitoso.
        </h3>
        <div className="text-center ">
          <Link href={`/login`}>
            <ButtonDos>¡ÚNETE AHORA!</ButtonDos>
          </Link>
        </div>
        <div className="mb-12">
          <ButtonCuatro>¡ÚNETE AHORA!</ButtonCuatro>
        </div>
      </section>
      <div className="hidden md:flex">
        <Footer />
      </div>
    </div>
  );
}
