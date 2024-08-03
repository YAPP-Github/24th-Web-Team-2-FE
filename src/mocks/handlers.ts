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

  http.get('/domainData/:id', req => {
    const { id } = req.params;

    return HttpResponse.json({
      domainData: {
        id: id,
        name: '뉴닉',
        type: '시사',
        domain: 'newneek@gmail.com',
        profile: 'https://picsum.photos/800',
        description:
          '우리가 시간이 없지, 세상이 안 궁금하냐!\n시사, 경제, 커리어 등 지식 정보부터 일상 속 사소한\n영감까지 자유롭게 이야기할 수 있는 플랫폼이에요.',
        website: 'https://newneek.co/',
      },
      isSubscribed: true,
      domainArticleData: [
        {
          id: 'randomString111',
          title: '국가안전보장회의',
          url: '/article/1',
          type: 'IT/테크',
          content:
            '국가는 평생교육을 진흥하여야 한다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 광물 기타 중요한 지하자원·수산자원·수력과 경제상 이용할 수 있는 자연력은 법률이 정하는 바에 의하여 일정한 기간 그 채취·개발 또는 이용을 특허할 수 있다.',
          date: '2024-07-13',
          thumbnail: 'https://picsum.photos/156',
          isRead: true,
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
          isRead: true,
          from: {
            domain: 'official@git',
            profile: 'https://picsum.photos/36',
          },
        },
      ],
    });
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
