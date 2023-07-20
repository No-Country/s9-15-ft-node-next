import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonInicio({ children }: ButtonInicioProps) {
  return (
    <button className="text-center text-[16px] font-normal leading-10 text-black md:text-[18px]">
      {children}
    </button>
  );
}
