export const PROD = process.env.NODE_ENV === 'production';

export const BASE_URL = PROD ? `http://${process.env.NEXT_PUBLIC_API_URL}` : 'https://localhost:3000';

export const GOOGLE_AUTH_API_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${BASE_URL}/${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=openid%20email%20profile%20https://www.googleapis.com/auth/gmail.modify&access_type=offline`;
