import React, { type ReactNode } from 'react';

interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonCreate({ children }: ButtonInicioProps) {
  return (
    <button className="text-[16px] text-black md:mb-7 md:h-[52px] md:w-[150px] md:bg-orange-500 md:text-[18px] md:font-semibold md:hover:bg-orange-400">
      {children}
    </button>
  );
}
