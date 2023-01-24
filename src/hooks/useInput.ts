import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = () => {
  const [ value, setValue, ] = useState('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return {
    nodeValue: {
      value, onChange,
    },
    setValue,
  };
};
