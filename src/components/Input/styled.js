import styled from 'styled-components';

const Input = styled.input`
  all: none;
  display: flex;
  background-color: transparent;
  color: black;
  border-radius: 15px;
  padding: 0.6rem;
  width: 99%;
  border: 2px solid black;
  box-sizing: border-box;
  cursor: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  @media (hover: hover) {
    :hover {
      border: 2px dotted black;
    }
  }
`;

const InputBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  border: 2px solid black;
  border-radius: 15px;
  padding: 0.6rem;
  @media (hover: hover) {
    :hover {
      color: black;
      background-color: wheat;
    }
  }
`;

const S = {
  Input,
  InputBtn,
};

export default S;
