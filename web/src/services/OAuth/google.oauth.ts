import * as queryString from 'query-string';

export default function googleOAuthLink(): string {
  const stringifiedQueryParams = queryString.stringify({
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
    prompt: 'consent',
    response_type: 'code',
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
  });

  const link = `https://accounts.google.com/o/oauth2/auth?${stringifiedQueryParams}`;

  return link;
}
