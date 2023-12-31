import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const GridLayout = styled.div`
  display: grid;
  padding: 0.1rem 0; // this will make space for the header and the footer to not overide photos
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  gap: 0.1rem;
  box-sizing: border-box;
  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const InfiniteScrollGrid = styled(InfiniteScroll)`
  display: grid;
  padding: 0.1rem 0; // this will make space for the header and the footer to not overide photos
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  gap: 0.1rem;
  box-sizing: border-box;
  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const TopAnchor = styled.div`
  display: flex;
  height: 0;
`;

const BottomAnchor = styled.div`
  display: flex;
  height: 0;
`;

const S = {
  GridLayout,
  InfiniteScrollGrid,
  TopAnchor,
  BottomAnchor,
};

export default S;
