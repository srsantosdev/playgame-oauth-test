import { Document } from 'mongoose';
import { hash } from 'bcryptjs';

import { User } from '../models/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<Document> {
    try {
      const hashedPassword = await hash(password, 15);

      const user = await User.create({ name, email, password: hashedPassword });

      return user;
    } catch (error) {
      return error;
    }
  }
}
