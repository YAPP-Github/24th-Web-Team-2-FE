export interface ArticleType {
  id: string;
  url: string;
  title: string;
  type: string;
  content: string;
  date: string;
  thumbnail: string;
  isRead: boolean;
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
  profile: string;
  description: string;
  website: string;
}

export interface UserDataType {
  id: string;
  name: string;
  typeList: string[];
  email: string;
  profile: string;
}
