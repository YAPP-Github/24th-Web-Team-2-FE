import { axiosInstance } from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface Response {
  groups: {
    groupId: string;
    name: string;
    senders: {
      name: string;
      address: string;
    }[];
  }[];
}

export type GroupsType = {
  groupId: string;
  name: string;
  senders: {
    name: string;
    address: string;
  }[];
}[];

export const fetchGroupList = () => {
  return axiosInstance.get('/inbox/groups');
};

export const useFetchGroupListQuery = () => {
  return useQuery<AxiosResponse<Response>, AxiosError, Response>({
    queryKey: ['groupList'],
    queryFn: fetchGroupList,
    select: ({ data }) => data,
  });
};
