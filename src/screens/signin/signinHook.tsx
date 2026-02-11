import {useState} from 'react';
import {ISiginInProps} from './signinProps';

export const useSignin = (): ISiginInProps => {
  const [isSecure, setIsSecure] = useState(false);
  return {
    isSecure,
    setIsSecure,
  };
};
