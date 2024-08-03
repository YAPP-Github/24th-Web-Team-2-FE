import { GET } from '@/network';
import { useQuery } from '@tanstack/react-query';

export interface Profile {
  user_id: string;
  username: string;
  onboardingStatus: number;
  created_at: string;
  updated_at: string;
}

interface ProfileData {
  data: Profile;
}

export const getProfile = async () => {
  const data = <ProfileData>await GET('/users');

  return data.data;
};

export const useProfileData = () => {
  const result = useQuery({ queryFn: getProfile, queryKey: ['profileData'] });

  return { data: result.data };
};
