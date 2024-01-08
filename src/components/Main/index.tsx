import Bookmark from '../Bookmark';
import Keybord from '../Keyboard';
import Result from '../Result';
import { mainWrap, sectionWrap } from './index.css';

function Main() {
  return (
    <main className={mainWrap}>
      <Bookmark />
      <section className={sectionWrap}>
        <Result />
        <Keybord />
      </section>
    </main>
  );
}

export default Main;
