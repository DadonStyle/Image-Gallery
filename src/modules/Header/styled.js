import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  height: 3rem;
  width: 99%;
  background-color: transparent;
  backdrop-filter: blur(4px);
  z-index: 10;
  top: 0;
  gap: 0.5rem;
  padding-left: 0.2rem;
`;

const HeaderBtn = styled.div`
  display: flex;
  border-radius: 15px;
  border: 2px solid black;
  color: black;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.6rem;
  transition: all 0.3s ease-in-out;
  :active {
    background-color: wheat;
  }
  @media (hover: hover) {
    :hover {
      background-color: wheat;
    }
  }
`;

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
  Wrapper,
  HeaderBtn,
  Input,
  InputBtn,
};

export default S;
