// Packages
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Elements
import Button from "../elements/Button";

// Assets
import {
  UpInIcon,
  UpContainer,
  UpInBox,
  UpLogoDiv,
  UpLogoDivDiv,
  UpLogoImg,
  UpTbmBtmDiv,
  UpTbmBtmDivDiv,
  UpTopBtmDiv,
  UpTopTextDiv,
  UpTopTextSpan,
} from "../assets/styles/pages/SignUpCheck.styled";
import { LargeLogo } from "../assets/images/image";

const SignUpCheck = () => {
  const navigate = useNavigate();

  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const KAKAO_REDIRECT_URI = "http://localhost:3000/kakao/callback";
  const GOOGLE_REDIRECT_URI = "http://localhost:3000/google/callback";

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1920px)",
  });

  return (
    <UpContainer>
      <UpInBox>
        <UpInIcon onClick={() => navigate("/")}>
          <GrClose className='icon-cancel' color='red'></GrClose>
        </UpInIcon>
        <UpLogoDiv>
          <UpLogoDivDiv>
            <UpLogoImg src={LargeLogo} />
          </UpLogoDivDiv>
        </UpLogoDiv>

        <UpTopTextDiv>
          <UpTopTextSpan>간편하게 가입하고,</UpTopTextSpan>
          <UpTopTextSpan>아티스트님의 작업을 바로 공유해보세요!</UpTopTextSpan>
        </UpTopTextDiv>

        <UpTopBtmDiv>
          <div>
            {isSmallScreen ? (
              <Button
                _style={{
                  width: "361px",
                  height: "60px",
                  bg_color: "#FEE500",
                  bd_radius: "10px",
                  color: "#121212",
                  ft_weight: "800",
                  ft_size: "20",
                }}
                _text={"카카오톡 간편 가입하기"}
                _onClick={() => {
                  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
                }}
              />
            ) : (
              <Button
                _style={{
                  width: "411px",
                  height: "60px",
                  bg_color: "#FEE500",
                  bd_radius: "10px",
                  color: "black",
                  ft_weight: "800",
                  ft_size: "20",
                }}
                _text={"카카오톡 간편 가입하기"}
                _onClick={() => {
                  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
                }}
              />
            )}
          </div>
          <div>
            {isSmallScreen ? (
              <Button
                _style={{
                  width: "361px",
                  height: "60px",
                  bg_color: "#DA3F32",
                  bd_radius: "10px",
                  color: "rgba(255, 255, 255, 1)",
                  ft_weight: "800",
                  ft_size: "20",
                }}
                _text={"구글 간편 가입하기"}
                _onClick={() => {
                  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
                }}
              />
            ) : (
              <Button
                _style={{
                  width: "411px",
                  height: "60px",
                  bg_color: "#DA3F32",
                  bd_radius: "10px",
                  color: "rgba(255, 255, 255, 1)",
                  ft_weight: "800",
                  ft_size: "20",
                }}
                _text={"구글 간편 가입하기"}
                _onClick={() => {
                  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
                }}
              />
            )}
          </div>
        </UpTopBtmDiv>
        <UpTbmBtmDiv>
          <UpTbmBtmDivDiv>
            <Button
              _style={{
                width: "100%",
                height: "60px",
                bg_color: "rgba(255, 255, 255, 1)",
                bd_radius: "10px",
                color: "rgba(40, 202, 124, 1)",
                ft_weight: "800",
                ft_size: "20",
                bd_px: "1.5px",
                mg_top: "48px",
                bd_color: "rgba(40, 202, 124, 1)",
              }}
              _text={"이메일로 가입하기"}
              _onClick={() => navigate("/signup")}
            />
          </UpTbmBtmDivDiv>
        </UpTbmBtmDiv>
      </UpInBox>
    </UpContainer>
  );
};

export default SignUpCheck;
