// React
import { Fragment } from 'react';

// Assets
import { LoadingImage, BackgroundCover } from '../assets/styles/components/Loading.styled';

function Loading() {
  return (
    <Fragment>
      <BackgroundCover />
      <LoadingImage src={require('../assets/images/loading.gif')} />
    </Fragment>
  );
};

export default Loading;