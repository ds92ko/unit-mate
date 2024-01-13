import GuideInfo from '@/components/GuideInfo';

function Maintenance() {
  return (
    <GuideInfo
      title={
        '더 나은 서비스 제공을 위해 점검 중입니다.\n점검시간 동안 서비스 이용이 일시 중단되오니 깊은 양해 부탁드립니다.'
      }
      description={'점검 일시\nYYYY.MM.DD 00:00 ~ MM.DD 00:00'}
      isMaintenance
      icon="maintenance"
    />
  );
}

export default Maintenance;
