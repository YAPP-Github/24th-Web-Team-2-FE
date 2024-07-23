export interface pageProps {
  searchParams: SearchParams;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}
