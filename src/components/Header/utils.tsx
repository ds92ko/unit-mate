import styles from './utlis.module.css';

const Utils = () => {
  return (
    <ul className={styles.utils}>
        <li>
          <i>
          <svg width="49" height="46" viewBox="0 0 49 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20.6905" cy="15.7774" r="5.88871" stroke="#121212" stroke-width="4"/>
            <mask id="path-2-inside-1_48_443" fill="white">
            <rect x="27.541" y="8.0686" width="25.2439" height="28.3994" rx="2" transform="rotate(45 27.541 8.0686)"/>
            </mask>
            <rect x="27.541" y="8.0686" width="25.2439" height="28.3994" rx="2" transform="rotate(45 27.541 8.0686)" fill="white" stroke="#121212" stroke-width="8" mask="url(#path-2-inside-1_48_443)"/>
            <path d="M26.5428 29.0309L40.2572 28.2242L25.3097 43.1717L12.0231 29.885L26.5428 29.0309Z" fill="#121212" stroke="#121212" stroke-width="4"/>
            <path d="M48.3007 34.7103C48.3007 36.4531 46.888 37.8658 45.1452 37.8658C43.4025 37.8658 41.9897 36.4531 41.9897 34.7103C41.9897 33.5158 43.4722 31.3645 44.4049 30.1291C44.7808 29.6314 45.5097 29.6314 45.8855 30.1291C46.8182 31.3645 48.3007 33.5158 48.3007 34.7103Z" fill="#121212"/>
          </svg>
          </i>
        </li>
        <li>
          <i>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_48_420" fill="white">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 36V0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"/>
              </mask>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 36V0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z" fill="#121212"/>
              <path d="M18 36V40H22V36H18ZM18 0H22V-4H18V0ZM22 36V0H14V36H22ZM4 18C4 10.268 10.268 4 18 4V-4C5.84974 -4 -4 5.84974 -4 18H4ZM18 32C10.268 32 4 25.732 4 18H-4C-4 30.1503 5.84974 40 18 40V32Z" fill="#121212" mask="url(#path-1-inside-1_48_420)"/>
              <circle cx="18" cy="18" r="16" stroke="#121212" stroke-width="4"/>
            </svg>  
          </i>
        </li>
    </ul>
  )
};
export default Utils;