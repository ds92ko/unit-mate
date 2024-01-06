import React from 'react';

function Header() {
  const navList = [
    {
      id: 0,
      name: 'Basic',
      path: '/',
    },
    {
      id: 1,
      name: 'Percent',
      path: '/precent',
    },
    {
      id: 2,
      name: 'Viewport',
      path: '/viewport',
    },
    {
      id: 3,
      name: 'REM & EM',
      path: '/remandem',
    },
  ];

  return (
    <header>
      <div className="header-menu">
        <div className="header-logo"> UNITMATE </div>
        <div className="header-nav">
          <nav>
            <ul>
              {navList.map(nav => (
                <li key={nav.id}>{nav.name}</li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-tool">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
