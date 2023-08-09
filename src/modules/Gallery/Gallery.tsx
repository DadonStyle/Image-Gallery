import { useRef, useState } from 'react';
import ImgComponent from '../../components/ImgComponent/ImgComponent';
import useFetchImgs from '../../hooks/useFetchImgs';
import { IPhoto } from '../../services/interface';
import S from './styled';
import Header from '../Header/Header';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { formatUrl } from './helper';
import BouncingDotsLoader from '../../components/Loader/Loader';

const Gallery = () => {
  var notyf = new Notyf();
  const [imgArr, setImgArr] = useState<Array<IPhoto>>([]);
  const [driveId, setDriveId] = useState<string>('');
  const query = useFetchImgs(setImgArr, driveId);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollTop = () =>
    topRef.current?.scrollIntoView({ behavior: 'smooth' });

  const scrollBottom = () =>
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

  const addToArr = (url: string, description: string = 'default') => {
    if (!url) return;
    const isDriveImg = url.includes('drive.google');
    let urlToPass = url;
    if (isDriveImg) {
      urlToPass = formatUrl(url);
    }
    const newArr = [...imgArr];
    newArr.push({
      url: urlToPass,
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
    notyf.success('Img removed successfully');
  };

  if (query.isFetching) return <BouncingDotsLoader />;

  return (
    <>
      <S.TopAnchor ref={topRef} />
      <Header
        addToArr={addToArr}
        scrollBottom={scrollBottom}
        scrollTop={scrollTop}
        setDriveId={setDriveId}
        driveId={driveId}
        refetch={query.refetch}
      />
      <S.GridLayout>
        {imgArr.map((item: IPhoto, index: number) => (
          <ImgComponent
            url={item.url} // make sure the component can add google drive files too in the url
            qualityUrl={item?.qualityUrl || item.url}
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
