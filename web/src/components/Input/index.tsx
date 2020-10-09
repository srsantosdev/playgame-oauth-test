import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <input type="text" {...rest} />
    </Container>
  );
};

export default Input;
