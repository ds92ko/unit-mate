import Bookmark from '@/components/Bookmark';
import Keyboard from '@/components/Keyboard';
import Result from '@/components/Result';
import { mainWrap, sectionWrap } from './index.css';
import { useToggleStore } from '@/stores/toggleStore';

function Main() {
  const { toggleState } = useToggleStore();
  return (
    <div className={mainWrap}>
      <Bookmark />
      <section className={sectionWrap}>
        <Result />
        {!toggleState.result && <Keyboard />}
      </section>
    </div>
  );
}

export default Main;
