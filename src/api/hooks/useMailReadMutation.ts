import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

interface patchParam {
  mailId: string;
}

export const patchFn = ({ mailId }: patchParam) => {
  return axiosInstance.patch(`/inbox/mails/${mailId}`, { action: 'read' });
};

export const useMailReadMutation = () => {
  return useMutation<AxiosResponse, AxiosError, patchParam>({
    mutationFn: patchFn,
  });
};
