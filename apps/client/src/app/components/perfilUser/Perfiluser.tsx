/* eslint-disable prettier/prettier */
import Image from 'next/image';

// import editar from '@/app/assets/Boton_Editar.png';
import portada from '@/app/assets/landingpage/soundwave.png';
import userBig from '@/app/assets/userBig.png';
export default function Perfiluser() {
  return (
    <div>
      <div className=" h-[208px] w-[100%] bg-green-100 md:h-[352px]">
        <Image className=" w-[100%]" src={portada} alt="portada" />
      </div>
      <div className="flex w-full flex-col items-center md:mt-10 md:h-[110px]  md:flex-row">
        <div className="relative bottom-20">
          <div className="flex w-[300px] flex-col items-center justify-center">
            <Image className="h-[127] w-[127px]" src={userBig} alt="usuario" />
            <h2 className="font-none text-[24px] ">Nombre Usuario</h2>
            <p>genero</p>
          </div>
        </div>
        <div className="bg-black md:mb-2 md:mt-2 md:w-[1px] "></div>
        <div className="relative bottom-10 md:ml-12 md:w-[70%] md:pt-5 ">
          <div className="flex w-[100%] items-center justify-between">
            <p className="text-[18px]">acerca del artista</p>
            <div className="inline-flex h-12 w-[60px] items-center justify-center">
              <div className="w-[60px] text-center text-sm font-normal leading-[48px] text-black">
                Editar
              </div>
            </div>
          </div>
          <p className="text-[21px]">escribe una breve descripcion acerca de ti</p>
        </div>
      </div>
    </div>
  );
}
