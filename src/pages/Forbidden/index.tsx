import GuideInfo from '@/components/GuideInfo';

function Forbidden() {
  return (
    <GuideInfo
      title="접근 권한이 없는 페이지입니다."
      description={'입력한 페이지에 대한 접근 권한이 없습니다.\n다시 한 번 확인해 주세요.'}
      buttonName="이전 페이지"
      navigateType="prev"
      isMaintenance={false}
      icon="forbidden"
    />
  );
}

export default Forbidden;
