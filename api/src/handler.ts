/* eslint-disable import/no-unresolved */
import 'source-map-support/register';
import { APIGatewayProxyHandler } from 'aws-lambda';

import CreateUserService from './app/services/CreateUserService';
import AuthenticateMailService from './app/services/AuthenticateMailService';

import AuthenticateOAuthGoogleService from './app/services/AuthenticateOAuthGoogleService';

export const createUser: APIGatewayProxyHandler = async event => {
  try {
    const createUserService = new CreateUserService();

    const { email, password, name } = JSON.parse(event.body);

    const user = await createUserService.execute({ email, password, name });

    return {
      statusCode: 201,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};

export const autenticateByMail: APIGatewayProxyHandler = async event => {
  try {
    const authenticateMailService = new AuthenticateMailService();

    const { email, password } = JSON.parse(event.body);

    const user = await authenticateMailService.execute({ email, password });

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};

export const authenticateOAuthGoogle: APIGatewayProxyHandler = async event => {
  try {
    const { code } = event.queryStringParameters;

    const authenticateOAuthGoogleService = new AuthenticateOAuthGoogleService();

    const user = await authenticateOAuthGoogleService.execute(code);

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
