import { Fragment } from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Fragment>
      <LoadingImage src={require('../assets/images/497.gif')} />
    </Fragment>
  );
};

export default Loading;

export const LoadingImage = styled.img`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
