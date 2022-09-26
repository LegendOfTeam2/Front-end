// React
import { Fragment } from 'react';
import Header from '../components/Header';

import styled from 'styled-components';
import { Promotional } from '../assets/images/image';

const PromotionalPage = () => {
  return (
    <Fragment>
      <Header />
      <PromotionalContainer>
        <PromotionalDiv>
          <PromotionalImg src={Promotional} alt='홍보 사진 ' />
        </PromotionalDiv>
      </PromotionalContainer>
    </Fragment>
  );
};

export default PromotionalPage;

export const PromotionalContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1B1E2F;
`;

export const PromotionalDiv = styled.div`
  width: auto;
  height: auto;
  margin-top: 120px;
`;

export const PromotionalImg = styled.img`
  width: 1000px;
  height: auto;
`;

