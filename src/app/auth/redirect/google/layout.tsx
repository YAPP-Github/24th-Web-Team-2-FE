import { PropsWithChildren, Suspense } from 'react';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <Suspense fallback={<div></div>}>{children}</Suspense>;
}
