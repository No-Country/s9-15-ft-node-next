/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import axios, { type AxiosResponse } from 'axios';
import { useState } from 'react';

import type { dataFetch } from '../FormRegister';

interface PostRegisterResult {
  ok: boolean;
}

const usePostRegister = (postRoute: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const postRegister = async (data: dataFetch): Promise<PostRegisterResult> => {
    setIsLoading(true);

    try {
      const response: AxiosResponse = await axios.post(postRoute, data);
      const { status } = response;

      setIsLoading(false);
      console.log('[REGISTRO EXITOSO]');
      return { ok: status === 200 };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data ?? 'No hay mensaje';
        console.error('There was a problem with the fetch operation:', error);
        console.error('Mensaje de error del back:', errorMessage);
      } else {
        console.error('There was a problem with the fetch operation:', error);
      }

      setIsLoading(false);
      return { ok: false };
    }
  };

  return { isLoading, postRegister };
};

export default usePostRegister;
