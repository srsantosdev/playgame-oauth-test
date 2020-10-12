/* eslint-disable import/no-unresolved */
import 'source-map-support/register';
import { APIGatewayProxyHandler } from 'aws-lambda';

import CreateUserService from './app/services/CreateUserService';
import AuthenticateMailService from './app/services/AuthenticateMailService';

export const createUser: APIGatewayProxyHandler = async event => {
  const createUserService = new CreateUserService();

  const { email, password, name } = JSON.parse(event.body);

  const user = await createUserService.execute({ email, password, name });

  return {
    statusCode: 201,
    body: JSON.stringify(user),
  };
};

export const autenticateByMail: APIGatewayProxyHandler = async event => {
  const authenticateMailService = new AuthenticateMailService();

  const { email, password } = JSON.parse(event.body);

  const user = await authenticateMailService.execute({ email, password });

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};
