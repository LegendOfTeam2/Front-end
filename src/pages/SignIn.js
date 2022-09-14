// React
import { useRef, useState, useCallback, useEffect } from "react";

// Zustand
import useMemberStore from "../zustand/member";

// Package
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Element
import Button from "../elements/Button";
import Input from "../elements/Input";

// Assets
import {
  SignInContainer,
  SignInBox,
  SignInBoxMain,
  SignInBoxIntroContainer,
  SignInBoxIntroTop,
  SignInBoxIntroBottom,
  SignInBoxForm,
  SignInBoxInputContainer,
  SignInBoxInputGroup,
  SignInBoxInputGroupTitle,
  SignInboxInputGroupData,
  SignUpDataInputGroupIcon,
  SignInBoxButtonContainer,
  SignInBoxButtonBox,
  SignInBoxDetailContainer,
  SignInBoxDetailBox,
  SignInBoxDetailAutoSignIn,
  SignInBoxDetailAutoSignInText,
  SignInBoxDetailFind,
  SignInBoxDetailFindText,
  SignInBoxSignUpContainer,
  SignInBoxSignUpBox,
  SignInBoxSignUpQuestion,
  SignInBoxSignUpQuestionText,
  SignInBoxSocialContainer,
  SignInBoxSocialBox,
  SignInBoxSocialBoxTitle,
  SignInBoxSocialBoxSocialGroup,
  SignInBoxSocialBoxSocialIcon,
  SignInBoxCover,
  SignInBoxIcon,
  SignInBoxIntroTopSpanSpan,
  SignInBoxIntroTopRegularSpan,
  SignInBoxIntroTopBoldSpan,
} from "../assets/styles/pages/SignIn.styled";
import {
  GooglePhoto,
  KakaoTalkPhoto,
  SignInBackground,
  SignInBackgroundSm,
} from "../assets/images/image";

