interface IconProps {
  width: number;
  height: number;
  fillColor: string;
  strokeColor?: string;
}
function Bookmark({ width, height, fillColor }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill={fillColor}
        d="M0 .5A.5.5 0 0 1 .5 0h13a.5.5 0 0 1 .5.5v18.197a.5.5 0 0 1-.872.335l-5.756-6.397a.5.5 0 0 0-.744 0L.872 19.032A.5.5 0 0 1 0 18.697V.5Z"
      />
      <path
        fill="#121212"
        fillRule="evenodd"
        d="M2 2v12.788l3.142-3.49a2.5 2.5 0 0 1 3.716 0L12 14.787V2H2ZM14 .5a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v18.197a.5.5 0 0 0 .872.335l5.756-6.397a.5.5 0 0 1 .744 0l5.756 6.397a.5.5 0 0 0 .872-.335V.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ColorPicker({ width, height, fillColor, strokeColor }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        fill={strokeColor}
        fillRule="evenodd"
        d="M20.69 19.666a3.889 3.889 0 1 0 0-7.777 3.889 3.889 0 0 0 0 7.777Zm0 4a7.889 7.889 0 1 0 0-15.777 7.889 7.889 0 0 0 0 15.777Z"
        clipRule="evenodd"
      />
      <path
        fill={fillColor}
        d="M26.127 9.483a2 2 0 0 1 2.828 0l15.022 15.021a2 2 0 0 1 0 2.829L26.724 44.586a2 2 0 0 1-2.829 0L8.874 29.564a2 2 0 0 1 0-2.828L26.127 9.483Z"
      />
      <path
        fill={strokeColor}
        fillRule="evenodd"
        d="M27.541 13.726 13.116 28.15 25.31 40.343 39.734 25.92 27.541 13.725Zm1.414-4.243a2 2 0 0 0-2.828 0L8.874 26.736a2 2 0 0 0 0 2.828l15.021 15.022a2 2 0 0 0 2.829 0l17.253-17.253a2 2 0 0 0 0-2.828L28.955 9.482Z"
        clipRule="evenodd"
      />
      <path
        fill={strokeColor}
        stroke={strokeColor}
        strokeWidth="4"
        d="M40.257 28.224 25.31 43.172 12.023 29.885l28.234-1.66Z"
      />
      <path
        fill={strokeColor}
        d="M48.3 34.71a3.155 3.155 0 1 1-6.31 0c0-1.194 1.482-3.346 2.415-4.58a.92.92 0 0 1 1.48 0c.933 1.235 2.416 3.386 2.416 4.58Z"
      />
    </svg>
  );
}
function ColorMode({ width, height, fillColor }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <mask
        id="a"
        fill={fillColor}
      >
        <path
          fillRule="evenodd"
          d="M18 36V0C8.059 0 0 8.059 0 18s8.059 18 18 18Z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill={fillColor}
        fillRule="evenodd"
        d="M18 36V0C8.059 0 0 8.059 0 18s8.059 18 18 18Z"
        clipRule="evenodd"
      />
      <path
        fill={fillColor}
        d="M18 36v4h4v-4h-4Zm0-36h4v-4h-4v4Zm4 36V0h-8v36h8ZM4 18c0-7.732 6.268-14 14-14v-8C5.85-4-4 5.85-4 18h8Zm14 14c-7.732 0-14-6.268-14-14h-8c0 12.15 9.85 22 22 22v-8Z"
        mask="url(#a)"
      />
      <path
        fill={fillColor}
        fillRule="evenodd"
        d="M18 32c7.732 0 14-6.268 14-14S25.732 4 18 4 4 10.268 4 18s6.268 14 14 14Zm0 4c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export { Bookmark, ColorPicker, ColorMode };
