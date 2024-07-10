import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json({
      data: {
        name: 'haha',
        age: 20,
      },
    });
  }),

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
];
