// React
import { useState, useCallback, useEffect, Fragment } from 'react';

// Zustand
import useMemberStore from '../zustand/member';
import usePlayerStore from '../zustand/player';

// Package
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Element
import Button from '../elements/Button';
import Input from '../elements/Input';

// Utils
import { warning } from '../utils/toast';

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
  SignInBoxIntroTopRegularSpan,
  SignInBoxIntroTopBoldSpan,
  BackgroudColor,
} from '../assets/styles/pages/SignIn.styled';
import {
  GooglePhoto,
  KakaoTalkPhoto,
  SignInBackground,
  SignInBackgroundSm,
  Xbox20,
} from '../assets/images/image';

const SignIn = () => {
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const KAKAO_REDIRECT_URI = 'https://rhythme.shop/kakao/callback';
  const GOOGLE_REDIRECT_URI = 'https://rhythme.shop/google/callback';

  const getPlayList = usePlayerStore((state) => state.getPlayList);
  const setPlaying = usePlayerStore((state) => state.setPlaying);
  const viewStateChange = usePlayerStore((state) => state.viewStateChange);
  const setCurrentSongMember = usePlayerStore(
    (state) => state.setCurrentSongMember
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState({ email: false, password: false });

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const signInMember = useMemberStore((state) => state.signInMember);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1920px)',
  });

  useEffect(() => {
    if (email !== '') {
      setView((prev) => {
        return { ...prev, email: true };
      });
    } else {
      setView((prev) => {
        return { ...prev, email: false };
      });
    }
    if (password !== '') {
      setView((prev) => {
        return { ...prev, password: true };
      });
    } else {
      setView((prev) => {
        return { ...prev, password: false };
      });
    }
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

  const signInAccount = useCallback(
    async (e) => {
      e.preventDefault();
      if (email === '') {
        warning('????????? ??????????????????.');
      } else if (emailRegExp.test(email) === false) {
        warning('????????? ????????? ?????? ????????????.');
      } else {
        signInMember({ email, password }).then((res) => {
          if (res) {
            getPlayList().then((res) => {
              if (res.success) {
                if (res.data.length > 0) {
                  const firstSong = [...res.data].sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                  )[0];
                  setCurrentSongMember(firstSong);
                  setPlaying(false);
                  viewStateChange(false);
                }
              }
            });
            navigate('/');
          } else {
            alert(
              '????????? ?????????????????????\n????????? / ??????????????? ?????? ??????????????????'
            );
          }
        });
      }
    },
    [email, password]
  );

  return (
    <Fragment>
      <BackgroudColor />
      <SignInContainer>
        <SignInBox>
          <SignInBoxMain>
            <SignInBoxIntroContainer>
              <SignInBoxIntroTop>
                <SignInBoxIntroTopRegularSpan>
                  ???????????????,
                </SignInBoxIntroTopRegularSpan>
                <br />
                <SignInBoxIntroTopBoldSpan>
                  ???????????????!
                </SignInBoxIntroTopBoldSpan>
              </SignInBoxIntroTop>
              <SignInBoxIntroBottom>
                ??????????????? ???????????? ????????? ????????? ?????? ?????????
              </SignInBoxIntroBottom>
            </SignInBoxIntroContainer>
            <SignInBoxForm onSubmit={(e) => signInAccount(e)}>
              <SignInBoxInputContainer>
                <SignInBoxInputGroup>
                  <SignInBoxInputGroupTitle>?????????</SignInBoxInputGroupTitle>
                  <SignInboxInputGroupData>
                    {view.email ? (
                      <SignUpDataInputGroupIcon
                        onClick={() => deleteText('email')}
                      >
                        <img src={Xbox20} alt='Xbox' className='icon-cancel' />
                      </SignUpDataInputGroupIcon>
                    ) : (
                      <Fragment />
                    )}
                    {isSmallScreen ? (
                      <Input
                        _type={'text'}
                        _placeholder={'???????????? ????????? ?????????'}
                        _value={email}
                        _onChange={(event) => setEmail(event.target.value)}
                        _autoComplete={'username'}
                        _style={{
                          height: 'auto',
                          ft_size: '14',
                          pd_top: '15px',
                          pd_bottom: '15px',
                          pd_left: '19px',
                          pd_right: '40px',
                          bd_radius: '10px',
                          bd_px: '1px',
                          bd_color: '#d9d9d9',
                        }}
                      />
                    ) : (
                      <Input
                        _type={'text'}
                        _placeholder={'???????????? ????????? ?????????'}
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
                    )}
                  </SignInboxInputGroupData>
                </SignInBoxInputGroup>
                <SignInBoxInputGroup>
                  <SignInBoxInputGroupTitle>????????????</SignInBoxInputGroupTitle>
                  <SignInboxInputGroupData>
                    {view.password ? (
                      <SignUpDataInputGroupIcon
                        onClick={() => deleteText('password')}
                      >
                        <img src={Xbox20} alt='Xbox' className='icon-cancel' />
                      </SignUpDataInputGroupIcon>
                    ) : (
                      <Fragment />
                    )}
                    {isSmallScreen ? (
                      <Input
                        _type={'password'}
                        _placeholder={'??????????????? ????????? ?????????.'}
                        _value={password}
                        _onChange={(event) => setPassword(event.target.value)}
                        _style={{
                          height: 'auto',
                          ft_size: '14',
                          pd_top: '15px',
                          pd_bottom: '15px',
                          pd_left: '19px',
                          pd_right: '40px',
                          bd_radius: '10px',
                          bd_px: '1px',
                          bd_color: '#d9d9d9',
                        }}
                      />
                    ) : (
                      <Input
                        _type={'password'}
                        _placeholder={'??????????????? ????????? ?????????.'}
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
                    )}
                  </SignInboxInputGroupData>
                </SignInBoxInputGroup>
              </SignInBoxInputContainer>
              <SignInBoxButtonContainer>
                <SignInBoxButtonBox>
                  {isSmallScreen ? (
                    <Button
                      _type={'submit'}
                      _text={'?????????'}
                      _style={{
                        color: 'white',
                        bg_color: '#28CA7C',
                        width: '100%',
                        height: 'auto',
                        pd_top: '10px',
                        pd_bottom: '11px',
                        ft_size: '20',
                        line_height: '28',
                        ft_weight: '800',
                        bd_radius: '10px',
                      }}
                    />
                  ) : (
                    <Button
                      _type={'submit'}
                      _text={'?????????'}
                      _style={{
                        color: 'white',
                        bg_color: '#28CA7C',
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
                  )}
                </SignInBoxButtonBox>
              </SignInBoxButtonContainer>
            </SignInBoxForm>
            <SignInBoxDetailContainer>
              <SignInBoxDetailBox>
                <SignInBoxDetailAutoSignIn>
                  {isSmallScreen ? (
                    <Input
                      _type={'checkbox'}
                      _style={{
                        width: '13px',
                        height: '13px',
                        bd_px: '1px',
                        bd_radius: '3px',
                        bd_color: '#d9d9d9',
                      }}
                    />
                  ) : (
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
                  )}
                  <SignInBoxDetailAutoSignInText>
                    ????????? ??????
                  </SignInBoxDetailAutoSignInText>
                </SignInBoxDetailAutoSignIn>
                <SignInBoxDetailFind>
                  <SignInBoxDetailFindText cursor={'pointer'}>
                    ????????? ??????
                  </SignInBoxDetailFindText>
                  <SignInBoxDetailFindText>|</SignInBoxDetailFindText>
                  <SignInBoxDetailFindText cursor={'pointer'}>
                    ???????????? ??????
                  </SignInBoxDetailFindText>
                </SignInBoxDetailFind>
              </SignInBoxDetailBox>
            </SignInBoxDetailContainer>
            <SignInBoxSignUpContainer>
              <SignInBoxSignUpBox>
                <SignInBoxSignUpQuestion>
                  <SignInBoxSignUpQuestionText>
                    ????????? ????????????????
                  </SignInBoxSignUpQuestionText>
                  <SignInBoxSignUpQuestionText
                    onClick={() => navigate('/signupcheck')}
                    color={'#000000'}
                  >
                    ??????????????????
                  </SignInBoxSignUpQuestionText>
                </SignInBoxSignUpQuestion>
              </SignInBoxSignUpBox>
            </SignInBoxSignUpContainer>
            <SignInBoxSocialContainer>
              <SignInBoxSocialBox>
                <SignInBoxSocialBoxTitle>
                  SNS???????????? ???????????? ??????????????????.
                </SignInBoxSocialBoxTitle>
                <SignInBoxSocialBoxSocialGroup>
                  <SignInBoxSocialBoxSocialIcon
                    onClick={() => {
                      window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
                    }}
                  >
                    <img
                      src={KakaoTalkPhoto}
                      alt='???????????????'
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
                      alt='???????????????'
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
            <SignInBoxIcon onClick={() => navigate('/')}>
              <GrClose color='red' className='icon-cancel' />
            </SignInBoxIcon>
          </SignInBoxCover>
        </SignInBox>
      </SignInContainer>
    </Fragment>
  );
};

export default SignIn;
