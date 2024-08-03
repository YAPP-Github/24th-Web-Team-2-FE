import { Chip } from '@/components/Chip';
import { UserDataType } from '@/types';
import Image from 'next/image';
import { GET } from '@/network';

const UserDataCard = async () => {
  //TODO: 추후 로그인 로직 완성 후 주석 교체
  const userData: UserDataType = await getUserData();
  // const userData = cookies().get('userData');

  return (
    <div className='flex flex-col w-full h-full gap-3'>
      <Image src={userData.profile} alt='profile' width={80} height={80} className='rounded-full' />
      <div className='flex flex-col'>
        <span className='text-h2'>{userData.name}</span>
        <span className='text-body3'>{userData.email}</span>
      </div>
      <div className='flex flex-row gap-2'>
        {userData.typeList.map(type => (
          <Chip key={type} text={type} />
        ))}
      </div>
    </div>
  );
};

export default UserDataCard;

// TODO: 추후 로그인 로직 완성 후 아래 제거
const getUserData = async () => {
  const response = await GET('/users');
  return response.data;
};
