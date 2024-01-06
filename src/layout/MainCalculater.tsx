import React from 'react';
import '../style/layout.css';

function MainCalculater() {
  return (
    <div className="wrap">
      <main>
        <aside className="border-box bookmark-container">
          <div className="bookmark">
            <div className="scroll-y">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <button
            type="button"
            className="toggle-button toggle-button-horizontal"
          ></button>
        </aside>
        <section>
          <div className="border-box history-container">
            <div className="scroll-y">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quis exercitationem
                quia laudantium magnam autem, cupiditate voluptates sequi perferendis, praesentium
                facilis aliquid. Pariatur ipsum iusto at consequatur inventore! Lorem ipsum dolor
                amet consectetur adipisicing elit. Repellat earum deleniti amet praesentium culpa
                necessitatibus cumque voluptatibus consequatur expedita ex natus quas est at
                officiis officia suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                earum deleniti amet praesentium culpa obcaecati necessitatibus cumque voluptatibus
                expedita ex natus quas est at placeat, in officiis officia suscipit. Lorem ipsum
                amet consectetur adipisicing elit. Repellat earum deleniti amet praesentium culpa
                necessitatibus cumque voluptatibus consequatur expedita ex natus quas est at
                officiis officia suscipit.
              </p>
              {/* 스크롤 확인용 */}
            </div>
            <button
              type="button"
              className="toggle-button toggle-button-vertical"
            ></button>
          </div>
          <div className="border-box calculate-container"></div>
        </section>
      </main>
    </div>
  );
}

export default MainCalculater;
