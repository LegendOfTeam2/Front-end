import { Fragment } from 'react';
import PlayerMain from '../components/audioplayer/PlayerMain';
import HashTag from '../components/HashTag';
import Header from '../components/Header';



const Main = () => {
  return (
    <Fragment>
      <Header />
      <HashTag />
      <PlayerMain/>
      <button>웰컴 모달 열기</button>
    </Fragment>
  );
};

export default Main;
