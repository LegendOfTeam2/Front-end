import { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = () => {
  const pathName = window.location.pathname;
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('G-J6HZZ0W1SF');
      ReactGA.set({ page: pathName });
      ReactGA.pageview(pathName);
    }
  }, [pathName]);
  return <></>;
};

export default Analytics;