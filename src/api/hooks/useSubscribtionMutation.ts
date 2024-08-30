import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

type RequestBodyType = {
  name: string;
  address: string;
}[];

interface postMutationBody {
  subscriptions: RequestBodyType;
}

export const postMutation = ({ subscriptions }: postMutationBody) => {
  return axiosInstance.post('/inbox/subscriptions', {
    subscriptions,
  });
};

export const useSubscribtionMutation = () => {
  return useMutation<AxiosResponse, AxiosError, postMutationBody>({
    mutationFn: postMutation,
  });
};
