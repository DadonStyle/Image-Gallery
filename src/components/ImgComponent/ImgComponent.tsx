import { useState } from 'react';
import { IPhoto } from '../../services/interface';
import S from './styled';
import ImgModal from './ImgModal/ImgModal';

export interface IImgComponent extends IPhoto {
  addToArr: (url: string, description: string) => void;
  removeFromArr: (itemArrIndex: number) => void;
}

const ImgComponent = ({
  description,
  url,
  arrPosition,
  addToArr,
  removeFromArr,
}: IImgComponent) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleOnClick = () => setShowModal((prev) => !prev);

  return (
    <>
      <S.ImgWrapper onClick={handleOnClick}>
        <ImgModal
          url={url}
          arrPosition={arrPosition!}
          description={description}
          addToArr={addToArr}
          removeFromArr={removeFromArr}
          showModal={showModal}
        />
        <S.ImgTag alt={description} src={url} />
      </S.ImgWrapper>
    </>
  );
};

export default ImgComponent;
