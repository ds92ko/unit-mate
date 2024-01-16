import { IconName, IconSet } from './constants';

interface IconProps {
  name: IconName;
  size: number;
  color: string;
}

function Icon({ name, size, color }: IconProps) {
  const { d, fillRule, clipRule } = IconSet[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        fillRule={fillRule}
        clipRule={clipRule}
        d={d}
        fill={color}
      />
    </svg>
  );
}

export default Icon;
