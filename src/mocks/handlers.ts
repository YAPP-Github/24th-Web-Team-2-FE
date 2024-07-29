import type { UserDataType } from '@/types';
import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/interests', () => {
    return HttpResponse.json({
      data: [
        {
          id: 'randomstring1',
          interest: '시사',
          desc: '세상 돌아가는',
        },
        {
          id: 'randomstring2',
          interest: 'IT/테크',
          desc: '최신 테크',
        },
        {
          id: 'randomstring3',
          interest: '디자인',
          desc: '디자인 영감',
        },
        {
          id: 'randomstring4',
          interest: '경제',
          desc: '핵심 기업',
        },
        {
          id: 'randomstring5',
          interest: '트렌드',
          desc: '글로벌 트렌드',
        },
        {
          id: 'randomstring6',
          interest: '채용',
          desc: '신규 채용',
        },
      ],
    });
  }),

  http.get('/userData', () => {
    return HttpResponse.json({
      data: {
        id: 'randomString1',
        name: '임채현',
        email: 'hedwig@gmail.com',
        profile: 'https://picsum.photos/200',
        typeList: ['시사', 'IT/테크', '채용'],
      } as UserDataType,
    });
  }),

  http.get('/subscribeList', () => {
    return HttpResponse.json({
      data: [
        {
          id: 'randomString1',
          name: '뉴닉',
          type: '시사',
          profile: 'https://picsum.photos/48',
        },
        {
          id: 'randomString2',
          name: '뉴닉',
          profile: 'https://picsum.photos/48',
          type: 'IT/테크',
        },
        {
          id: 'randomString3',
          name: '뉴닉',
          profile: 'https://picsum.photos/48',
          type: '디자인',
        },
        {
          id: 'randomString4',
          name: '뉴닉',
          profile: 'https://picsum.photos/48',
          type: '경제',
        },
        {
          id: 'randomString5',
          name: '뉴닉',
          profile: 'https://picsum.photos/48',
          type: '트렌드',
        },
        {
          id: 'randomString6',
          name: '뉴닉',
          profile: 'https://picsum.photos/48',
          type: '채용',
        },
      ],
    });
  }),
];
