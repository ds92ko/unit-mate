import { borderBox, scrollY } from '@/styles/layout.css';
import { resultcontainer } from './index.css';
import TogglButton from '../ToggleButton';

function Result() {
  return (
    <div className={[borderBox, resultcontainer].join(' ')}>
      <div className={scrollY}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quis exercitationem
          laudantium magnam autem, cupiditate voluptates sequi perferendis, praesentium facilis
          facilis aliquid. Pariatur ipsum iusto at consequatur inventore! Lorem ipsum dolor
          consectetur adipisicing elit. Repellat earum deleniti amet praesentium culpa
          necessitatibus cumque voluptatibus consequatur expedita ex natus quas est at Lorem ipsum
          dolor sit amet consectetur adipisicing elit. earum deleniti amet amet praesentium culpa
          obcaecati necessitatibus cumque voluptatibus expedita ex natus quas est est at placeat, in
          officiis officia suscipit. Lorem ipsum amet consectetur adipisicing elit. Repellat earum
          deleniti amet praesentium culpa necessitatibus cumque voluptatibus consequatur expedita ex
          natus quas est at officiis officia suscipit.
        </p>
        {/* 스크롤 확인용 */}
      </div>
      <TogglButton direction="vertical" />
    </div>
  );
}

export default Result;
