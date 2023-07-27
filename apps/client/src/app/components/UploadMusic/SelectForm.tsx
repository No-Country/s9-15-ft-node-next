'use client';

import React, { type ChangeEvent, useState } from 'react';

import FromAlbum from './FormAlbum';
import FromSingle from './FromSingle';

export default function SelectForm() {
  const [selectedForm, setSelectedForm] = useState('formA');

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedForm(e.target.value);
  };

  const renderSelectedForm = () => {
    if (selectedForm === 'formA') {
      return <FromSingle />;
    } else if (selectedForm === 'formB') {
      return <FromAlbum />;
    }

    return null;
  };

  return (
    <>
      <p className="ml-7 mt-7 text-base font-normal leading-tight text-black md:mr-24 md:text-center">
        Elige el tipo producto que quieres vender{' '}
      </p>
      <div className="ml-10 mt-5 flex md:mr-40 md:flex md:flex-grow md:justify-center md:gap-5">
        <div className="mr-4 flex items-center">
          <input
            id="single"
            type="radio"
            name="inline-radio-group"
            className="h-4 w-4 border-gray-300 bg-gray-100 text-zinc-700"
            value="formA"
            checked={selectedForm === 'formA'}
            onChange={handleFormChange}
            defaultChecked
          />
          <label htmlFor="single" className="ml-2 text-sm font-medium text-gray-900">
            Single
          </label>
        </div>
        <div className="mr-4 flex items-center">
          <input
            id="inline-2-radio"
            type="radio"
            name="inline-radio-group"
            value="formB"
            checked={selectedForm === 'formB'}
            onChange={handleFormChange}
            className="border-gray-30 h-4 w-4 bg-gray-100 text-gray-700 "
          />
          <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900">
            Álbum
          </label>
        </div>
      </div>
      {renderSelectedForm()}
    </>
  );
}
