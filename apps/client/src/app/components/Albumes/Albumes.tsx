'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

import Loader from '../Loader/Loader';
import type { Album } from './CardAlbum';
import CardAlbum from './CardAlbum';

export default function Albumes() {
  // Estado para almacenar la página actual
  const [albums, setAlbums] = useState<Album[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPaginator, setShowPaginator] = useState(false);
  const [showMyModal, setShowMyModal] = useState(true);

  useEffect(() => {
    const fetchAlbums = async (): Promise<void> => {
      try {
        const response = await axios.get<Album[]>('http://localhost:4000/albums');
        setAlbums(response.data);
        setShowMyModal(false);
      } catch (error) {
        console.error('Error fetching albums:', error);
        setShowMyModal(false);
      }
    };

    const fetchData = () => {
      fetchAlbums().catch((error) => {
        // Manejar el error aquí si es necesario
        console.error('Error in fetchData:', error);
        setShowMyModal(false);
      });
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setShowPaginator(true);
  };
  // Número de registros por página
  const pageSize = 5;
  const totalItems = Array.isArray(albums) ? albums.length : 0;
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
      cardAlbumes.push(<CardAlbum key={i} album={albums[i]} />);
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
    <div className="mb-10 mt-5 flex-grow overflow-auto">
      <div className="flex py-5 pl-5 md:pl-7">
        <div className="text-xl font-semibold leading-normal text-zinc-700 lg:text-[32px]">
          Lo nuevo en álbums{' '}
        </div>
      </div>
      <Loader visible={showMyModal} />
      {/* Renderización de los componentes CardArtist correspondientes a la página actual */}
      <div className="h-[282px] w-[389px] overflow-x-scroll whitespace-nowrap pl-4 md:h-[359px] md:w-full md:overflow-x-auto md:whitespace-normal">
        {renderCardAlbumes()}
      </div>
      {!showPaginator && (
        <div className="mt-4 flex justify-center">
          <button
            className="h-[48px] w-[340px] rounded-lg bg-orange-500 font-bold hover:bg-orange-400"
            onClick={handleShowMore}
          >
            DESCUBRE MÁS ARTISTAS
          </button>
        </div>
      )}
      {showPaginator && (
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
              <div className="text-base font-semibold uppercase leading-none text-black">&lt;</div>
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
                <div className="text-base font-semibold uppercase leading-none text-black">
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
              <div className="text-base font-semibold uppercase leading-none text-black">&gt;</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
