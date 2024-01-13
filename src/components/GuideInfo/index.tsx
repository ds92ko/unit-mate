import { useNavigate } from 'react-router-dom';
import {
  guideInfo,
  guideInfoButton,
  guideInfoDescription,
  guideInfoIcon,
  guideInfoTitle
} from './index.css';
import { GuideInfoType } from './type';

function GuideInfo({
  title,
  description,
  buttonName,
  navigateType,
  isMaintenance,
  icon
}: GuideInfoType) {
  const navigate = useNavigate();

  const onChangeNavigate = (eventType: string) => {
    if (eventType === 'main') {
      navigate('/');
    } else {
      navigate(-1);
    }
  };
  return (
    <div className={`${guideInfo} ${isMaintenance && 'isMaintenance'}`}>
      <div>
        <h1 className={guideInfoTitle}>{title}</h1>
        {description && <p className={guideInfoDescription}>{description}</p>}
        {buttonName && (
          <button
            className={guideInfoButton}
            type="button"
            onClick={() => navigateType && onChangeNavigate(navigateType)}
          >
            {buttonName}
          </button>
        )}
      </div>
      <div className={guideInfoIcon}>{icon}</div>
    </div>
  );
}

export default GuideInfo;
