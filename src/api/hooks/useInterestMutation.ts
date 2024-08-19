import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/api/axiosInstance';
import { AxiosError, AxiosResponse } from 'axios';

interface postMutationParams {
  interestList: string[];
}

export const postMutation = ({ interestList }: postMutationParams) => {
  return axiosInstance.post('/inbox/interests', {
    interests: interestList.map(data => {
      return { category: data };
    }),
  });
};

export const useInterestMutation = () => {
  return useMutation<AxiosResponse, AxiosError, postMutationParams>({
    mutationFn: postMutation,
  });
};
