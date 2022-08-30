import { Fragment } from 'react';
import PlayerMain from '../components/AdudioPlayer/PlayerMain';
import HashTag from '../components/HashTag';
import Header from '../components/Header';



const Main = () => {
  return (
    <Fragment>
      <Header />
      <HashTag />
      <PlayerMain/>
    </Fragment>
  );
};

export default Main;
