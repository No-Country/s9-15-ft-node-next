interface LoginData {
  email: string;
  password: string;
}

interface PostLoginResult {
  ok: boolean;
}

const usePostLogin = (postRoute: string): ((data: LoginData) => Promise<PostLoginResult>) => {
  return async (data: LoginData): Promise<PostLoginResult> => {
    console.log('[DATA-LOGIN-LEGACY]', data);
    console.log('[ROUTER-LOGIN-LEGACY]', postRoute);
    try {
      const response = await fetch(postRoute, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('[LOGIN EXITOSO]');
      return { ok: true };
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return { ok: false };
    }
  };
};

export default usePostLogin;
