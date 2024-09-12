'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import LoadingComponent from '@/components/Loading';

const AuthRedirectPage = () => {
  const param = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = param.get('code');
    const scope = param.get('scope');

    const CookieHeader: HeadersInit = new Headers();
    CookieHeader.set('Access-Control-Allow-Credentials', 'true');
    CookieHeader.set('Content-Type', 'application/json');

    const fetchUser = async () => {
      if (code && scope) {
        try {
          const response = await axios.get(`/auth/google?code=${code}`, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status === 200) {
            const data = response.data;

            if (data && typeof data.isGuest !== 'undefined') {
              if (data.isGuest) {
                router.push('/onboard/emailList');
              } else {
                router.push('/main');
              }
            } else {
              console.error('Invalid response data', data);
            }
          } else {
            console.error('Failed to fetch user data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    fetchUser();
  }, [param, router]);

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='w-[400px] aspect-square'>
        <LoadingComponent />
      </div>
    </div>
  );
};

export default AuthRedirectPage;
