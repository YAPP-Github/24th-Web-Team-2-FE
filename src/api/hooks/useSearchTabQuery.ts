import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

interface Newsletter {
  name: string;
  companyName: string;
  isAutomated: boolean;
  content: string;
  subscriptionLink: string;
  contentLink: string;
}

export interface SubscriptionList {
  tech: Newsletter[];
  business: Newsletter[];
  health: Newsletter[];
  trend: Newsletter[];
  career: Newsletter[];
  startup: Newsletter[];
}

export const useSearchTabQuery = () => {
  return useQuery<AxiosResponse, AxiosError, SubscriptionList>({
    queryKey: ['searchTab'],
    queryFn: () => axiosInstance.get('/inbox/subscriptions-list'),
    select: ({ data }) => data.subscriptions,
  });
};
