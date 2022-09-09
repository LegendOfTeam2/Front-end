// React
import { Fragment } from 'react';

// Assets
import { LoadingImage } from '../assets/styles/components/Loading.styled';

const Loading = () => {
  return (
    <Fragment>
      <LoadingImage src={require('../assets/images/loading.gif')} />
    </Fragment>
  );
};

export default Loading;
