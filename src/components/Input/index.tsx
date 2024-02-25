import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { InputContents } from './index.css';

function Input({ ...props }) {
  const [inputValue, setInputValue] = useState<string>('');
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      className={InputContents}
      placeholder="계산할 숫자 쉼표 혹은 스페이스로 구분하여 입력"
      type="text"
      id="insertNumber"
      ref={inputElement}
      value={inputValue}
      onChange={handleChange}
      {...props}
    />
  );
}

export default Input;
