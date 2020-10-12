import { compare } from 'bcryptjs';
import { User } from '../models/User';

interface ICredentials {
  email: string;
  password: string;
}

export default class AuthenticateMailService {
  public async execute({ email, password }: ICredentials): Promise<any> {
    try {
      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        throw new Error('User not found.');
      }

      const verifyPassword = await compare(password, user.password);

      if (!verifyPassword) {
        throw new Error('Email or password invalid!');
      }

      return { user };
    } catch (error) {
      return { error: error.message };
    }
  }
}
