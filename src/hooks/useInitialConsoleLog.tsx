import { useEffect } from 'react';

const useInitialConsoleLog = () => {
  useEffect(() => {
    console.log(
      '%c When debugging in mobile view, please refresh the page, animated mouse need to update',
      'color:green; font-size: medium;'
    );
    console.log(
      '%c header slightly move in chrome debugging view, something with chrome, on mobile its not persist',
      'color:red; font-size: medium;'
    );
  }, []);
};

export default useInitialConsoleLog;
