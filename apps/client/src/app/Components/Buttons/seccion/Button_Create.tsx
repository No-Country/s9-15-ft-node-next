import React, { ReactNode } from 'react';

type ButtonInicioProps = {
  children: ReactNode;
};

export function ButtonCreate({ children }: ButtonInicioProps) {
  return (
    <button className='w-[150px] h-[52px] p-4 bg-orange-500 hover:bg-orange-400 justify-center items-center text-black text-[16px] font-semibold gap-2.5 inline-flex'>
      {children}
    </button>
  );
}
