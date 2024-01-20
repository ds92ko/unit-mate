import { IconName } from '@/components/Icon/constants';

export interface GuideInfoType {
  title: string;
  description?: string;
  buttonName?: string;
  navigateType?: 'main' | 'prev';
  isMaintenance: boolean;
  icon: IconName;
}
