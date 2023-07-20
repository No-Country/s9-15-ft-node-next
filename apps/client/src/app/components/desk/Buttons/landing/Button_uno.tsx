import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonUno({ children }: ButtonInicioProps) {
  return (
    <button className="hidden border-[2px] border-orange-500 hover:bg-orange-50 sm:p-[16px] md:block  md:h-[56px] md:w-[141px] md:p-[16px] ">
      {children}
    </button>
  );
}
