import Image from 'next/image';

import banner from '@/app/assets/banner-upload-music.png';
import HeaderGlobal from '@/app/components/header-global/Header_Global';
import Menu from '@/app/components/menu/Menu';
import SelectForm from '@/app/components/UploadMusic/SelectForm';

export default function page() {
  return (
    <>
      <HeaderGlobal />
      <div className="flex">
        <Menu />
        <div className="md:flex-col ">
          <Image
            src={banner}
            alt=""
            width={1300}
            height={400}
            className="hidden md:flex md:h-[214px] md:w-[1920px]"
          />
          <h4 className="ml-7 mt-10 text-2xl font-medium text-orange-500 md:ml-10">
            Publica en Marketplace
          </h4>
          <SelectForm />
          <div className=" mb-10 ml-7 text-[14px]  font-normal leading-normal text-black md:ml-7">
            © 2023 SoundWave | Todos los Derechos Reservados
          </div>
        </div>
      </div>
    </>
  );
}
