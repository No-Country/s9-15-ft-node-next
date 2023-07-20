import { useEffect, useState } from 'react';

const useStringCleaner = (initialString: string | null | undefined): string => {
  const [cleanedString, setCleanedString] = useState('');

  useEffect(() => {
    if (typeof initialString === 'string') {
      const cleaned = initialString.replace(/["{}]|message:/g, '').trim();
      setCleanedString(cleaned);
    }
  }, [initialString]);

  return cleanedString;
};

export default useStringCleaner;
