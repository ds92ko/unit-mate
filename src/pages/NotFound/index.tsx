import GuideInfo from '@/components/GuideInfo';

function NotFound() {
  return (
    <GuideInfo
      title="페이지를 찾을 수 없습니다."
      description={
        '잘못된 주소를 입력하셨거나, \n 요청하신 페이지의 주소가 변경/삭제되어 찾을 수 없습니다.'
      }
      buttonName="메인 페이지"
      buttonEventType="main"
      isMaintenance={false}
      icon="404"
    />
  );
}

export default NotFound;
