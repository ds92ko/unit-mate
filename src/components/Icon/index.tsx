import { IconName, IconSet } from './constants';

interface IconProps {
  name: IconName;
  width: number;
  height: number;
}

function Icon({ name, width, height }: IconProps) {
  const { paths, viewBox } = IconSet[name];
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map(path => (
        <path
          key={path.id}
          d={path.d}
          fill={path.fill}
          stroke={path.stroke}
          strokeWidth={path.strokeWidth}
        />
      ))}
    </svg>
  );
}
export default Icon;
