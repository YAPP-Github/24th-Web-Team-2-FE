export interface Article {
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
