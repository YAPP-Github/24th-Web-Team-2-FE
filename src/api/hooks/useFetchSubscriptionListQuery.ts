import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

export interface SubscriptionListType {
  name: string;
  isPublished: boolean;
  address: string;
  thumbnailImage: string;
}

type Response = { subscription: SubscriptionListType[] };

export const fetchSubscriptionList = () => {
  const data = axiosInstance.get('/inbox/subscriptions-random-list');
  return data;
};

export const useFetchSubscriptionListQuery = () => {
  return useQuery<AxiosResponse<Response>, AxiosError, Response>({
    queryKey: ['subscriptions-random-list'],
    queryFn: () => fetchSubscriptionList(),
    select: ({ data }) => data,
  });
};
