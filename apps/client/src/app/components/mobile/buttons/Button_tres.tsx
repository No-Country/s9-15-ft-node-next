import React, { type ReactNode } from 'react';
interface ButtonInicioProps {
  children: ReactNode;
}

export function ButtonTres({ children }: ButtonInicioProps) {
  return (
    <button className="h-[48px] w-[340px] border-[2px] border-orange-500 hover:bg-orange-50 md:hidden">
      {children}
    </button>
  );
}