const SignIn = () => {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const KAKAO_REDIRECT_URI = "http://localhost:3000/kakao/callback";
  const GOOGLE_REDIRECT_URI = "http://localhost:3000/google/callback";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailIconRef = useRef();
  const passwordIconRef = useRef();

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const signInMember = useMemberStore((state) => state.signInMember);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1920px)",
  });

  useEffect(() => {
    if (email !== "") emailIconRef.current.style.display = "block";
    else emailIconRef.current.style.display = "none";
    if (password !== "") passwordIconRef.current.style.display = "block";
    else passwordIconRef.current.style.display = "none";
  }, [email, password]);

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case "email": {
          setEmail("");
          break;
        }
        case "password": {
          setPassword("");
          break;
        }
        default:
          break;
      }
    },
    [email, password]
  );

  const signInAccount = useCallback(
    async (e) => {
      e.preventDefault();
      if (email === "") {
        alert("계정을 입력해주세요");
      } else if (emailRegExp.test(email) === false) {
        alert("이메일 형식에 맞지 않습니다");
      } else {
        signInMember({ email, password }).then((res) => {
          if (res) {
            navigate("/");
          } else {
            alert(
              "로그인 실패하였습니다\n이메일 / 패스워드를 다시 확인해주세요"
            );
          }
        });
      }
    },
    [email, password]
  );

  return (
    <SignInContainer>
      <SignInBox>
        <SignInBoxMain>
          <SignInBoxIntroContainer>
            <SignInBoxIntroTop>
              <SignInBoxIntroTopRegularSpan>
                아티스트님,
              </SignInBoxIntroTopRegularSpan>
              <br />
              <SignInBoxIntroTopBoldSpan>어서오세요!</SignInBoxIntroTopBoldSpan>
            </SignInBoxIntroTop>
            <SignInBoxIntroBottom>
              리드미에서 여러분의 재능을 마음껏 뽐내 주세요
            </SignInBoxIntroBottom>
          </SignInBoxIntroContainer>
          <SignInBoxForm onSubmit={(e) => signInAccount(e)}>
            <SignInBoxInputContainer>
              <SignInBoxInputGroup>
                <SignInBoxInputGroupTitle>아이디</SignInBoxInputGroupTitle>
                <SignInboxInputGroupData>
                  <SignUpDataInputGroupIcon
                    onClick={() => deleteText("email")}
                    ref={emailIconRef}
                  >
                    <GrClose className='icon-cancel'></GrClose>
                  </SignUpDataInputGroupIcon>
                  {isSmallScreen ? (
                    <Input
                      _type={"text"}
                      _placeholder={"아이디를 입력해 주세요"}
                      _value={email}
                      _onChange={(event) => setEmail(event.target.value)}
                      _autoComplete={"username"}
                      _style={{
                        height: "auto",
                        ft_size: "14",
                        pd_top: "15px",
                        pd_bottom: "15px",
                        pd_left: "19px",
                        pd_right: "40px",
                        bd_radius: "10px",
                        bd_px: "1px",
                        bd_color: "#d9d9d9",
                      }}
                    />
                  ) : (
                    <Input
                      _type={"text"}
                      _placeholder={"아이디를 입력해 주세요"}
                      _value={email}
                      _onChange={(event) => setEmail(event.target.value)}
                      _autoComplete={"username"}
                      _style={{
                        height: "auto",
                        ft_size: "14",
                        pd_top: "20px",
                        pd_bottom: "20px",
                        pd_left: "19px",
                        pd_right: "40px",
                        bd_radius: "10px",
                        bd_px: "1px",
                        bd_color: "#d9d9d9",
                      }}
                    />
                  )}
                </SignInboxInputGroupData>
              </SignInBoxInputGroup>
              <SignInBoxInputGroup>
                <SignInBoxInputGroupTitle>비밀번호</SignInBoxInputGroupTitle>
                <SignInboxInputGroupData>
                  <SignUpDataInputGroupIcon
                    onClick={() => deleteText("password")}
                    ref={passwordIconRef}
                  >
                    <GrClose className='icon-cancel'></GrClose>
                  </SignUpDataInputGroupIcon>
                  {isSmallScreen ? (
                    <Input
                      _type={"password"}
                      _placeholder={"비밀번호를 입력해 주세요."}
                      _value={password}
                      _onChange={(event) => setPassword(event.target.value)}
                      _style={{
                        height: "auto",
                        ft_size: "14",
                        pd_top: "15px",
                        pd_bottom: "15px",
                        pd_left: "19px",
                        pd_right: "40px",
                        bd_radius: "10px",
                        bd_px: "1px",
                        bd_color: "#d9d9d9",
                      }}
                    />
                  ) : (
                    <Input
                      _type={"password"}
                      _placeholder={"비밀번호를 입력해 주세요."}
                      _value={password}
                      _onChange={(event) => setPassword(event.target.value)}
                      _style={{
                        height: "auto",
                        ft_size: "14",
                        pd_top: "20px",
                        pd_bottom: "20px",
                        pd_left: "19px",
                        pd_right: "40px",
                        bd_radius: "10px",
                        bd_px: "1px",
                        bd_color: "#d9d9d9",
                      }}
                    />
                  )}
                </SignInboxInputGroupData>
              </SignInBoxInputGroup>
            </SignInBoxInputContainer>
            <SignInBoxButtonContainer>
              <SignInBoxButtonBox>
                {isSmallScreen ? (
                  <Button
                    _type={"submit"}
                    _text={"로그인"}
                    _style={{
                      color: "white",
                      bg_color: "#28CA7C",
                      width: "100%",
                      height: "auto",
                      pd_top: "10px",
                      pd_bottom: "11px",
                      ft_size: "20",
                      line_height: "28",
                      ft_weight: "800",
                      bd_radius: "10px",
                    }}
                  />
                ) : (
                  <Button
                    _type={"submit"}
                    _text={"로그인"}
                    _style={{
                      color: "white",
                      bg_color: "#28CA7C",
                      width: "100%",
                      height: "auto",
                      pd_top: "15px",
                      pd_bottom: "16px",
                      ft_size: "20",
                      line_height: "28",
                      ft_weight: "800",
                      bd_radius: "10px",
                    }}
                  />
                )}
              </SignInBoxButtonBox>
            </SignInBoxButtonContainer>
          </SignInBoxForm>
          <SignInBoxDetailContainer>
            <SignInBoxDetailBox>
              <SignInBoxDetailAutoSignIn>
                {isSmallScreen ? (
                  <Input
                    _type={"checkbox"}
                    _style={{
                      width: "13px",
                      height: "13px",
                      bd_px: "1px",
                      bd_radius: "3px",
                      bd_color: "#d9d9d9",
                    }}
                  />
                ) : (
                  <Input
                    _type={"checkbox"}
                    _style={{
                      width: "18px",
                      height: "18px",
                      bd_px: "1px",
                      bd_radius: "3px",
                      bd_color: "#d9d9d9",
                    }}
                  />
                )}
                <SignInBoxDetailAutoSignInText>
                  로그인 유지
                </SignInBoxDetailAutoSignInText>
              </SignInBoxDetailAutoSignIn>
              <SignInBoxDetailFind>
                <SignInBoxDetailFindText cursor={"pointer"}>
                  아이디 찾기
                </SignInBoxDetailFindText>
                <SignInBoxDetailFindText>|</SignInBoxDetailFindText>
                <SignInBoxDetailFindText cursor={"pointer"}>
                  비밀번호 찾기
                </SignInBoxDetailFindText>
              </SignInBoxDetailFind>
            </SignInBoxDetailBox>
          </SignInBoxDetailContainer>
          <SignInBoxSignUpContainer>
            <SignInBoxSignUpBox>
              <SignInBoxSignUpQuestion>
                <SignInBoxSignUpQuestionText>
                  회원이 아니신가요?
                </SignInBoxSignUpQuestionText>
                <SignInBoxSignUpQuestionText
                  onClick={() => navigate("/signupcheck")}
                  color={"#000000"}
                >
                  회원가입하기
                </SignInBoxSignUpQuestionText>
              </SignInBoxSignUpQuestion>
            </SignInBoxSignUpBox>
          </SignInBoxSignUpContainer>
          <SignInBoxSocialContainer>
            <SignInBoxSocialBox>
              <SignInBoxSocialBoxTitle>
                SNS계정으로 간편하게 로그인하세요.
              </SignInBoxSocialBoxTitle>
              <SignInBoxSocialBoxSocialGroup>
                <SignInBoxSocialBoxSocialIcon
                  onClick={() => {
                    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
                  }}
                >
                  <img
                    src={KakaoTalkPhoto}
                    alt='루프있을때'
                    className='icon-kakao'
                  />
                </SignInBoxSocialBoxSocialIcon>
                <SignInBoxSocialBoxSocialIcon
                  onClick={() => {
                    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
                  }}
                >
                  <img
                    src={GooglePhoto}
                    alt='루프있을때'
                    className='icon-google'
                  />
                </SignInBoxSocialBoxSocialIcon>
              </SignInBoxSocialBoxSocialGroup>
            </SignInBoxSocialBox>
          </SignInBoxSocialContainer>
        </SignInBoxMain>
        <SignInBoxCover
          bg_img_lg={SignInBackground}
          bg_img_sm={SignInBackgroundSm}
        >
          <SignInBoxIcon onClick={() => navigate("/")}>
            <GrClose color='red' className='icon-cancel'></GrClose>
          </SignInBoxIcon>
        </SignInBoxCover>
      </SignInBox>
    </SignInContainer>
  );
};

export default SignIn;
