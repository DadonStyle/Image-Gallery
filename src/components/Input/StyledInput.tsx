import { useRef } from 'react';
import S from './styled';

interface IInput {
  handleInputOnChange: (item: any) => void;
  handleOnInputBtnClick: (item: any) => any;
  placeHolder: string;
}

const StyledInput = ({
  handleInputOnChange,
  handleOnInputBtnClick,
  placeHolder,
}: IInput) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = () =>
    handleInputOnChange(inputRef.current?.value || '');

  return (
    <>
      <S.Input
        ref={inputRef}
        onChange={handleOnChange}
        placeholder={placeHolder}
      />
      <S.InputBtn onClick={handleOnInputBtnClick}>Add</S.InputBtn>
    </>
  );
};

export default StyledInput;
