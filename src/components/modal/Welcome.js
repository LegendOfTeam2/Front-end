// React

// Redux

// Package
import { GiJeweledChalice } from "react-icons/gi";

// Element
import Button from "../../elements/Button";

// styled
import {
  TextDiv,
  TextSpan,
  Topicon,
  WlContainer,
  WlDiv,
  WlInBox,
} from "../../assets/styles/components/modal/Welcome.styled";

const Welcome = () => {
  return (
    <WlContainer>
      <WlInBox>
        <Topicon>
          <div>
            <GiJeweledChalice size={115} />
          </div>
        </Topicon>
        <TextDiv>
          <TextSpan>환영합니다.yungji_2님</TextSpan>
          <TextSpan>아티스트님의 작품이 기대됩니다!</TextSpan>
        </TextDiv>
        <WlDiv>
          <div>
            <Button
              _style={{
                width: "528px",
                height: "60px",
                bg_color: "rgba(0, 0, 0, 1)",
                bd_radius: "11px",
                color: "rgba(255, 255, 255, 1)",
                ft_size: "20",
                ft_weight: "700",
              }}
              _text={"나의 작업물을 공유하러 가기"}
            />
          </div>
        </WlDiv>
      </WlInBox>
    </WlContainer>
  );
};

export default Welcome;
