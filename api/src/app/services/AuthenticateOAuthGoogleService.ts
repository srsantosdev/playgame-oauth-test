import axios from 'axios';
import { User } from '../models/User';

export default class AuthenticateOAuthGoogleService {
  public async execute(code: string): Promise<any> {
    try {
      const responseAccessToken = await axios.post(
        'https://oauth2.googleapis.com/token',
        {
          client_id: process.env.GOOGLE_CLIENT_ID,
          redirect_uri: process.env.GOOGLE_REDIRECT_URI,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          grant_type: 'authorization_code',
          code,
        },
      );

      const { access_token } = responseAccessToken.data;

      const responseUserData = await axios.get(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      const { email, name } = responseUserData.data;

      const user = await User.create({
        email,
        name,
        password: null,
        auth_type: 'GOOGLE',
      });

      return user;
    } catch (error) {
      return error;
    }
  }
}
