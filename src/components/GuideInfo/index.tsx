import { useNavigate } from 'react-router-dom';
import {
  guideInfo,
  guideInfoButton,
  guideInfoContainer,
  guideInfoDescription,
  guideInfoTitle
} from './index.css';
import { GuideInfoType } from './type';
import { useThemeStore } from '@/stores/themeStore';
import Icon from '@/components//Icon';
import vars from '@/styles/vars.css';

function GuideInfo({
  title,
  description,
  buttonName,
  navigateType,
  isMaintenance,
  icon
}: GuideInfoType) {
  const navigate = useNavigate();
  const { darkMode } = useThemeStore();

  const routePath = navigateType === 'main' ? '/' : '-1';

  return (
    <div className={`${guideInfoContainer} ${darkMode && 'themeDark'}`}>
      <div className={`${guideInfo} ${isMaintenance && 'isMaintenance'}`}>
        <div>
          <h1 className={guideInfoTitle}>{title}</h1>
          {description && <p className={guideInfoDescription}>{description}</p>}
          {buttonName && (
            <button
              className={guideInfoButton}
              type="button"
              onClick={() => navigate(routePath)}
            >
              {buttonName}
            </button>
          )}
        </div>
        <Icon
          size={340}
          name={icon}
          color={darkMode ? vars.color.white : vars.color.black1}
        />
      </div>
    </div>
  );
}

export default GuideInfo;
