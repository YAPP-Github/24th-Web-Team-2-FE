import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('userData')?.value; // cookies에 userData값을 가져옴
  console.log('middleware', request.nextUrl.pathname, request.nextUrl.pathname.localeCompare('/'));
  if (!currentUser) {
    // 필요하다면 로그인 재시도

    if (request.nextUrl.pathname.localeCompare('/') === 1) {
      console.log('User is not logged in');
      // 로그인이 안되어있는 경우는 아무 페이지도 볼 수 없음
      // TODO: 추후 로그인 로직 완성시 아래 주석 해제
      // return Response.redirect(new URL('/', request.url));
    }
  }
}
export const config = {
  // api, _next/static, _next/image, favicon.ico를 제외한 모든 요청에 대해 middleware를 실행
  // TODO: MSW와 충돌 발생하지 않는지 체크
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
