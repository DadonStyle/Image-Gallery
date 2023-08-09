import { useQuery } from 'react-query';
import axios from 'axios';
import { IPhoto } from '../services/interface';

const useFetchImgs = (setImgArr: (arr: Array<IPhoto>) => void) => {
  const query = useQuery({
    queryKey: ['imgArr'],
    queryFn: async () => {
      const res = await axios.get(
        'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=2000'
      );
      if (res?.data) setImgArr(res?.data?.photos);
    },
  });

  return query;
};

export default useFetchImgs;
