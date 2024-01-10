export interface GuideInfoType {
  title: string;
  description?: string;
  buttonName?: string;
  buttonEventType?: 'main' | 'prev';
  isMaintenance: boolean;
  icon: string; // 임시 type값
}
