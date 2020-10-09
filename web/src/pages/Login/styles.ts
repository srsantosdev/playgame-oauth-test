import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  width: 500px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > form {
    width: 100%;

    > button {
      border: 0;
      width: 100%;
      height: 4.2rem;

      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase;

      color: #ffffff;

      background: #3c0080;
      border-radius: 0.5rem;

      margin: 2.4rem 0;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.4, '#3c0080')};
      }
    }
  }

  > footer {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    > span {
      font-size: 14px;
      text-transform: uppercase;
      color: #212121;

      a {
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;

        color: #3c0080;

        margin-left: 8px;

        &:hover {
          color: ${shade(0.2, '#3c0080')};
        }
      }
    }
  }
`;

export const SocialButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 4rem;

  button {
    height: 4.2rem;

    border: 0;
    background: #fff;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 8px;
    }

    & + button {
      margin-top: 8px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const Separator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 1.6rem 0;

  p {
    font-size: 10px;
    text-transform: uppercase;
    color: #3c0080;

    display: block;

    margin: 0 0.4rem;
  }

  span.line {
    display: block;

    width: 100%;
    height: 0.1rem;
    background: #3c0080;
    border-radius: 0.5px;
  }
`;
