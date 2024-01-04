import React from "react";
import "../style/base.css";
import  "../style/layout.css";

function Header() {
    const navList = ["Basic", "Percent", "Viewport", "REM & EM"];

    return (
        <header>
            <div className="header_menu">
                <div className="header_logo"> UNITMATE </div>{" "}
                {/* 임시 적용 */}
                <div className="header_nav">
                    <nav>
                        <ul>
                            {navList.map((nav, index) => (
                                <li key={index}>{nav}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="header_tool">
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
