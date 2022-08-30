// React
import { useRef, useState, useCallback, useEffect, Fragment } from 'react';

// Redux
import { useDispatch } from 'react-redux/es/exports';
// Package
import { MdOutlineCancel } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

// Element
import Button from '../elements/Button';
import Input from '../elements/Input';

import styled from 'styled-components';

const SignIn = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/kakao/callback';

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
          <SignInBoxInputContainer>
            <SignInBoxInputGroup>
              <SignInBoxInputGroupTitle>아이디</SignInBoxInputGroupTitle>
              <SignInboxInputGroupData>
                <SignUpDataInputGroupIcon
                  onClick={() => deleteText('email')}
                  ref={emailIconRef}
                >
                  <MdOutlineCancel className='icon-cancel'></MdOutlineCancel>
                </SignUpDataInputGroupIcon>
                <Input
                  _type={'text'}
                  _placeholder={'아이디를 입력해 주세요'}
                  _value={email}
                  _onChange={(event) => setEmail(event.target.value)}
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
              <SignInBoxInputGroupAlert>
                <SignInboxInputGroupData>
                  <SignUpDataInputGroupIcon
                    onClick={() => deleteText('password')}
                    ref={passwordIconRef}
                  >
                    <MdOutlineCancel className='icon-cancel'></MdOutlineCancel>
                  </SignUpDataInputGroupIcon>
                  <Input
                    _type={'password'}
                    _placeholder={'비밀번호를 입력해주세요'}
                    _value={password}
                    _onChange={(event) => setPassword(event.target.value)}
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
              </SignInBoxInputGroupAlert>
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
                  line_height: '28.96px',
                  ft_weight: '800',
                  bd_radius: '10px',
                }}
              />
            </SignInBoxButtonBox>
          </SignInBoxButtonContainer>
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
                    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
                  }}
                >
                  <RiKakaoTalkFill className='icon-kakao'></RiKakaoTalkFill>
                </SignInBoxSocialBoxSocialIcon>
                <SignInBoxSocialBoxSocialIcon>
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

export const SignInContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;
export const SignInBox = styled.div`
  width: 961px;
  height: auto;
  display: flex;
`;
export const SignInBoxMain = styled.div`
  width: 470px;
  height: auto;
  border-radius: 30px 0 0 30px;
  box-shadow: 1px 1px 20px 5px grey;
`;
export const SignInBoxIntroContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 31px;
  margin-top: 99px;
`;
export const SignInBoxIntroTop = styled.span`
  width: 100%;
  height: auto;
  text-align: center;
  line-height: ${(props) => props.theme.lineHeight.xxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.xxxl};
`;
export const SignInBoxIntroBottom = styled.span`
  width: 100%;
  height: auto;
  text-align: center;
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-size: ${(props) => props.theme.fontSizes.xs};
`;
export const SignInBoxInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  margin-top: 23px;
`;
export const SignInBoxInputGroup = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const SignInBoxInputGroupTitle = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SignInboxInputGroupData = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const SignUpDataInputGroupIcon = styled.div`
  .icon-cancel {
    position: absolute;
    font-size: ${(props) => props.theme.fontSizes.xxl};
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignInBoxInputGroupAlert = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const SignInBoxButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const SignInBoxButtonBox = styled.div`
  width: 411px;
  height: auto;
`;
export const SignInBoxDetailContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
export const SignInBoxDetailBox = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;
export const SignInBoxDetailAutoSignIn = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  gap: 14px;
`;
export const SignInBoxDetailAutoSignInText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
`;
export const SignInBoxDetailFind = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  gap: 20.5px;
`;
export const SignInBoxDetailFindText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  color: #a3a3a3;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  &:hover {
    cursor: ${(props) => (props.cursor ? props.cursor : 'none')};
  }
`;
export const SignInBoxSignUpContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const SignInBoxSignUpBox = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  justify-content: flex-end;
`;
export const SignInBoxSignUpQuestion = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const SignInBoxSignUpQuestionText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: ${(props) => (props.color ? props.color : '#a3a3a3')};
  line-height: ${(props) => props.theme.lineHeight.xxs};
  cursor: pointer;
`;
export const SignInBoxSocialContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 23px 0 28px 0;
`;
export const SignInBoxSocialBox = styled.div`
  width: 411px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;
export const SignInBoxSocialBoxTitle = styled.span`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeight.xs};
  text-align: center;
`;
export const SignInBoxSocialBoxSocialGroup = styled.div`
  width: 100%;
  height: 87px;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  .icon-kakao {
    width: 60px;
    height: 60px;
    background-color: #fee500;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px grey;
    &:hover {
      cursor: pointer;
    }
  }
  .icon-google {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px grey;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const SignInBoxSocialBoxSocialIcon = styled.div`
  width: auto;
  height: auto;
`;
export const SignInBoxCover = styled.div`
  width: 491px;
  height: auto;
  background-color: #cecece;
  border-radius: 0 30px 30px 0;
  box-shadow: 1px 1px 20px 5px grey;
`;
