import { GET } from '@/network';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface Interest {
  id: string;
  interest: string;
  desc: string;
}

interface InterestListData {
  data: Interest[];
}

export const getInterestList = async () => {
  const data = <InterestListData>await GET('/interests');

  return data.data;
};

export const useGetInterestList = () => {
  const result = useSuspenseQuery({ queryFn: getInterestList, queryKey: ['interestList'] });

  return { data: result.data ? result.data : [] };
};
