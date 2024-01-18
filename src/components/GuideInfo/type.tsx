export interface GuideInfoType {
  title: string;
  description?: string;
  buttonName?: string;
  navigateType?: 'main' | 'prev';
  isMaintenance: boolean;
  icon: string;
}
