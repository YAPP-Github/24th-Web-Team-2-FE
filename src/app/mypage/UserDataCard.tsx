import { Chip } from '@/components/Chip';
import { UserDataTypes } from '@/types';
import Image from 'next/image';
import { GET } from '@/network';

const UserDataCard = async () => {
  //TODO: 추후 로그인 로직 완성 후 주석 교체
  const userData: UserDataTypes = await getUserData();

  // const userData = cookies().get('userData');

  return (
    <div className='flex flex-col w-full h-full gap-3'>
      {/* <Image src={userData.profile} alt='profile' width={80} height={80} className='rounded' /> */}
      <div className='flex flex-col'>
        <span className='text-h3'>{userData.username}</span>
        {/* <span className='text-xs font-normal text-darkgrey'>{userData.email}</span> */}
      </div>
    </div>
  );
};

export default UserDataCard;

// TODO: 추후 로그인 로직 완성 후 아래 제거
const getUserData = async () => {
  const response = await GET('/users');
  console.log(response);
  return response;
};
