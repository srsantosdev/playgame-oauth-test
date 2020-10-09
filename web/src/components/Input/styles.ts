import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 1.6rem;
  }

  label {
    margin-bottom: 0.8rem;
    font-size: 14px;

    text-transform: uppercase;
  }

  input {
    border: 0;
    background: #ffffff;
    border-radius: 0.5rem;

    padding: 1.6rem 1.2rem;
  }
`;
