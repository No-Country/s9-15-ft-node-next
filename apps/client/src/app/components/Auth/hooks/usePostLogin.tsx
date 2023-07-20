interface LoginData {
  email: string;
  password: string;
}

interface PostLoginResult {
  ok: boolean;
  errorMessage?: string;
}

const usePostLogin =
  (postRoute: string) =>
  async (data: LoginData): Promise<PostLoginResult> => {
    let response: Response | null = null;

    try {
      response = await fetch(postRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('No hay un ok');
      }

      console.log('[LOGIN SUCCESS]');
      return { ok: true };
    } catch (error) {
      const errorMessage = response != null ? await response.text() : 'No hay mensaje';
      console.error('El error de fetch operacion es:', error);
      console.error('El mensaje de server es:', errorMessage);
      return { ok: false, errorMessage };
    }
  };

export default usePostLogin;
