import { axiosInstance } from '@/api/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

interface Response {
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

export const useProfileQuery = () => {
  return useQuery<AxiosResponse<Response>, AxiosError, Response>({
    queryKey: ['profile'],
    queryFn: fetchProfileData,
    select: ({ data }) => data,
  });
};
