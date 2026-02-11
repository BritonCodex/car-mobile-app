import {useState} from 'react';
import {ISignUpProps} from './signupProps';

export const useSignup = (): ISignUpProps => {
  const [isSecure, setIsSecure] = useState(false);
  return {
    isSecure,
    setIsSecure,
  };
};
