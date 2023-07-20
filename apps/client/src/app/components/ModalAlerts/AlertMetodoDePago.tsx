/* eslint-disable prettier/prettier */
'use client';
import React from 'react';
import { MouseEvent } from 'react';
import PayPal from '@/app/assets/pagos/PayPal.png';
import MercadoPago from '@/app/assets/pagos/MercadoPago.png';
import Image from 'next/image';

interface ModalAlertProps {
  visible: boolean;
  onClose: () => void;
}

export default function AlertMetodoDePago({ visible, onClose }: ModalAlertProps) {
  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    if (id === 'Cancelar') {
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="flex items-center justify-center bg-black bg-opacity-25 modal backdrop-blur-sm">
        <div className="inline-flex h-[278px] w-[264px] flex-col items-center justify-center gap-6 border-2 border-orange-500 bg-white px-6 pb-10 shadow md:h-[211px] md:w-[432px] sm:pb-7 md:pt-10">
            <div className="self-stretch text-lg font-semibold text-center text-zinc-700 sm:text-2xl">
              Elige tu método de pago{' '}
            </div>
            <div className="flex h-[104px] flex-col items-center justify-center gap-2 self-stretch">
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap">
                <div className="mb-3 sm:mb-0 sm:mr-2">
                  <button className="flex h-12 w-[141px] hover:shadow-md items-center justify-center gap-2.5 rounded bg-amber-400">
                    {/* Paypal */}
                    <Image src={PayPal} alt="PayPal" />{' '}
                  </button>
                </div>
                <div>
                  <button className="flex h-12 w-[141px] hover:shadow-md items-center justify-center gap-2.5 rounded border border-violet-950 bg-white">
                    {/* Mercado Pago */}
                    <Image src={MercadoPago} alt="MercadoPago" />{' '}
                  </button>
                </div>
              </div>
              <div className="relative flex justify-center h-12 w-96 hover:font-normal">
                <button
                  id="Cancelar"
                  onClick={handleClose}
                  className="absolute top-0 text-center text-lg font-normal leading-[48px] text-black hover:font-semibold hover:shadow-md w-32 rounded-md"
                >
                  <span className="">Cancelar</span>
                </button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
