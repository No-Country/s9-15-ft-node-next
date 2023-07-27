'use client';
import Link from 'next/link';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

import MyModal from '@/app/components/ModalAlerts/AlertArchivoDeAudio';

interface FormState {
  field1: string;
  field2: string;
  field3: string;

  checkbox1: boolean;
  checkbox2: boolean;
}

export default function FromAlbum() {
  const [showMyModal, setShowMyModal] = useState(false);
  const [songInputs, setSongInputs] = useState<string[]>([]);
  const [file, setFile] = useState('')
  const handleClose = () => {
    setShowMyModal(false);
  };

  const handleAddSongInput = () => {
    setSongInputs((prevInputs) => [...prevInputs, '']);
  };

  const initialState: FormState = {
    field1: '',
    field2: '',
    field3: '',

    checkbox1: false,
    checkbox2: false,
  };

  const [form, setForm] = useState<FormState>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setForm((prevFormulario) => ({
      ...prevFormulario,
      [name]: inputValue,
    }));
  };

  const { field1, field2, field3, checkbox1, checkbox2 } = form;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log(form);

  };

  const isFormCompleted = field1 !== '' && field2 !== '' && field3 !== '' && checkbox1 && checkbox2;

  return (
    <>
      {' '}
      <section className=" md:flex md:justify-center">
        <section className="h-auto px-7 md:flex-col md:items-center md:justify-center">
          <form
            className="mt-7 md:mt-[46px] md:w-[340px] md:flex-col md:justify-center md:px-0"
            onSubmit={handleSubmit}
          >
            <div className="relative mb-7 flex md:mb-8">
              <label
                htmlFor="floating_outlined"
                className=" :items-center inline-flex place-items-center justify-center bg-white px-2  text-[16px] text-sm text-black placeholder:text-black md:mb-2 md:text-[16px]"
              >
                Número de canciones
              </label>
              <input
                type="number"
                name="field1"
                id="floating_outlined"
                className="border-1 peer block  w-[124px] appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-center  text-sm text-gray-900 placeholder:text-center focus:border-orange-500 focus:outline-none focus:ring-0 md:w-[105px]"
                placeholder="0 "
              />
            </div>
            <div className="relative mb-4 md:mb-4">
              <input
                type="text"
                name="field1"
                value={form.field1}
                onChange={handleChange}
                id="field2"
                className="border-1 peer block w-full appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 md:w-[340px] "
                placeholder=" "
              />
              <label
                htmlFor="field2"
                className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
              >
                Escribe el nombre álbum
              </label>
            </div>
            <p className="mb-5 mt-7 text-base font-normal leading-tight text-black">Precio</p>
            <div className="relative mb-2 flex flex-row justify-between md:mb-4">
              <div className="relative mb-4 md:mb-4">
                <input
                  type="text"
                  name="field2"
                  value={form.field2}
                  onChange={handleChange}
                  id="field3"
                  className="border-1 peer block w-[105px] appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
                  placeholder=" "
                />
                <label
                  htmlFor="field3"
                  className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
                >
                  Precio
                </label>
              </div>
              <div className="relative mb-4 md:mb-4">
                <input
                  type="text"
                  name="field3"
                  value={form.field3}
                  onChange={handleChange}
                  id="field4"
                  className="border-1 peer block w-[215px] appearance-none rounded border-neutral-400 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-0 "
                  placeholder=" "
                />
                <label
                  htmlFor="field4"
                  className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-sm  text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-gray-900 md:text-[16px]"
                >
                  Elije la moneda
                </label>
              </div>
            </div>

            <p className="mb-5 text-base font-normal text-black ">Cargar foto de portada</p>
            <div className="flex w-full items-center justify-center md:justify-start">
              <button
                className="mb-5 inline-flex h-12 w-[210px] items-center justify-center rounded bg-orange-500 p-4 text-right text-base font-semibold leading-none text-black"
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                Cargar imagen
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3"
                >
                  <path
                    d="M6.33041 13.6607H10.6697C11.2664 13.6607 11.7546 13.1725 11.7546 12.5758V7.15169H13.4794C14.4449 7.15169 14.9331 5.98007 14.2497 5.29663L9.2703 0.317252C9.16994 0.216685 9.05073 0.136898 8.91949 0.0824596C8.78826 0.0280211 8.64757 0 8.50549 0C8.36341 0 8.22273 0.0280211 8.0915 0.0824596C7.96026 0.136898 7.84105 0.216685 7.74069 0.317252L2.76131 5.29663C2.07787 5.98007 2.55519 7.15169 3.52069 7.15169H5.24557V12.5758C5.24557 13.1725 5.73375 13.6607 6.33041 13.6607ZM1.99108 15.8303H15.0091C15.6057 15.8303 16.0939 16.3185 16.0939 16.9152C16.0939 17.5118 15.6057 18 15.0091 18H1.99108C1.39442 18 0.90625 17.5118 0.90625 16.9152C0.90625 16.3185 1.39442 15.8303 1.99108 15.8303Z"
                    fill="black"
                  />
                </svg>
              </button>

              {/* <label
                htmlFor="dropzone-file"
                className="mb-5 inline-flex h-12 w-[210px] items-center justify-center rounded bg-orange-500 p-4"
              >
                <div className="flex flex-row items-center pt-5 pb-6 ml-2 hover:cursor-pointer">
                  <div className="mr-3 text-base font-semibold leading-none text-right text-black">
                    <span className="w-[200px] ">Cargar imagen</span>
                  </div>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.33041 13.6607H10.6697C11.2664 13.6607 11.7546 13.1725 11.7546 12.5758V7.15169H13.4794C14.4449 7.15169 14.9331 5.98007 14.2497 5.29663L9.2703 0.317252C9.16994 0.216685 9.05073 0.136898 8.91949 0.0824596C8.78826 0.0280211 8.64757 0 8.50549 0C8.36341 0 8.22273 0.0280211 8.0915 0.0824596C7.96026 0.136898 7.84105 0.216685 7.74069 0.317252L2.76131 5.29663C2.07787 5.98007 2.55519 7.15169 3.52069 7.15169H5.24557V12.5758C5.24557 13.1725 5.73375 13.6607 6.33041 13.6607ZM1.99108 15.8303H15.0091C15.6057 15.8303 16.0939 16.3185 16.0939 16.9152C16.0939 17.5118 15.6057 18 15.0091 18H1.99108C1.39442 18 0.90625 17.5118 0.90625 16.9152C0.90625 16.3185 1.39442 15.8303 1.99108 15.8303Z"
                      fill="black"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"></p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className=" hidden h-12 w-[210px] items-center justify-center gap-4 rounded bg-orange-500 p-4"
                  name="field4"
                  value={form.field4}
                  onChange={handleChange}
                />
              </label> */}
            </div>

            <p className="mb-5 text-base font-normal text-black ">Cargar archivo de audio</p>
            <div className="flex w-full items-center justify-center md:justify-start ">
              {/* <label
                htmlFor="dropzone-file"
                className="mb-5 inline-flex h-12 w-[210px] items-center justify-center rounded  bg-orange-500 p-4"
              >
                <div className="flex flex-row items-center pt-5 pb-6 ml-2 hover:cursor-pointer">
                  <div className="mr-2 w-[150px] text-right text-base font-semibold leading-none text-black">
                    <span className="font-semibold ">Cargar archivo de audio</span>
                  </div>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.33041 13.6607H10.6697C11.2664 13.6607 11.7546 13.1725 11.7546 12.5758V7.15169H13.4794C14.4449 7.15169 14.9331 5.98007 14.2497 5.29663L9.2703 0.317252C9.16994 0.216685 9.05073 0.136898 8.91949 0.0824596C8.78826 0.0280211 8.64757 0 8.50549 0C8.36341 0 8.22273 0.0280211 8.0915 0.0824596C7.96026 0.136898 7.84105 0.216685 7.74069 0.317252L2.76131 5.29663C2.07787 5.98007 2.55519 7.15169 3.52069 7.15169H5.24557V12.5758C5.24557 13.1725 5.73375 13.6607 6.33041 13.6607ZM1.99108 15.8303H15.0091C15.6057 15.8303 16.0939 16.3185 16.0939 16.9152C16.0939 17.5118 15.6057 18 15.0091 18H1.99108C1.39442 18 0.90625 17.5118 0.90625 16.9152C0.90625 16.3185 1.39442 15.8303 1.99108 15.8303Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="mb-5 hidden h-12 w-[210px] items-center justify-center  gap-4 rounded bg-orange-500 p-4"
                  name="field5"
                  value={form.field5}
                  onChange={handleChange}
                />
              </label> */}
              <button
                className="mb-5 inline-flex h-12 w-[210px] items-center justify-center rounded bg-orange-500 p-4 text-right text-base font-semibold leading-none text-black"
                onClick={() => {
                  setShowMyModal(true);
                }}
              >
                Cargar archivo de audio
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3"
                >
                  <path
                    d="M6.33041 13.6607H10.6697C11.2664 13.6607 11.7546 13.1725 11.7546 12.5758V7.15169H13.4794C14.4449 7.15169 14.9331 5.98007 14.2497 5.29663L9.2703 0.317252C9.16994 0.216685 9.05073 0.136898 8.91949 0.0824596C8.78826 0.0280211 8.64757 0 8.50549 0C8.36341 0 8.22273 0.0280211 8.0915 0.0824596C7.96026 0.136898 7.84105 0.216685 7.74069 0.317252L2.76131 5.29663C2.07787 5.98007 2.55519 7.15169 3.52069 7.15169H5.24557V12.5758C5.24557 13.1725 5.73375 13.6607 6.33041 13.6607ZM1.99108 15.8303H15.0091C15.6057 15.8303 16.0939 16.3185 16.0939 16.9152C16.0939 17.5118 15.6057 18 15.0091 18H1.99108C1.39442 18 0.90625 17.5118 0.90625 16.9152C0.90625 16.3185 1.39442 15.8303 1.99108 15.8303Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <div className="my-5 flex justify-center md:justify-start">
              <button
                type="button"
                className=" inline-flex h-12 w-36  items-center justify-start gap-2.5 text-center  text-lg font-normal leading-10 text-black"
                onClick={handleAddSongInput}
              >
                <BsPlusCircleFill className="text-orange-500" />
                Agregar canción
              </button>
            </div>

            {/* Step 3: Map over the state variable to render the song inputs */}
            {songInputs.map((inputValue, index) => (
              <div key={index} className="relative mb-4 flex md:mb-5">
                <input
                  type="file"
                  name={`field${index}`} // Use a unique name for each song input
                  value={inputValue}
                  onChange={(e) => {
                    const updatedInputs = [...songInputs];
                    updatedInputs[index] = e.target.value;
                    setSongInputs(updatedInputs);
                  }}
                  className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-lg text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  placeholder="Song name"
                />
              </div>
            ))}

            <div className="relative mt-5 h-20 w-[324px]">
              <div className="absolute left-[48px] top-0 w-[276px] text-sm font-normal text-black md:w-96">
                Declaro que estoy consciente de las leyes de derechos de autor en mi país de
                residencia y entiendo que cualquier violación de dichas leyes puede acarrear
                sanciones, incluso penales que podrían llevar a prisión.
              </div>
              <input
                type="checkbox"
                className="border-3 absolute left-0 top-[26px] inline-flex flex-col items-start justify-start"
                name="checkbox1"
                checked={form.checkbox1}
                onChange={handleChange}
              />
            </div>
            <div className=" relative mb-10  mt-10 h-12 w-[324px] md:mt-2">
              <div className="absolute left-[48px] top-0 w-[276px] text-sm font-normal text-black md:w-96">
                Declaro ser el autor intelectual de la obra musical y confirmo que esta obra está
                protegida por los derechos de autor.
              </div>
              <input
                type="checkbox"
                className="border-3 absolute left-0 top-[10px] inline-flex flex-col items-start justify-start"
                name="checkbox2"
                checked={form.checkbox2}
                onChange={handleChange}
              />
            </div>

            <div className=" md:space-x-6">
              <Link href={'/'}>
                <button
                  className="mb-5 mt-5 h-12 w-full gap-2.5 rounded-md border-2 border-orange-500 bg-white p-4 text-[16px] font-semibold uppercase leading-none text-black md:w-[144px] md:rounded-md md:hover:bg-orange-400"
                  type="submit"
                  disabled={!isFormCompleted}
                >
                  Cancelar
                </button>
              </Link>

              <button
                className={`mb-10 h-12 w-full  gap-2.5 rounded-md text-[16px] font-semibold uppercase leading-none md:w-[144px] md:rounded-md  ${isFormCompleted
                  ? 'bg-orange-500 text-black hover:bg-orange-400'
                  : ' bg-zinc-300 text-neutral-400'
                  }`}
                type="submit"
                disabled={!isFormCompleted}
              >
                Aceptar
              </button>
            </div>
          </form>
        </section>
        <MyModal onClose={handleClose} archivo={file} setArchivo={setFile} visible={showMyModal} />
      </section>
    </>
  );
}
