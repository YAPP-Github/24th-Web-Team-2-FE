import { GET } from '@/network';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export interface Interest {
  id: string;
  interest: string;
  desc: string;
}

export const getInterestList = async () => {
  const data = await GET('/interests');

  return data;
};

export const useGetInterestList = () => {
  return useSuspenseQuery<AxiosResponse<Interest[]>, AxiosError<Interest[]>, Interest[]>({
    queryFn: getInterestList,
    queryKey: ['interestList'],
    select: ({ data }) => data,
  });
};
