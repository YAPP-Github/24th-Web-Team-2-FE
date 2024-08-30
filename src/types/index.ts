export interface ArticleType {
  id: string;
  url?: string;
  title: string;
  type: string;
  content?: string;
  date: string;
  thumbnail?: string;
  isRead?: boolean;
  from: {
    domain: string;
    profile: string;
  };
}
export interface DomainType {
  id: string;
  name: string;
  type: string;
  domain: string;
  newsLetter: string;
  profile: string;
  description: string;
  website: string;
  subscriberCnt: number;
}

export interface UserDataType {
  id: string;
  name: string;
  typeList: string[];
  email: string;
  profile: string;
}

export interface UserDataTypes {
  id: string;
  username: string;
  onboardingStep: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export const DomainSpecificType = [
  {
    id: '1',
    name: 'IT/테크',
  },
  {
    id: '2',
    name: '경제/시사',
  },
  {
    id: '3',
    name: '디자인',
  },
  {
    id: '4',
    name: '트렌드',
  },
  {
    id: '5',
    name: '커리어',
  },
  {
    id: '6',
    name: '스타트업',
  },
];
