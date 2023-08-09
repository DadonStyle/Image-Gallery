import styled, { keyframes } from 'styled-components';

const bouncing = keyframes`
  to {
    opacity: 0.1;
    transform: translateY(-16px);
  }
`;

const BouncingLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  div {
    width: 16px;
    height: 16px;
    margin: 3px 6px;
    border-radius: 50%;
    background-color: #a3a1a1;
    opacity: 1;
    animation: ${bouncing} 0.6s infinite alternate;
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const S = {
  BouncingLoader,
};

export default S;
