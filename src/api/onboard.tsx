import { GET } from '@/network';

export const getInterestList = async () => {
  const data = await GET('/interests');
  console.log('get interest', data.data);
  return data.data;
};
