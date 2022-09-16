// React
import { Fragment, useState, useEffect, useRef, useCallback } from 'react';

// Zustand
import useMemberStore from '../zustand/member';

// Packages
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import { debounce } from 'lodash';

// Components
import HashTagWithIcon from '../components/HashTagWithIcon';
import UploadImage from '../components/UploadImage';
import Welcome from '../components/modal/Welcome';

// Element
import Input from '../elements/Input';
import Button from '../elements/Button';

// Assets
import {
  SignUpContainer,
  SignUpBox,
  SignUpIcon,
  SignUpLogo,
  SignUpLogoImg,
  SignUpForm,
  SignUpBoxInputContainer,
  SignUpBoxInputGroup,
  SignUpBoxInputGroupTitle,
  SignUpboxInputGroupData,
  SignUpDataInputGroupIcon,
  SignUpBoxInputGroupAlert,
  SignUpBoxPasswordValidGroup,
  SignUpBoxPasswordValidText,
  SignUpBoxInputTagsAlert,
  SignUpBoxInputTags,
  SignUpBoxTagBox,
  SignUpBoxImageContainer,
  SignUpBoxImagePreviewBox,
  SignUpBoxImagePreviewBoxImg,
  SignUpBoxImagePreviewBoxSkeleton,
  SignUpButtonContainer,
} from '../assets/styles/pages/SignUp.styled';
import { HidePw, LargeLogo, ShowPw, Xbox20 } from '../assets/images/image';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckView, setPasswordCheckView] = useState(false);
  const [nickname, setNickname] = useState('');
  const [nicknameCheck, setNicknameCheck] = useState('');
  const [tags, setTags] = useState([]);
  const [file, setFile] = useState('');
  const [fileSrc, setFileSrc] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [nicknameModal, setNicknameModal] = useState('');

  const emailRef = useRef();
  const emailIconRef = useRef();
  const emailSpanRef = useRef();
  const passwordRef = useRef();
  const passwordIconRef = useRef();
  const passwordCheckRef = useRef();
  const passwordCheckIconRef = useRef();
  const passwordCheckSpanRef = useRef();
  const nicknameRef = useRef();
  const nicknameIconRef = useRef();
  const nicknameSpanRef = useRef();

  const passwordNumRef = useRef();
  const passwordSpecailRef = useRef();
  const passwordEngLgRef = useRef();
  const passwordEngSmRef = useRef();
  const passwordLengthRef = useRef();

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const regExpNum = /[0-9]/g;
  const regExpSpecial = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  const regExpEngLg = /[A-Z]/g;
  const regExpEngSm = /[a-z]/g;

  const emailDupCheck = useMemberStore((state) => state.emailDupCheck);
  const nicknameDupCheck = useMemberStore((state) => state.nicknameDupCheck);
  const signUpMember = useMemberStore((state) => state.signUpMember);

  const navigate = useNavigate();

  const newMember = {
    email,
    password,
    nickname,
    hashtag: tags,
    imgUrl: file,
  };

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case 'email': {
          setEmail('');
          break;
        }
        case 'password': {
          setPassword('');
          setPasswordView(false);
          break;
        }
        case 'passwordCheck': {
          setPasswordCheck('');
          setPasswordCheckView(false);
          break;
        }
        case 'nickname': {
          setNickname('');
          break;
        }
        default:
          break;
      }
    },
    [email, password, passwordCheck, nickname]
  );

  const viewPassword = useCallback(
    (state) => {
      switch (state) {
        case 'password': {
          if (password === '') {
            break;
          } else {
            const type = passwordRef.current.type;
            if (type === 'password') {
              passwordRef.current.type = 'text';
              setPasswordView(true);
            } else {
              passwordRef.current.type = 'password';
              setPasswordView(false);
            }
            break;
          }
        }
        case 'passwordCheck': {
          if (passwordCheck === '') {
            break;
          } else {
            const type = passwordCheckRef.current.type;
            if (type === 'password') {
              passwordCheckRef.current.type = 'text';
              setPasswordCheckView(true);
            } else {
              passwordCheckRef.current.type = 'password';
              setPasswordCheckView(false);
            }
            break;
          }
        }
        default:
          break;
      }
    },
    [password, passwordCheck]
  );

  const addTag = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (event.target.value.length > 0) {
          if (tags.findIndex((tag) => tag === event.target.value) === -1) {
            setTags([...tags, event.target.value]);
            event.target.value = '';
          } else {
            alert('중복되는 태그입니다.');
          }
        }
      }

      if (event.keyCode === 9) {
        event.preventDefault();
        if (event.target.value.length > 0) {
          if (tags.findIndex((tag) => tag === event.target.value) === -1) {
            setTags([...tags, event.target.value]);
            event.target.value = '';
          } else {
            alert('중복되는 태그입니다.');
          }
        }
      }
    },
    [tags]
  );

  const removeTag = useCallback(
    (removedTag) => {
      const newTags = tags.filter((tag) => tag !== removedTag);
      setTags(newTags);
    },
    [tags]
  );

  const checkEmail = useCallback(
    debounce((email) => {
      if (emailRegExp.test(email) === false) {
        emailSpanRef.current.innerText = '이메일 형식에 맞지 않습니다';
        emailSpanRef.current.style.color = '#f2153e';
        setEmailCheck(false);
      } else {
        emailDupCheck({ email }).then((res) => {
          if (res) {
            emailSpanRef.current.innerText = '사용가능한 이메일입니다';
            emailSpanRef.current.style.color = 'rgba(40, 202, 124, 1)';
            setEmailCheck(true);
          } else {
            emailSpanRef.current.innerText = '중복되는 이메일입니다';
            emailSpanRef.current.style.color = '#f2153e';
            setEmailCheck(false);
          }
        });
      }
    }, 500),
    [email]
  );

  const checkNickname = useCallback(
    debounce((nickname) => {
      nicknameDupCheck({ nickname }).then((res) => {
        if (res) {
          nicknameSpanRef.current.innerText = '사용가능한 닉네임입니다';
          nicknameSpanRef.current.style.color = 'rgba(40, 202, 124, 1)';
          setNicknameCheck(true);
        } else {
          nicknameSpanRef.current.innerText = '중복되는 닉네임입니다';
          nicknameSpanRef.current.style.color = '#f2153e';
          setNicknameCheck(false);
        }
      });
    }, 500),
    [nickname]
  );

  useEffect(() => {
    if (password === '' && passwordCheck === '') {
      passwordCheckSpanRef.current.innerText = '';
    } else {
      if (password !== passwordCheck) {
        passwordCheckSpanRef.current.style.color = '#f2153e';
        passwordCheckSpanRef.current.innerText = '입력한 비밀번호와 다릅니다';
      } else {
        passwordCheckSpanRef.current.innerText = '비밀번호가 일치합니다';
        passwordCheckSpanRef.current.style.color = 'rgba(40, 202, 124, 1)';
      }
    }
  }, [passwordCheck]);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
    return () => {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
        }
      });
    };
  });

  useEffect(() => {
    if (email !== '') {
      checkEmail(email);
    } else {
      emailSpanRef.current.innerText = '';
      emailSpanRef.current.style.color = '';
    }
  }, [email]);

  useEffect(() => {
    if (nickname !== '') {
      checkNickname(nickname);
    } else {
      nicknameSpanRef.current.innerText = '';
      nicknameSpanRef.current.style.color = '';
    }
  }, [nickname]);

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
    if (passwordCheck !== '')
      passwordCheckIconRef.current.style.display = 'block';
    else passwordCheckIconRef.current.style.display = 'none';
    if (nickname !== '') nicknameIconRef.current.style.display = 'block';
    else nicknameIconRef.current.style.display = 'none';
  }, [email, password, passwordCheck, nickname]);

  useEffect(() => {
    if (password.search(regExpEngLg) >= 0) {
      passwordEngLgRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordEngLgRef.current.style.color = '#cecece';
    }

    if (password.search(regExpEngSm) >= 0) {
      passwordEngSmRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordEngSmRef.current.style.color = '#cecece';
    }

    if (password.search(regExpSpecial) >= 0) {
      passwordSpecailRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordSpecailRef.current.style.color = '#cecece';
    }

    if (password.search(regExpNum) >= 0) {
      passwordNumRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordNumRef.current.style.color = '#cecece';
    }

    if (password.length >= 6 && password.length <= 20) {
      passwordLengthRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordLengthRef.current.style.color = '#cecece';
    }

    if (
      password.search(regExpEngLg) >= 0 &&
      password.search(regExpEngSm) >= 0 &&
      password.search(regExpSpecial) >= 0 &&
      password.search(regExpNum) >= 0 &&
      password.length >= 6 &&
      password.length <= 20
    ) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [password]);

  const onSubmitHandle = useCallback(
    (e) => {
      e.preventDefault();

      if (emailCheck === false) {
        emailRef.current.focus();
        emailSpanRef.current.style.color = '#f2153e';
        emailSpanRef.current.innerText = '중복되는 이메일입니다.';
      } else {
        if (passwordValid === false) {
          passwordRef.current.focus();
          alert('유효하지 않은 패스워드입니다.');
        } else {
          if (password !== passwordCheck) {
            passwordCheckRef.current.focus();
            alert('패스워드가 일치하지 않습니다.');
          } else {
            if (nicknameCheck === false) {
              nicknameRef.current.focus();
              nicknameSpanRef.current.style.color = '#f2153e';
              nicknameSpanRef.current.innerText = '중복되는 닉네임입니다.';
            } else {
              signUpMember(newMember).then((res) => {
                console.log(res);
                if (res.success) {
                  setNicknameModal(nickname);
                  setOpen(true);
                  // navigate('/signin');
                }
              });
            }
          }
        }
      }
    },
    [email, password, passwordCheck, nickname, tags, file, fileSrc]
  );

  return (
    <SignUpContainer>
      <Welcome isOpen={isOpen} nickname={nicknameModal} />
      <SignUpBox>
        <SignUpIcon onClick={() => navigate('/')}>
          <GrClose className='icon-cancel' color='red'></GrClose>
        </SignUpIcon>
        <SignUpForm onSubmit={(e) => onSubmitHandle(e)}>
          <SignUpLogo>
            <SignUpLogoImg src={LargeLogo}></SignUpLogoImg>
          </SignUpLogo>
          <SignUpBoxInputContainer>
            <SignUpBoxInputGroup>
              <SignUpBoxInputGroupTitle>이메일(필수)</SignUpBoxInputGroupTitle>
              <SignUpboxInputGroupData>
                <SignUpDataInputGroupIcon
                  onClick={() => deleteText('email')}
                  ref={emailIconRef}
                >
                  <img src={Xbox20} alt='Xbox' className='icon-cancel' />
                </SignUpDataInputGroupIcon>
                <Input
                  _type={'text'}
                  _placeholder={'아이디를 입력해 주세요.'}
                  _value={email}
                  _onChange={(event) => setEmail(event.target.value)}
                  _ref={emailRef}
                  _style={{
                    width: '100%',
                    height: 'auto',
                    ft_size: '14',
                    pd_top: '20px',
                    pd_bottom: '20px',
                    pd_left: '19px',
                    pd_right: '40px',
                    bd_radius: '10px',
                    bd_px: '1px',
                    bd_color: '#d9d9d9',
                    line_height: '20',
                  }}
                />
              </SignUpboxInputGroupData>
              <SignUpBoxInputGroupAlert
                ref={emailSpanRef}
              ></SignUpBoxInputGroupAlert>
            </SignUpBoxInputGroup>
            <SignUpBoxInputGroup>
              <SignUpBoxInputGroupTitle>
                비밀번호(필수)
              </SignUpBoxInputGroupTitle>
              <SignUpboxInputGroupData>
                <SignUpDataInputGroupIcon
                  onClick={() => deleteText('password')}
                  ref={passwordIconRef}
                >
                  <img
                    src={Xbox20}
                    alt='Xbox'
                    className='icon-password-cancel'
                  />
                </SignUpDataInputGroupIcon>
                {passwordView ? (
                  <>
                    <img
                      src={ShowPw}
                      alt='패스워드 보기'
                      className='icon-hidden'
                      onClick={() => viewPassword('password')}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={HidePw}
                      alt='패스워드 감추기'
                      className='icon-hidden'
                      onClick={() => viewPassword('password')}
                    />
                  </>
                )}
                <Input
                  _type={'password'}
                  _placeholder={'비밀번호를 입력해주세요.'}
                  _value={password}
                  _onChange={(event) => setPassword(event.target.value)}
                  _ref={passwordRef}
                  _style={{
                    width: '100%',
                    height: 'auto',
                    ft_size: '14',
                    pd_top: '20px',
                    pd_bottom: '20px',
                    pd_left: '19px',
                    pd_right: '70px',
                    bd_radius: '10px',
                    bd_px: '1px',
                    bd_color: '#d9d9d9',
                    line_height: '20',
                  }}
                />
              </SignUpboxInputGroupData>
              <SignUpBoxPasswordValidGroup>
                <SignUpBoxPasswordValidText ref={passwordEngLgRef}>
                  영문 대문자
                </SignUpBoxPasswordValidText>
                <SignUpBoxPasswordValidText ref={passwordEngSmRef}>
                  영문 소문자
                </SignUpBoxPasswordValidText>
                <SignUpBoxPasswordValidText ref={passwordNumRef}>
                  숫자
                </SignUpBoxPasswordValidText>
                <SignUpBoxPasswordValidText ref={passwordSpecailRef}>
                  특수문자
                </SignUpBoxPasswordValidText>
                <SignUpBoxPasswordValidText ref={passwordLengthRef}>
                  6-20글자
                </SignUpBoxPasswordValidText>
              </SignUpBoxPasswordValidGroup>
              <SignUpboxInputGroupData>
                <SignUpDataInputGroupIcon
                  onClick={() => deleteText('passwordCheck')}
                  ref={passwordCheckIconRef}
                >
                  <img
                    src={Xbox20}
                    alt='Xbox'
                    className='icon-password-cancel'
                  />
                </SignUpDataInputGroupIcon>
                {passwordCheckView ? (
                  <>
                    <img
                      src={ShowPw}
                      alt='패스워드 보기'
                      className='icon-hidden'
                      onClick={() => viewPassword('passwordCheck')}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={HidePw}
                      alt='패스워드 감추기'
                      className='icon-hidden'
                      onClick={() => viewPassword('passwordCheck')}
                    />
                  </>
                )}
                <Input
                  _type={'password'}
                  _placeholder={'비밀번호를 한번 더 입력해 주세요.'}
                  _value={passwordCheck}
                  _onChange={(event) => setPasswordCheck(event.target.value)}
                  _ref={passwordCheckRef}
                  _style={{
                    width: '100%',
                    height: 'auto',
                    ft_size: '14',
                    pd_top: '20px',
                    pd_bottom: '20px',
                    pd_left: '19px',
                    pd_right: '70px',
                    bd_radius: '10px',
                    bd_px: '1px',
                    bd_color: '#d9d9d9',
                    line_height: '20',
                  }}
                />
              </SignUpboxInputGroupData>
              <SignUpBoxInputGroupAlert
                ref={passwordCheckSpanRef}
              ></SignUpBoxInputGroupAlert>
            </SignUpBoxInputGroup>
            <SignUpBoxInputGroup>
              <SignUpBoxInputGroupTitle>닉네임(필수)</SignUpBoxInputGroupTitle>
              <SignUpboxInputGroupData>
                <SignUpDataInputGroupIcon
                  onClick={() => deleteText('nickname')}
                  ref={nicknameIconRef}
                >
                  <img src={Xbox20} alt='Xbox' className='icon-cancel' />
                </SignUpDataInputGroupIcon>
                <Input
                  _type={'text'}
                  _placeholder={'닉네임을 입력해 주세요. (15자리 이내)'}
                  _value={nickname}
                  _onChange={(event) => setNickname(event.target.value)}
                  _maxLength={'15'}
                  _ref={nicknameRef}
                  _style={{
                    width: '100%',
                    height: 'auto',
                    ft_size: '14',
                    pd_top: '20px',
                    pd_bottom: '20px',
                    pd_left: '19px',
                    pd_right: '40px',
                    bd_radius: '10px',
                    bd_px: '1px',
                    bd_color: '#d9d9d9',
                    line_height: '20',
                  }}
                />
              </SignUpboxInputGroupData>
              <SignUpBoxInputGroupAlert
                ref={nicknameSpanRef}
              ></SignUpBoxInputGroupAlert>
            </SignUpBoxInputGroup>
            <SignUpBoxInputGroup>
              <SignUpBoxInputGroupTitle>해시태그</SignUpBoxInputGroupTitle>
              <SignUpBoxInputTagsAlert>
                아티스트님의 음악 스타일을 나타내세요!
              </SignUpBoxInputTagsAlert>
              <SignUpBoxInputTags
                onKeyDown={addTag}
                placeholder='Tab, Enter로 구분하여 입력해 주세요.'
                maxLength={100}
              />
              {tags.length === 0 ? (
                <Fragment></Fragment>
              ) : (
                <SignUpBoxTagBox>
                  {tags.map((tag) => {
                    return (
                      <HashTagWithIcon
                        key={shortid.generate()}
                        tag={tag}
                        removeTag={removeTag}
                      />
                    );
                  })}
                </SignUpBoxTagBox>
              )}
            </SignUpBoxInputGroup>
          </SignUpBoxInputContainer>
          <SignUpBoxImageContainer>
            <UploadImage
              width={'50%'}
              setFile={setFile}
              setFileSrc={setFileSrc}
              text={'이미지 삽입하기'}
            />
            <SignUpBoxImagePreviewBox>
              {fileSrc === '' ? (
                <SignUpBoxImagePreviewBoxSkeleton />
              ) : (
                <SignUpBoxImagePreviewBoxImg
                  src={fileSrc}
                  alt={'preview-img'}
                />
              )}
            </SignUpBoxImagePreviewBox>
          </SignUpBoxImageContainer>
          <SignUpButtonContainer>
            <Button
              _type={'submit'}
              _text={'가입완료하고 리드미에 데뷔하기!'}
              _style={{
                ft_size: '20',
                width: '100%',
                height: 'auto',
                bd_radius: '10px',
                pd_top: '15px',
                pd_bottom: '16px',
                bg_color: 'black',
                ft_weight: '800',
                line_height: '28',
                bg_color: '#28CA7C',
              }}
            />
          </SignUpButtonContainer>
        </SignUpForm>
      </SignUpBox>
    </SignUpContainer>
  );
};

export default SignUp;
