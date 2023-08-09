import styled from 'styled-components';

const ImgWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border-radius: 5px;
  /* border: 8px solid red; */
`;

const ImgTag = styled.img`
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  z-index: 2;
  filter: grayscale(0.7);
  :hover {
    z-index: 0;
    scale: 1.05;
    filter: grayscale(0);
  }
`;

const S = {
  ImgWrapper,
  ImgTag,
};

export default S;
