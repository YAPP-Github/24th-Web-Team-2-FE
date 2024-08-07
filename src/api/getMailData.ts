import { GET } from '@/network';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface MailData {
  domainData: {
    id: 1;
    name: string;
    type: string;
    domain: string;
    profile: string;
    description: string;
    website: string;
  };

  isSubscribed: true;

  domainArticleData: [
    {
      id: string;
      title: string;
      url: string;
      type: string;
      content: string;
      date: string;
      thumbnail: string;
      isRead: true;
      from: {
        domain: string;
        profile: string;
      };
    },
  ];
}

export const getDomainPageData = async (id: string) => {
  const response = await GET(`/domainData/${id}`);

  return response;
};

export const useFetchMailData = (id: string) => {
  const result = useQuery<AxiosResponse<MailData>, AxiosError<MailData>, MailData>({
    queryFn: () => getDomainPageData(id),
    queryKey: ['mail'],
    select: ({ data }) => data,
  });

  return { data: result.data };
};
