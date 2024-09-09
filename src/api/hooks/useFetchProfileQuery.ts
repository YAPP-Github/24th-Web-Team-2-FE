import { axiosInstance } from '@/api/axiosInstance';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export interface ProfileType {
  user_id: string;
  username: string;
  onboardingStatus: string;
  created_at: string;
  updated_at: string;
}

export const fetchProfileData = () => {
  const data = axiosInstance.get('/users');
  return data;
};

export const deleteProfileDataMutation = () => {
  const data = axiosInstance.delete('/users');
  return data;
};

export const useProfileQuery = () => {
  return useQuery<AxiosResponse<ProfileType>, AxiosError, ProfileType>({
    queryKey: ['profile'],
    queryFn: fetchProfileData,
    select: ({ data }) => data,
  });
};

export const usewithdrawalMutation = () => {
  return useMutation<AxiosResponse, AxiosError, null>({
    mutationFn: deleteProfileDataMutation,
  });
};
