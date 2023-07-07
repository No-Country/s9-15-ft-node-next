import Image from 'next/image';

import logo from '@/app/assets/landingpage/soundwave.png';

import { ButtonCreate } from '../Buttons/seccion/Button_Create';
import { ButtonInicio } from '../Buttons/seccion/button_Inicio';
export default function Header() {
  return (
    <div className="col-span-10 row-span-1">
      <header className="flex items-center justify-between px-5 py-5">
        <Image src={logo} alt="Logo" width={353} height={54} priority />
        <nav className="flex gap-5">
          <ButtonInicio>Iniciar Sesión</ButtonInicio>
          <ButtonCreate>Crear cuenta</ButtonCreate>
        </nav>
      </header>
    </div>
  );
}
