import React from "react";
import "../style/base.css";
import "../style/layout.css";

function MainCalculater() {
    return (
        <div className="wrap">
            <main>
                <aside className="border_box bookmark_container">
                    <div className="bookmark">
                        <div className="scroll_y">
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="toggle_button toggle_button-horizontal"
                    ></button>
                </aside>
                <section>
                    <div className="border_box history_container">
                        <div className="scroll_y">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Eaque quis exercitationem ea
                                quia laudantium magnam autem, cupiditate
                                voluptates sequi perferendis, praesentium omnis
                                facilis aliquid. Pariatur ipsum iusto at
                                consequatur inventore! Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Repellat
                                earum deleniti amet praesentium culpa obcaecati
                                necessitatibus cumque voluptatibus consequatur
                                expedita ex natus quas est at placeat, in
                                officiis officia suscipit. Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Repellat
                                earum deleniti amet praesentium culpa obcaecati
                                necessitatibus cumque voluptatibus consequatur
                                expedita ex natus quas est at placeat, in
                                officiis officia suscipit. Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Repellat
                                earum deleniti amet praesentium culpa obcaecati
                                necessitatibus cumque voluptatibus consequatur
                                expedita ex natus quas est at placeat, in
                                officiis officia suscipit.
                            </p>
                            {/* 스크롤 확인용 */}
                        </div>
                        <button
                            type="button"
                            className="toggle_button toggle_button-vertical"
                        ></button>
                    </div>
                    <div className="border_box calculate_container"></div>
                </section>
            </main>
        </div>
    );
}

export default MainCalculater;
