// icon.tsx
import { iconName, IconSet } from './constants';

interface IconProps {
  icon: iconName;
  width: number;
  height: number;
  // eslint-disable-next-line react/require-default-props
  color?: string;
}

function Icon({ icon, width, height, color }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={IconSet[icon].viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={IconSet[icon].path} />
    </svg>
  );
}
export default Icon;
