import { useState } from 'react';

interface RegisterData {
  name: string;
  surname: string;
  username: string;
  artist: true;
  email: string;
  password: string;
}

interface PostRegisterResult {
  ok: boolean;
}

const usePostRegister = (postRoute: string) => {
  const [isLoading, setIsLoading] = useState(false);

  const postRegister = async (data: RegisterData): Promise<PostRegisterResult> => {
    setIsLoading(true);

    try {
      const response = await fetch(postRoute, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      setIsLoading(false);
      console.log('[REGISTRO EXITOSO]');
      return { ok: true };
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setIsLoading(false);
      return { ok: false };
    }
  };

  return { isLoading, postRegister };
};

export default usePostRegister;
