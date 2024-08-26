import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

interface fetchUnreadMailsParams {
  group?: string;
  sender?: string;
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

export const useUnreadQuery = ({ group, sender }: fetchUnreadMailsParams) => {
  return useQuery<AxiosResponse<Response>, AxiosError, MailDataType[]>({
    queryKey: ['unreadMail', group, sender],
    queryFn: () => fetchUnReadMails({ group, sender }),
    select: ({ data }) => [...data.mails],
  });
};
