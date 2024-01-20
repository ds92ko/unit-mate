import Bookmark from '@/components/Bookmark';
import Keyboard from '@/components/Keyboard';
import Result from '@/components/Result';
import { mainWrap, sectionWrap } from './index.css';
import { DataType } from './type';
import { useToggleStore } from '@/stores/toggleStore';

function Main({ data }: DataType) {
  const { toggleState } = useToggleStore();
  return (
    <div className={mainWrap}>
      <Bookmark />
      <section className={sectionWrap}>
        <Result data={data} />
        {!toggleState.result && <Keyboard />}
      </section>
    </div>
  );
}

export default Main;
