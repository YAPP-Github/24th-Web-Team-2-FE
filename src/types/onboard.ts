interface IncomingSender {
  senderId: string;
  fullAddress: string;
  localPart: string;
  domain: string;
  category: string;
}

export interface IncomingSenders {
  senders: IncomingSender[];
  count: number;
}
