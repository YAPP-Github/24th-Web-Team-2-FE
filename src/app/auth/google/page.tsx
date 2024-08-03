'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const AuthRedirectPage = () => {
  const param = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = param.get('code');
    const scope = param.get('scope');

    const CookieHeader: HeadersInit = new Headers();
    CookieHeader.set('Access-Control-Allow-Credentials', 'true');
    CookieHeader.set('Content-Type', 'application/json');

    if (code && scope) {
      fetch('/users', {
        method: 'POST',
        headers: CookieHeader,
        body: JSON.stringify({ code, scope }),
      })
        .then(response => {
          if (response.ok) {
            router.push('/onboard/interest');
          } else {
            console.error('Failed to post data');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, [param, router]);

  return <div>Loading...</div>;
};

export default AuthRedirectPage;
