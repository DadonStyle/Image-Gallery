import { useState } from 'react';
import S from './styled';
import StyledInput from '../../components/Input/StyledInput';
import { callback, stateENUM, placeHolderText } from './helper';

interface IHeader {
  addToArr: (url: string, description: string) => void;
  scrollTop: () => void;
  scrollBottom: () => void;
  setDriveId: (str: string) => void;
  driveId: string;
  refetch: () => void;
}

const Header = ({
  addToArr,
  scrollTop,
  scrollBottom,
  setDriveId,
  driveId,
  refetch,
}: IHeader) => {
  const [InputId, setInputId] = useState<number>(stateENUM.off);
  const [url, setUrl] = useState<string>('');

  const handleChangeToInput = (stateId: number) => () => {
    setInputId(stateId);
  };

  // on input change
  const handleInputOnChange = (str: string) => {
    if (InputId === stateENUM.add) setUrl(str);
    if (InputId === stateENUM.drive) setDriveId(str);
  };
  //
  // when clicking on "add"
  const handleOnInputBtnClick = () => {
    if (InputId === stateENUM.add) addToArr(url, 'new image');
    if (InputId === stateENUM.drive && driveId.length > 0) refetch();
    setInputId(stateENUM.off);
    setUrl('');
  };
  //

  return (
    <S.Wrapper>
      {InputId !== stateENUM.off ? (
        <StyledInput
          handleInputOnChange={handleInputOnChange}
          handleOnInputBtnClick={handleOnInputBtnClick}
          placeHolder={placeHolderText[InputId]}
        />
      ) : (
        <>
          <S.HeaderBtn onClick={handleChangeToInput(stateENUM.drive)}>
            Drive
          </S.HeaderBtn>
          <S.HeaderBtn onClick={callback(scrollTop)}>Top</S.HeaderBtn>
          <S.HeaderBtn onClick={handleChangeToInput(stateENUM.add)}>
            Add
          </S.HeaderBtn>
          <S.HeaderBtn onClick={callback(scrollBottom)}>Bottom</S.HeaderBtn>
        </>
      )}
    </S.Wrapper>
  );
};

export default Header;
