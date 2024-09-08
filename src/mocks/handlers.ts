import type { UserDataType } from '@/types';
import mailListData from './data/mailListData.json';
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
  http.post('/inbox/interests', () => {
    return HttpResponse.json(
      {
        Cookie: '',
      },
      { status: 201 },
    );
  }),

  http.get('/auth/google', () => {
    const CookieHeader: HeadersInit = new Headers();
    CookieHeader.set('Access-Control-Allow-Credentials', 'true');
    CookieHeader.set('Set-Cookie', 'connect.sid=12312312312312312312; Path=/;');

    return HttpResponse.json(
      {
        isGuest: true,
      },
      {
        status: 200,
        headers: CookieHeader,
      },
    );
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

  http.get('/auth/google', () => {
    return HttpResponse.json();
  }),

  http.get('/domainSubscribeList', () => {
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

  http.get('/domainRecommendList', () => {
    return HttpResponse.json({
      data: [
        {
          id: 'randomString111',
          name: '요즘IT',
          profile: 'https://picsum.photos/48',
          type: 'IT/테크',
          isSubscribed: false,
        },
        {
          id: 'randomString112',
          name: '요즘IT',
          profile: 'https://picsum.photos/48',
          type: 'IT/테크',
          isSubscribed: false,
        },
        {
          id: 'randomString113',
          name: '요즘IT',
          profile: 'https://picsum.photos/48',
          type: 'IT/테크',
          isSubscribed: false,
        },
      ],
    });
  }),

  http.get('/inbox/groups', req => {
    return HttpResponse.json({
      groups: [
        {
          groupId: 'mongo objecrt Id',
          name: '그룹 이름',
          senders: [{ name: '발신인 이름', address: '발신인 주소' }],
        },
      ],
    });
  }),

  http.get('/inbox/incoming-senders', () => {
    return HttpResponse.json({
      senders: mailListData.mails,
    });
  }),

  http.get('/users', () => {
    return HttpResponse.json({
      user_id: 'RandomString',
      username: '채현',
      onboardingStatus: 'guest',
      created_at: new Date('2024-07-13'),
      updated_at: new Date('2024-07-13'),
    });
  }),

  http.get('/articleList', req => {
    const { currentTab } = req.params;
    return HttpResponse.json({
      data: [
        {
          id: 'randomString111',
          title: '국가안전보장회의',
          url: '/article/1',
          type: 'IT/테크',
          content:
            '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
          date: '2024-07-13',
          thumbnail: 'https://picsum.photos/156',
          isRead: false,
          from: {
            domain: 'official@git',
            profile: 'https://picsum.photos/36',
          },
        },
        {
          id: 'randomString112',
          title: '국가안전보장회의',
          url: '/article/2',
          type: 'IT/테크',
          content:
            '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
          date: '2024-07-13',
          thumbnail: 'https://picsum.photos/156',
          isRead: false,
          from: {
            domain: 'official@git',
            profile: 'https://picsum.photos/36',
          },
        },
        {
          id: 'randomString113',
          title: '국가안전보장회의',
          url: '/article/3',
          type: '시사',
          content:
            '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
          date: '2024-07-13',
          thumbnail: 'https://picsum.photos/156',
          isRead: false,
          from: {
            domain: 'official@git',
            profile: 'https://picsum.photos/36',
          },
        },
      ],
    });
  }),

  http.get('/inbox/unread-mails', () => {
    return HttpResponse.json(mailListData);
  }),

  http.get('/inbox/subscriptions-list', () => {
    return HttpResponse.json({
      subscriptions: {
        tech: [
          {
            name: 'FE News',
            companyName: 'FE News',
            isAutomated: false,
            content:
              '네이버 FE 엔지니어들이 엄선한 양질의 FE 및 주요한 기술 소식들을 큐레이션 해 공유하는 것을 목표로 합니다. 매월 첫째 주 수요일, 월 1회 발행 됩니다.',
            subscriptionLink: 'https://fenews.substack.com/embed',
            contentLink: 'https://github.com/naver/fe-news/blob/master/issues/2024-08.md',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: 'FE News',
            companyName: 'FE News',
            isAutomated: false,
            content:
              '네이버 FE 엔지니어들이 엄선한 양질의 FE 및 주요한 기술 소식들을 큐레이션 해 공유하는 것을 목표로 합니다. 매월 첫째 주 수요일, 월 1회 발행 됩니다.',
            subscriptionLink: 'https://fenews.substack.com/embed',
            contentLink: 'https://github.com/naver/fe-news/blob/master/issues/2024-08.md',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: 'FE News',
            companyName: 'FE News',
            isAutomated: false,
            content:
              '네이버 FE 엔지니어들이 엄선한 양질의 FE 및 주요한 기술 소식들을 큐레이션 해 공유하는 것을 목표로 합니다. 매월 첫째 주 수요일, 월 1회 발행 됩니다.',
            subscriptionLink: 'https://fenews.substack.com/embed',
            contentLink: 'https://github.com/naver/fe-news/blob/master/issues/2024-08.md',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: 'FE News',
            companyName: 'FE News',
            isAutomated: false,
            content:
              '네이버 FE 엔지니어들이 엄선한 양질의 FE 및 주요한 기술 소식들을 큐레이션 해 공유하는 것을 목표로 합니다. 매월 첫째 주 수요일, 월 1회 발행 됩니다.',
            subscriptionLink: 'https://fenews.substack.com/embed',
            contentLink: 'https://github.com/naver/fe-news/blob/master/issues/2024-08.md',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: 'FE News',
            companyName: 'FE News',
            isAutomated: false,
            content:
              '네이버 FE 엔지니어들이 엄선한 양질의 FE 및 주요한 기술 소식들을 큐레이션 해 공유하는 것을 목표로 합니다. 매월 첫째 주 수요일, 월 1회 발행 됩니다.',
            subscriptionLink: 'https://fenews.substack.com/embed',
            contentLink: 'https://github.com/naver/fe-news/blob/master/issues/2024-08.md',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: 'FE News',
            companyName: 'FE News',
            isAutomated: false,
            content:
              '네이버 FE 엔지니어들이 엄선한 양질의 FE 및 주요한 기술 소식들을 큐레이션 해 공유하는 것을 목표로 합니다. 매월 첫째 주 수요일, 월 1회 발행 됩니다.',
            subscriptionLink: 'https://fenews.substack.com/embed',
            contentLink: 'https://github.com/naver/fe-news/blob/master/issues/2024-08.md',
            thumbnailImage: 'https://picsum.photos/200',
          },
        ],
        business: [
          {
            name: '머니레터',
            companyName: '어피티',
            isAutomated: false,
            content: '경제 공부, 선택 아닌 필수막막한 경제 공부, 머니레터로 시작하세요.',
            subscriptionLink: 'https://uppity.co.kr/newsletter/money-letter/',
            contentLink: 'https://uppity.co.kr/newsletter/money-letter/',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: '머니레터',
            companyName: '어피티',
            isAutomated: false,
            content: '경제 공부, 선택 아닌 필수막막한 경제 공부, 머니레터로 시작하세요.',
            subscriptionLink: 'https://uppity.co.kr/newsletter/money-letter/',
            contentLink: 'https://uppity.co.kr/newsletter/money-letter/',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: '머니레터',
            companyName: '어피티',
            isAutomated: false,
            content: '경제 공부, 선택 아닌 필수막막한 경제 공부, 머니레터로 시작하세요.',
            subscriptionLink: 'https://uppity.co.kr/newsletter/money-letter/',
            contentLink: 'https://uppity.co.kr/newsletter/money-letter/',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: '머니레터',
            companyName: '어피티',
            isAutomated: false,
            content: '경제 공부, 선택 아닌 필수막막한 경제 공부, 머니레터로 시작하세요.',
            subscriptionLink: 'https://uppity.co.kr/newsletter/money-letter/',
            contentLink: 'https://uppity.co.kr/newsletter/money-letter/',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: '머니레터',
            companyName: '어피티',
            isAutomated: false,
            content: '경제 공부, 선택 아닌 필수막막한 경제 공부, 머니레터로 시작하세요.',
            subscriptionLink: 'https://uppity.co.kr/newsletter/money-letter/',
            contentLink: 'https://uppity.co.kr/newsletter/money-letter/',
            thumbnailImage: 'https://picsum.photos/200',
          },
          {
            name: '머니레터',
            companyName: '어피티',
            isAutomated: false,
            content: '경제 공부, 선택 아닌 필수막막한 경제 공부, 머니레터로 시작하세요.',
            subscriptionLink: 'https://uppity.co.kr/newsletter/money-letter/',
            contentLink: 'https://uppity.co.kr/newsletter/money-letter/',
            thumbnailImage: 'https://picsum.photos/200',
          },
        ],
        design: [
          {
            name: '디자인 나침반 뉴스레터',
            companyName: '디자인 나침반',
            isAutomated: false,
            content: ' 매주 화요일 아침, 16년 차 디자이너가큐레이션한 디자인 트렌드를 모아보세요.',
            subscriptionLink: 'https://designcompass.org/',
            contentLink: 'https://designcompass.org/',
            thumbnailImage: 'https://picsum.photos/200',
          },
        ],
        trend: [
          {
            name: '캐릿',
            companyName: '대학내일',
            isAutomated: false,
            content: 'MZ세대와 세 발 더 가까워질 수 있는 인사이트를 매주 화요일 출근 전에 쏴드립니다. 렛츠 캐릿!',
            subscriptionLink: 'https://www.careet.net/Subscribe',
            contentLink: 'https://universitytomorrow.com/',
            thumbnailImage: 'https://picsum.photos/200',
          },
        ],
        career: [
          {
            name: '서핏',
            companyName: '서핏',
            isAutomated: false,
            content: '스타트업 사람들을 위한 뉴스레터',
            subscriptionLink: 'https://surfside.stibee.com/',
            contentLink: 'https://surfside.stibee.com/',
            thumbnailImage: 'https://picsum.photos/200',
          },
        ],
        startup: [
          {
            name: '조쉬의 프로덕트 레터',
            companyName: '조쉬의 프로덕트 레터',
            isAutomated: false,
            content: '퀄리티 있는 비즈니스, 프로덕트, 디자인, 1인 창업가 이야기를 주 1회 들려드릴게요.',
            subscriptionLink: 'https://maily.so/josh',
            contentLink: 'https://maily.so/josh',
            thumbnailImage: 'https://picsum.photos/200',
          },
        ],
      },
    });
  }),

  http.get('/inbox/subscriptions-random-list', () => {
    return HttpResponse.json({
      subscriptions: [
        {
          name: 'string',
          isPublished: false,
          address: 'string@gmail.com',
          thumbnailImage: 'https://picsum.photos/48',
        },
        {
          name: 'string1',
          isPublished: false,
          address: 'string@gmail.com',
          thumbnailImage: 'https://picsum.photos/48',
        },
        {
          name: 'string2',
          isPublished: false,
          address: 'string@gmail.com',
          thumbnailImage: 'https://picsum.photos/48',
        },
      ],
    });
  }),

  http.get('/inbox/mails/:id', req => {
    const { id } = req.params;
    return HttpResponse.json(mailListData.mails.find(mail => mail.mailId === id));
  }),

  http.get('/domainData/:id', req => {
    const { id } = req.params;

    return HttpResponse.json(mailListData);
  }),

  http.get('/incomingSenders/:type', req => {
    const { type } = req.params;
    return HttpResponse.json({
      senders: [
        {
          senderId: 'randomString1',
          fullAddress: 'inspomailclub@hedwig.com',
          localPart: 'inspomailclub1' + type,
          domain: 'hedwig.com',
          category: 'IT / 테크',
        },
        {
          senderId: 'randomString2',
          fullAddress: 'inspomailclub@hedwig.com',
          localPart: 'inspomailclub2' + type,
          domain: 'hedwig.com',
          category: 'IT / 테크',
        },
        {
          senderId: 'randomString3',
          fullAddress: 'inspomailclub@hedwig.com',
          localPart: 'inspomailclub3' + type,
          domain: 'hedwig.com',
          category: 'IT / 테크',
        },
        {
          senderId: 'randomString4',
          fullAddress: 'inspomailclub@hedwig.com',
          localPart: 'inspomailclub4' + type,
          domain: 'hedwig.com',
          category: 'IT / 테크',
        },
        {
          senderId: 'randomString5',
          fullAddress: 'inspomailclub@hedwig.com',
          localPart: 'inspomailclub5' + type,
          domain: 'hedwig.com',
          category: 'IT / 테크',
        },
        {
          senderId: 'randomString6',
          fullAddress: 'inspomailclub@hedwig.com',
          localPart: 'inspomailclub6' + type,
          domain: 'hedwig.com',
          category: 'IT / 테크',
        },
        {
          senderId: 'randomString7',
          fullAddress: 'inspomailclub@hedwig.com',
          localPart: 'inspomailclub7' + type,
          domain: 'hedwig.com',
          category: 'IT / 테크',
        },
      ],
      count: 7,
    });
  }),
];
