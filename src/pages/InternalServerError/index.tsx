import GuideInfo from '@/components/GuideInfo';

function InternalServerError() {
  return (
    <GuideInfo
      title={'지금은 연결할 수 없습니다.\n잠시 후 다시 시도해 주세요.'}
      buttonName="이전 페이지"
      buttonEventType="prev"
      isMaintenance={false}
      icon="internal server error"
    />
  );
}

export default InternalServerError;
