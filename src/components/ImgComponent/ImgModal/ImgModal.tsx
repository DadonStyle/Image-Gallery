import S from './styled';
import { IImgComponent } from '../ImgComponent';
import deleteIcon from '../../../assets/deleteIcon.png';
import duplicateIcon from '../../../assets/duplicateIcon.png';

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
  if (!showModal) return;

  const handleDeleteFunc = () => {
    removeFromArr(arrPosition);
  };

  const handleAddFunc = () => {
    addToArr(url, description || 'Empty');
  };

  return (
    <S.ImgModalWrapper>
      <S.IconsWrapper>
        <S.Icon onClick={handleDeleteFunc} src={deleteIcon} alt="delete" />
        <S.Icon onClick={handleAddFunc} src={duplicateIcon} alt="duplicate" />
      </S.IconsWrapper>
      <S.LargeImgTag draggable={false} src={url} alt={description} />
    </S.ImgModalWrapper>
  );
};

export default ImgModal;
