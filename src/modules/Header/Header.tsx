import { useRef, useState } from 'react';
import S from './styled';

interface IHeader {
  addToArr: (url: string, description: string) => void;
  scrollTop: () => void;
  scrollBottom: () => void;
}

const Header = ({ addToArr, scrollTop, scrollBottom }: IHeader) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isGetInput, setIsGetInput] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('');

  const handleAdd = () => setIsGetInput((prev) => !prev);
  const handleTop = () => scrollTop();
  const handleBottom = () => scrollBottom();

  const handleInputOnChange = () => setUrl(inputRef.current?.value || '');
  const handleOnInputBtnClick = () => {
    addToArr(url, 'new image');
    setIsGetInput((prev) => !prev);
  };

  return (
    <S.Wrapper>
      {isGetInput ? (
        <>
          <S.Input
            ref={inputRef}
            onChange={handleInputOnChange}
            placeholder="Image url"
          />
          <S.InputBtn onClick={handleOnInputBtnClick}>Add</S.InputBtn>
        </>
      ) : (
        <>
          <S.HeaderBtn onClick={handleTop}>Top</S.HeaderBtn>
          <S.HeaderBtn onClick={handleAdd}>Add</S.HeaderBtn>
          <S.HeaderBtn onClick={handleBottom}>Bottom</S.HeaderBtn>
        </>
      )}
    </S.Wrapper>
  );
};

export default Header;
