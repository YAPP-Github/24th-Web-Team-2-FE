'use client';

import { useEffect, useState } from 'react';

const MSWWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      const initMsw = await import('./index').then(res => res.initMsw);
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  return <>{mswReady && children}</>;
};

export default MSWWrapper;
