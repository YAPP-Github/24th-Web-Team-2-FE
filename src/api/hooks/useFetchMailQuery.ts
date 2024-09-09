import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

interface fetchUnreadMailsParams {
  group?: string;
  sender?: string;
  type?: string;
}

export type MailDataType = {
  isRead: boolean;
  mailId: string;
  subject: string;
  date: Date;
  snippet: string;
  from: {
    name: string;
    address: string;
  };
  to: {
    name: string;
    address: string;
  };
  mimeType: string;
  payload: {
    partId: number;
    mimeType: string;
    body: string;
  }[];
};

interface Response {
  mails: MailDataType[];
}

export const fetchUnReadMails = ({ group, sender }: fetchUnreadMailsParams) => {
  const data = axiosInstance.get('/inbox/unread-mails', { params: { group, sender } });
  return data;
};

export const useUnreadQuery = ({ group, sender, type }: fetchUnreadMailsParams) => {
  return useQuery<AxiosResponse<Response>, AxiosError, MailDataType[]>({
    queryKey: ['unreadMail', group, sender, type],
    queryFn: () => fetchUnReadMails({ group, sender }),
    select: ({ data }) => [...data.mails],
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

export const fetchMailById = (mailId: string) => {
  return axiosInstance.get(`/inbox/mails/${mailId}`);
};

export const useMailByIdQuery = (mailId: string) => {
  return useQuery<AxiosResponse<MailDataType>, AxiosError, MailDataType>({
    queryKey: ['mailById', mailId],
    queryFn: () => fetchMailById(mailId),
    select: ({ data }) => data,
  });
};
