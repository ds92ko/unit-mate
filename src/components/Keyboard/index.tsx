import { borderBox } from '@/styles/layout.css';
import { keyboardContainer } from './index.css';

function Keybord() {
  return (
    <div className={[borderBox, keyboardContainer].join(' ')}>
      <ul>
        <li />
      </ul>
    </div>
  );
}

export default Keybord;
