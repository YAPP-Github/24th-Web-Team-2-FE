import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

export interface Newsletter {
  name: string;
  companyName: string;
  isAutomated: boolean;
  content: string;
  subscriptionLink: string;
  contentLink: string;
  thumbnailImage: string;
}

export interface SubscriptionList {
  tech: Newsletter[];
  business: Newsletter[];
  health: Newsletter[];
  trend: Newsletter[];
  career: Newsletter[];
  startup: Newsletter[];
}

const fetchSubscribtionList = () => {
  return axiosInstance.get('/inbox/subscriptions-list');
};

export const useSearchTabQuery = () => {
  return useQuery<AxiosResponse, AxiosError, SubscriptionList>({
    queryKey: ['searchTab'],
    queryFn: () => fetchSubscribtionList(),
    select: ({ data }) => data.subscriptions,
  });
};
