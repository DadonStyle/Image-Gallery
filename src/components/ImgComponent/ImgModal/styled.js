import styled from 'styled-components';

const ImgModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: auto;
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: transparent; // transparent
  backdrop-filter: blur(10px);
  @media (max-width: 750px) {
    height: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
`;

const LargeImgTag = styled.img`
  display: flex;
  border-radius: 5px;
  width: 50%;
  height: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  @media (max-width: 750px) {
    width: 270px;
    height: 270px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 30px;
  img {
    width: 30px;
    height: 30px;
  }
`;

const Icon = styled.img`
  transition: all 0.3 ease;
  :hover {
    scale: 1.1;
  }
`;

const S = {
  ImgModalWrapper,
  Menu,
  LargeImgTag,
  IconsWrapper,
  Icon,
};

export default S;
