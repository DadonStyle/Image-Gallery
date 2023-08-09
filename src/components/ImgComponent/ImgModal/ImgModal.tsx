import S from './styled';
import { IImgComponent } from '../ImgComponent';
import deleteIcon from '../../../assets/deleteIcon.png';
import duplicateIcon from '../../../assets/duplicateIcon.png';
import { useState } from 'react';
import BouncingDotsLoader from '../../Loader/Loader';

interface IImgModal extends IImgComponent {
  showModal: boolean;
  arrPosition: number;
}

const ImgModal = ({
  url,
  description,
  showModal,
  arrPosition,
  addToArr,
  removeFromArr,
}: IImgModal) => {
  const [isImgLoading, setIsImgLoading] = useState<boolean>(true);
  if (!showModal) return;

  const handleStopLoader = () => setIsImgLoading(false);
  const handleDeleteFunc = () => {
    removeFromArr(arrPosition);
  };

  const handleAddFunc = () => {
    addToArr(url, description || 'Empty');
  };

  return (
    <S.ImgModalWrapper>
      <S.IconsWrapper>
        {isImgLoading ? (
          <></>
        ) : (
          <S.Icon onClick={handleDeleteFunc} src={deleteIcon} alt="delete" />
        )}
        {isImgLoading ? (
          <></>
        ) : (
          <S.Icon onClick={handleAddFunc} src={duplicateIcon} alt="duplicate" />
        )}
      </S.IconsWrapper>
      {isImgLoading ? <BouncingDotsLoader /> : <></>}
      <S.LargeImgTag
        onLoad={handleStopLoader}
        onError={handleStopLoader}
        draggable={false}
        src={url}
        alt={description}
      />
    </S.ImgModalWrapper>
  );
};

export default ImgModal;
