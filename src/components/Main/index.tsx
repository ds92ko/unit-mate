import Bookmark from '@/components/Bookmark';
import Keybord from '@/components/Keyboard';
import Result from '@/components/Result';
import { mainWrap, sectionWrap } from './index.css';

function Main() {
  return (
    <div className={mainWrap}>
      <Bookmark />
      <section className={sectionWrap}>
        <Result />
        <Keybord />
      </section>
    </div>
  );
}

export default Main;
