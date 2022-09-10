// React

// Redux

// Package
import ReactModal from "react-modal";

// Element
import Button from "../../elements/Button";

// styled
import {
  TextDiv,
  TextSpan,
  TextSpanSpan,
  Topicon,
  WlContainer,
  WlDiv,
  WlInBox,
} from "../../assets/styles/components/modal/Welcome.styled";
import { WelcomeMsg } from "../../assets/images/image";
import { useNavigate } from "react-router-dom";

const Welcome = ({ isOpen, onCancel }) => {
  const navigate = useNavigate()

  const handleClickCancel = () => {
    navigate('/signin');
  };

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(20, 20, 20, 0.75)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '620px',
      height: '510px',
      borderRadius: '40px',
      backgroundColor : '#F9F9F9',
    },
  };
  
    
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <WlContainer>
        <WlInBox>
          <Topicon>
            <div>
            <img src={WelcomeMsg} backgrond='white' alt='환영합니다' />
            </div>
          </Topicon>
          <TextDiv>
            <TextSpan>환영합니다! <TextSpanSpan>yungji_2 님</TextSpanSpan></TextSpan>
            <TextSpan>아티스트님의 작품이 기대됩니다!</TextSpan>
          </TextDiv>
          <WlDiv>
            <div>
              <Button
                _style={{
                  width: "528px",
                  height: "60px",
                  bg_color: "rgba(40, 202, 124, 1)",
                  bd_radius: "11px",
                  color: "rgba(255, 255, 255, 1)",
                  ft_size: "20",
                  ft_weight: "700",
                }}
                _text={"로그인 하러가기"}
                _onClick={handleClickCancel}
              />
            </div>
          </WlDiv>
        </WlInBox>
      </WlContainer>
      </ReactModal>
  );
};

export default Welcome;
