import Main from '@/components/Main';
import { useHistoryStore } from '@/stores/historyStore';

function Basic() {
  const { historyData } = useHistoryStore();
  return <Main data={historyData[0].data} />;
}

export default Basic;
