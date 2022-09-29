// React
import { Fragment } from 'react';

// Components
import Header from '../components/Header';

// Assets
import { Promotional } from '../assets/images/image';
import {
  PromotionalContainer,
  PromotionalDiv,
  PromotionalImg,
} from '../assets/styles/pages/PromotionalPage.styled';

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
