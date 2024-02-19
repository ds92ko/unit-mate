import { useEffect, useRef } from 'react';
import { InputContents } from './index.css';

function Input({ ...props }) {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);
  return (
    <input
      className={InputContents}
      placeholder="계산할 숫자 쉼표 혹은 스페이스로 구분하여 입력"
      type="text"
      id="insertNumber"
      ref={inputElement}
      {...props}
    />
  );
}

export default Input;
