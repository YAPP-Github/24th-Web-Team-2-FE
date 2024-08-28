export interface Interest {
  id: string;
  interest: string;
  desc: string;
}

interface IncomingSender {
  mailId: string;
  subject: string;
  date: Date;
  snippet: string;
  from: {
    name: string;
    address: string;
  };
  to: {
    name: string;
    address: string;
  };
  mimeType: string;
  payload: {
    partId: number;
    mimeType: string;
    body: string;
  }[];
}

export interface IncomingSenders {
  senders: IncomingSender[];
  count: number;
}
