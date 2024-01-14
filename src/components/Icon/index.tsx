import React from 'react';
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
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      {paths.map(path => (
        <React.Fragment key={path.id}>
          {path.maskWrap && (
            <mask
              id={path.maskWrap.id}
              fill={path.maskWrap.fill}
            >
              <path
                d={path.maskWrap.d}
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </mask>
          )}

          <path
            d={path.d}
            fill={path.fill}
            stroke={path.stroke}
            strokeWidth={path.strokeWidth}
            fillRule={path.fillRule}
            clipRule={path.clipRule}
            mask={path.mask}
          />
        </React.Fragment>
      ))}
    </svg>
  );
}

export default Icon;
