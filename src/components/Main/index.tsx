import Bookmark from '@/components/Bookmark';
import Keybord from '@/components/Keyboard';
import Result from '@/components/Result';
import { mainWrap, sectionWrap } from './index.css';
import { DataType } from './type';

function Main({ data }: DataType) {
  return (
    <div className={mainWrap}>
      <Bookmark />
      <section className={sectionWrap}>
        <Result data={data} />
        <Keybord />
      </section>
    </div>
  );
}

export default Main;
