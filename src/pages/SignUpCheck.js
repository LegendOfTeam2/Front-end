// React

// Redux

// Package
import { GrGoogle } from "react-icons/gr";
import { RiKakaoTalkFill } from "react-icons/ri";

// Element

import Button from "../elements/Button";

// styled

import {
    Googleicon,
    Kakaoicon,
    UpContainer,
    UpInBox,
    UpLogoDiv,
    UpLogoDivDiv,
    UpTbmBtmDiv,
    UpTbmBtmDivDiv,
    UpTopBtmDiv,
    UpTopTextDiv,
    UpTopTextSpan,
  } from "../assets/styles/elements/SignupCk.styled";


const SignUpCheck = () => {
  return (
    <UpContainer>
      <UpInBox>
        <UpLogoDiv>
          <UpLogoDivDiv></UpLogoDivDiv>
        </UpLogoDiv>

        <UpTopTextDiv>
          <UpTopTextSpan>간편하게 가입하고,</UpTopTextSpan>
          <UpTopTextSpan>아티스트님의 작업을 바로 공유해보세요!</UpTopTextSpan>
        </UpTopTextDiv>

        <UpTopBtmDiv>
          <div>
            <Kakaoicon>
              <RiKakaoTalkFill className='icon-kakao' />
            </Kakaoicon>
            <Button
              _style={{
                width: "411px",
                height: "60px",
                bg_color: "rgba(255, 255, 255, 1)",
                bd_radius: "10px",
                color: "rgba(0, 0, 0, 1)",
                ft_weight: "500",
                ft_size: "18",
                bd_px: "1.5px",
              }}
              _text={"카톡 간편 가입하기"}
            />
          </div>
          <div>
            <Googleicon>
              <GrGoogle className='icon-google' />
            </Googleicon>
            <Button
              _style={{
                width: "411px",
                height: "60px",
                bg_color: "rgba(0, 0, 0, 1)",
                bd_radius: "10px",
                color: "rgba(255, 255, 255, 1)",
                ft_weight: "500",
                ft_size: "18",
                bd_px: "1.5px",
              }}
              _text={"구글 간편 가입하기"}
            />
          </div>
        </UpTopBtmDiv>
        <UpTbmBtmDiv>
          <UpTbmBtmDivDiv>
            <Button
              _style={{
                width: "411px",
                height: "60px",
                bg_color: "rgba(255, 255, 255, 1)",
                bd_radius: "10px",
                color: "rgba(0, 0, 0, 1)",
                ft_weight: "500",
                ft_size: "18",
                bd_px: "1.5px",
                mg_top: "48px",
              }}
              _text={"이메일로 가입하기"}
            />
          </UpTbmBtmDivDiv>
        </UpTbmBtmDiv>
      </UpInBox>
    </UpContainer>
  );
};

export default SignUpCheck;
