'use client';

import { useProfileQuery } from '@/api/hooks/useFetchProfileQuery';

const UserDataCard = () => {
  const { data: userData, isFetched } = useProfileQuery();

  return (
    <div className='flex flex-col w-full h-full gap-3'>
      {/* <Image src={userData.profile} alt='profile' width={80} height={80} className='rounded' /> */}
      <div className='flex flex-col'>
        {isFetched && <span className='text-h3'>{userData?.username}</span>}
        {/* <span className='text-xs font-normal text-darkgrey'>{userData.email}</span> */}
      </div>
    </div>
  );
};

export default UserDataCard;
