import { useEffect } from 'react';

const useScrollWindowBehaviour = () => {
  useEffect(() => window.scrollBy(0, 1), []);
};

export default useScrollWindowBehaviour;
