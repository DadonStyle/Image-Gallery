import { useQuery } from 'react-query';
import axios from 'axios';
import { IPhoto } from '../services/interface';
import { gapi } from 'gapi-script';
import { useState } from 'react';

// init for google api
const initAPI = async () => {
  await gapi.client.init({
    apiKey: 'AIzaSyAnJ4r9UaJqwkUFwLEtr2fEAKSL21yMkJs',
    clientId:
      '526237855420-jr8gq0shveat3hksa8jl4pgmtnhik0tl.apps.googleusercontent.com',
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
    ],
    scope: 'https://www.googleapis.com/auth/drive.readonly',
  });
};

// function to fetch from google api
const fetchFromDrive = async (driveId: string) => {
  if (driveId.length < 1) return;
  await gapi.load('client', initAPI);
  let response;
  try {
    response = await gapi.client?.drive?.files.list({
      q: `'${driveId}' in parents`,
      fields: 'files(id)',
    });
  } catch (err) {
    console.error(err);
  }
  const imgUrls = response.result.files.map((file: any, index: number) => {
    return {
      url: `https://drive.google.com/thumbnail?id=${file.id}`,
      qualityUrl: `https://drive.google.com/uc?export=view&id=${file.id}`, // better resolution img (1m photos will crush the app with this resolution)
      id: index,
    };
  });
  if (!imgUrls) return [];
  return imgUrls;
};

interface paginationState {
  count: number;
  numPage: number;
}

const useFetchImgs = (
  setImgArr: (arr: Array<IPhoto>) => void,
  driveId: string
) => {
  const PAGE_COUNT = 20;
  const [pagination, setPagination] = useState<paginationState>({
    count: PAGE_COUNT,
    numPage: 1,
  });
  const query = useQuery({
    queryKey: ['imgArr'],
    queryFn: async () => {
      if (driveId.length > 0) {
        const res = await fetchFromDrive(driveId);
        setImgArr(res);
        return;
      }

      const res = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=${pagination.count}`
      );

      setPagination((prev) => ({
        count: prev.count + PAGE_COUNT,
        numPage: prev.count + 1,
      }));
      if (res?.data) setImgArr(res?.data?.photos);
    },
    retry: 1,
  });

  return query;
};

export default useFetchImgs;
