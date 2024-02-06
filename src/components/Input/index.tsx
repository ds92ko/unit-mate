import { InputContents } from './index.css';

function Input({ ...props }) {
  return (
    <input
      className={InputContents}
      placeholder="계산할 숫자 쉼표 혹 스페이스 구분하여 입력"
      type="text"
      id="insertNumber"
      readOnly
      {...props}
    />
  );
}

export default Input;
