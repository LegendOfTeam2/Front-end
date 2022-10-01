// React
import { Fragment } from 'react';

// Packages
import { useNavigate } from 'react-router-dom';

// Components
import Header from '../components/Header';

// Assets
import { Promotional } from '../assets/images/image';
import {
  PromotionalContainer,
  PromotionalDiv,
  PromotionalDivBtn,
  PromotionalImg,
} from '../assets/styles/pages/PromotionalPage.styled';


const PromotionalPage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Header />
      <PromotionalContainer>
        <PromotionalDiv>
          <PromotionalImg src={Promotional} alt='홍보 사진 ' />
          <PromotionalDivBtn onClick={() => navigate('/')}/>
        </PromotionalDiv>
      </PromotionalContainer>
    </Fragment>
  );
};

export default PromotionalPage;