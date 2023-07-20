'use client';

import { useState, useEffect } from 'react';
import CardAlbum from './CardAlbum';
import { ButtonCuatro } from '../mobile/buttons/Button_cuatro';

export default function Albumes() {
  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth < 640);
      setShowAll(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };
  // Número de registros por página
  const pageSize = 5;
  const totalItems = 43;
  // Cálculo del número total de páginas
  const totalPages = Math.ceil(totalItems / pageSize);

  const maxVisiblePages = 5;

  // Función para renderizar los componentes CardArtist correspondientes a la página actual
  const renderCardAlbumes = () => {
    // Cálculo del índice de inicio y fin de los registros de la página actual
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    const cardAlbumes = [];

    for (let i = startIndex; i < endIndex; i++) {
      cardAlbumes.push(<CardAlbum key={i} index={i} />);
    }
    return cardAlbumes;
  };

  const generatePageNumbers = () => {
    let startPage: number;
    let endPage: number;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + Math.floor(maxVisiblePages / 2) >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxVisiblePages / 2);
        endPage = currentPage + Math.ceil(maxVisiblePages / 2) - 1;
      }
    }

    return Array.from({ length: endPage - startPage + 1 }).map((_, index) => startPage + index);
  };

  // Comprobación de si existe una página anterior o siguiente
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  // Función para manejar el evento de hacer clic en el botón de página anterior
  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para manejar el evento de hacer clic en el botón de página siguiente
  const handleNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  return (
    <div className="flex-grow mt-5 mb-10 ml-5 overflow-auto">
      <div className="flex py-5 pl-[5px] md:pl-[8px]">
        <div className="text-xl font-semibold leading-normal text-zinc-700 lg:text-[32px]">
          Lo nuevo en álbums
        </div>
      </div>
      {/* Renderización de los componentes CardArtist correspondientes a la página actual */}
      <div className="h-[282px] w-[370px] overflow-x-scroll whitespace-nowrap md:h-[359px] md:w-full md:overflow-x-auto md:whitespace-normal">
        {renderCardAlbumes()}
      </div>
      {showAll ? (
        <div id="Paginador" className="flex items-center justify-center pt-8">
          <div className="inline-flex gap-2 bg-white">
            {/* Botón de página anterior */}
            <div
              id="anterior"
              className={`flex h-8 w-8 cursor-pointer items-center justify-center gap-2.5 border ${
                hasPreviousPage ? 'border-orange-500 p-[5px]' : 'border-neutral-400'
              } ${hasPreviousPage ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={handlePreviousPage}
            >
              <div className="text-base font-semibold leading-none text-black uppercase">&lt;</div>
            </div>
            {/* Renderización de los números de página */}
            {generatePageNumbers().map((pageNumber) => (
              <div
                key={pageNumber}
                className={`flex h-8 w-8 cursor-pointer items-center justify-center gap-2.5 border ${
                  currentPage === pageNumber
                    ? 'border-orange-600 bg-orange-300'
                    : 'border-orange-500 p-[5px]'
                }`}
                onClick={() => {
                  setCurrentPage(pageNumber);
                }}
              >
                <div className="text-base font-semibold leading-none text-black uppercase">
                  {pageNumber}
                </div>
              </div>
            ))}
            {/* Botón de página siguiente */}
            <div
              className={`flex h-8 w-8 cursor-pointer items-center justify-center gap-2.5 border ${
                hasNextPage ? 'border-orange-500 p-[5px]' : 'border-neutral-400'
              } ${hasNextPage ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={handleNextPage}
            >
              <div className="text-base font-semibold leading-none text-black uppercase">&gt;</div>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handleShowMore} className="flex justify-center mt-4">
          <ButtonCuatro>DESCUBRE MÁS ARTISTAS</ButtonCuatro>
        </div>
      )}
    </div>
  );
}
