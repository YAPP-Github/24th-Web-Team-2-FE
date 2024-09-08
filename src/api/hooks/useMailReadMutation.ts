import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

interface patchParam {
  mailId: string;
}

export const patchFn = ({ mailId }: patchParam) => {
  return axiosInstance.patch(`/inbox/mails/${mailId}`, { action: 'read' });
};

export const deleteFn = ({ mailId }: patchParam) => {
  return axiosInstance.delete(`/inbox/mails/${mailId}`);
};

export const useMailReadMutation = () => {
  return useMutation<AxiosResponse, AxiosError, patchParam>({
    mutationFn: patchFn,
  });
};

export const useMailDeleteMutation = () => {
  return useMutation<AxiosResponse, AxiosError, patchParam>({
    mutationFn: deleteFn,
  });
};
