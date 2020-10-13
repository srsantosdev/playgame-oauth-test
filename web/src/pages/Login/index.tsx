import React, { FormEvent, useCallback, useState } from 'react';

import logo from '../../assets/logo.svg';
import facebookLogo from '../../assets/facebooklogo.svg';
import googleLogo from '../../assets/googlelogo.svg';

import Input from '../../components/Input';

import { Container, SocialButtons, Separator } from './styles';
import googleOAuthLink from '../../services/OAuth/google.oauth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      console.log(email, password);
    },
    [email, password],
  );

  const handleAuthWithFacebook = useCallback(() => {}, []);

  const handleAuthWithGoogle = useCallback(() => {
    window.location.href = googleOAuthLink();
  }, []);

  return (
    <Container>
      <img src={logo} alt="Play Game" />

      <SocialButtons>
        <button type="button" onClick={handleAuthWithGoogle}>
          <img src={googleLogo} alt="Google Logo" />
          <span>Entrar com Google</span>
        </button>

        <button type="button" onClick={handleAuthWithFacebook}>
          <img src={facebookLogo} alt="Facebook Logo" />
          <span>Entrar com Facebook</span>
        </button>
      </SocialButtons>

      <Separator>
        <span className="line"> </span>
        <p>OU</p>
        <span className="line"> </span>
      </Separator>

      <form onSubmit={handleSubmit}>
        <Input
          label="E-mail"
          type="email"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>

      <footer>
        <span>
          Ainda não tem cadastro? <a href="/">Cadastre-se</a>
        </span>
      </footer>
    </Container>
  );
};

export default Login;
