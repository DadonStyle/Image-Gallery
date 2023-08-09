import { useRef, useState } from 'react';
import ImgComponent from '../../components/ImgComponent/ImgComponent';
import useFetchImgs from '../../hooks/useFetchImgs';
import { IPhoto } from '../../services/interface';
import S from './styled';
import Header from '../Header/Header';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const Gallery = () => {
  var notyf = new Notyf();
  const [imgArr, setImgArr] = useState<Array<IPhoto>>([]);
  const query = useFetchImgs(setImgArr);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollTop = () =>
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollBottom = () =>
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

  const addToArr = (url: string, description: string = 'default') => {
    const allImages = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];
    const isImgValid = allImages.find(
      (item) => item === url.split('.').pop()?.toLowerCase()
    );
    if (!isImgValid) {
      notyf.error('Url not valid');
      return;
    }
    const newArr = [...imgArr];
    newArr.push({
      url: url,
      description: description,
      arrPosition: imgArr.length,
      id: Math.random(), // id is passed to the key property when we iterate over the array
    });
    setImgArr(newArr);
    notyf.success('Img added successfully');
    scrollBottom();
  };

  const removeFromArr = (itemArrIndex: number) => {
    const newArr = [...imgArr]; // new arr to not mutate state
    newArr.splice(itemArrIndex, 1);
    setImgArr(newArr);
  };

  if (query.isFetching) return <div>Loader</div>;

  return (
    <>
      <S.TopAnchor ref={topRef} />
      <Header
        addToArr={addToArr}
        scrollBottom={scrollBottom}
        scrollTop={scrollTop}
      />
      <S.GridLayout>
        {imgArr.map((item: IPhoto, index: number) => (
          <ImgComponent
            url={item.url}
            description={item?.description}
            arrPosition={index}
            key={item?.id}
            addToArr={addToArr}
            removeFromArr={removeFromArr}
          />
        ))}
        <S.BottomAnchor ref={bottomRef} />
      </S.GridLayout>
    </>
  );
};

export default Gallery;
