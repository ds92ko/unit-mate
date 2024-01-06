import React from 'react';
import styles from './logo.module.css';
import { Link } from 'react-router-dom';

interface LogoProps {
  colorMode: string;
}

const Logo: React.FC<LogoProps> = ({ colorMode }) => {
  return (
    <Link to="/" className={`${styles.logo} ${colorMode === 'dark' ? styles.dark : styles.light}`}>
      <h1>UNITMATE</h1>
    </Link>
  );
};

export default Logo;
