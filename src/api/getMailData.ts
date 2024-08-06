import { GET } from '@/network';
import { useSuspenseQuery } from '@tanstack/react-query';

export const getDomainPageData = async (id: string) => {
  const response = await GET(`/domainData/${id}`);

  return response;
};

export const useMailData = (id: string) => {
  const result = useSuspenseQuery({
    queryFn: () => getDomainPageData(id),
    queryKey: ['mail'],
  });

  return { data: result.data };
};
