// React
import { useRef, useState, useCallback, useEffect } from 'react';

// Package
import { GrClose } from 'react-icons/gr';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';

// Element
import Button from '../elements/Button';
import Input from '../elements/Input';

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
} from '../assets/styles/pages/SignIn.styled';

const SignIn = () => {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const KAKAO_REDIRECT_URI = 'http://localhost:3000/kakao/callback';
  const GOOGLE_REDIRECT_URI = 'http://localhost:3000/google/callback';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailIconRef = useRef();
  const passwordIconRef = useRef();

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
  }, [email, password]);

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case 'email': {
          setEmail('');
          break;
        }
        case 'password': {
          setPassword('');
          break;
        }
        default:
          break;
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
              아티스트님,
              <br />
              어서오세요
            </SignInBoxIntroTop>
            <SignInBoxIntroBottom>
              리드미에서 여러분의 재능을 마음껏 뽐내 주세요
            </SignInBoxIntroBottom>
          </SignInBoxIntroContainer>
          <SignInBoxForm>
            <SignInBoxInputContainer>
              <SignInBoxInputGroup>
                <SignInBoxInputGroupTitle>아이디</SignInBoxInputGroupTitle>
                <SignInboxInputGroupData>
                  <SignUpDataInputGroupIcon
                    onClick={() => deleteText('email')}
                    ref={emailIconRef}
                  >
                    <GrClose className='icon-cancel'></GrClose>
                  </SignUpDataInputGroupIcon>
                  <Input
                    _type={'text'}
                    _placeholder={'아이디를 입력해 주세요'}
                    _value={email}
                    _onChange={(event) => setEmail(event.target.value)}
                    _autoComplete={'username'}
                    _style={{
                      height: 'auto',
                      ft_size: '14',
                      pd_top: '20px',
                      pd_bottom: '20px',
                      pd_left: '19px',
                      pd_right: '40px',
                      bd_radius: '10px',
                      bd_px: '1px',
                      bd_color: '#d9d9d9',
                    }}
                  />
                </SignInboxInputGroupData>
              </SignInBoxInputGroup>
              <SignInBoxInputGroup>
                <SignInBoxInputGroupTitle>비밀번호</SignInBoxInputGroupTitle>
                  <SignInboxInputGroupData>
                    <SignUpDataInputGroupIcon
                      onClick={() => deleteText('password')}
                      ref={passwordIconRef}
                    >
                      <GrClose className='icon-cancel'></GrClose>
                    </SignUpDataInputGroupIcon>
                    <Input
                      _type={'password'}
                      _placeholder={'비밀번호를 입력해주세요'}
                      _value={password}
                      _onChange={(event) => setPassword(event.target.value)}
                      _autoComplete={'current-password'}
                      _style={{
                        height: 'auto',
                        ft_size: '14',
                        pd_top: '20px',
                        pd_bottom: '20px',
                        pd_left: '19px',
                        pd_right: '40px',
                        bd_radius: '10px',
                        bd_px: '1px',
                        bd_color: '#d9d9d9',
                      }}
                    />
                  </SignInboxInputGroupData>
              </SignInBoxInputGroup>
            </SignInBoxInputContainer>
            <SignInBoxButtonContainer>
              <SignInBoxButtonBox>
                <Button
                  _type={'submit'}
                  _text={'로그인'}
                  _style={{
                    color: 'white',
                    bg_color: 'black',
                    width: '100%',
                    height: 'auto',
                    pd_top: '15px',
                    pd_bottom: '16px',
                    ft_size: '20',
                    line_height: '28',
                    ft_weight: '800',
                    bd_radius: '10px',
                  }}
                />
              </SignInBoxButtonBox>
            </SignInBoxButtonContainer>
          </SignInBoxForm>
          <SignInBoxDetailContainer>
            <SignInBoxDetailBox>
              <SignInBoxDetailAutoSignIn>
                <Input
                  _type={'checkbox'}
                  _style={{
                    width: '18px',
                    height: '18px',
                    bd_px: '1px',
                    bd_radius: '3px',
                    bd_color: '#d9d9d9',
                  }}
                />
                <SignInBoxDetailAutoSignInText>
                  로그인 유지
                </SignInBoxDetailAutoSignInText>
              </SignInBoxDetailAutoSignIn>
              <SignInBoxDetailFind>
                <SignInBoxDetailFindText cursor={'pointer'}>
                  아이디 찾기
                </SignInBoxDetailFindText>
                <SignInBoxDetailFindText>|</SignInBoxDetailFindText>
                <SignInBoxDetailFindText cursor={'pointer'}>
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
                <SignInBoxSignUpQuestionText color={'#000000'}>
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
                  <RiKakaoTalkFill className='icon-kakao'></RiKakaoTalkFill>
                </SignInBoxSocialBoxSocialIcon>
                <SignInBoxSocialBoxSocialIcon
                  onClick={() => {
                    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
                  }}
                >
                  <FcGoogle className='icon-google'></FcGoogle>
                </SignInBoxSocialBoxSocialIcon>
              </SignInBoxSocialBoxSocialGroup>
            </SignInBoxSocialBox>
          </SignInBoxSocialContainer>
        </SignInBoxMain>
        <SignInBoxCover></SignInBoxCover>
      </SignInBox>
    </SignInContainer>
  );
};

export default SignIn;
