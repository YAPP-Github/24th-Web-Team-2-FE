import { GET } from '@/network';

export const getInterestList = async () => {
  const data = await GET('/interests');
  return data.data;
};
