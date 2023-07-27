'use client';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

interface ButtonCuatroProps {
  children: ReactNode;
  onClick?: () => void;
  route?: string;
}

export function ButtonCuatro({ children, onClick, route = 'register' }: ButtonCuatroProps) {
  const router = useRouter();

  async function handleClick() {
    if (onClick !== undefined) {
      onClick();
    } else {
      router.push(route);
    }
  }

  return (
    <button
      className="h-[48px] w-[340px] rounded-lg bg-orange-500 font-bold hover:bg-orange-400 md:hidden"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
