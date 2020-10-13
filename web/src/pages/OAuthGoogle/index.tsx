import React, { useEffect } from 'react';
import { PongSpinner } from 'react-spinners-kit';
import { useLocation, useHistory } from 'react-router-dom';
import * as queryString from 'query-string';

import api from '../../services/api';

import { Container } from './styles';

const OAuthGoogle: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();

  const { code } = queryString.parse(search);

  useEffect(() => {
    api
      .get('/oauth/google', {
        params: {
          code,
        },
      })
      .then(() => {
        history.push('/home');
      })
      .catch(() => {
        history.push('/');
      });
  }, [code, history]);

  return (
    <Container>
      <PongSpinner color="#3c0080" />
    </Container>
  );
};

export default OAuthGoogle;
