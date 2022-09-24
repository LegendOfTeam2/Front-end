// React
import { Fragment, useState, useEffect, useRef, useCallback } from 'react';

// Zustand
import useMemberStore from '../zustand/member';

// Packages
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';
import { debounce } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import HashTagWithIcon from '../components/HashTagWithIcon';
import UploadImage from '../components/UploadImage';
import WelcomeModal from '../components/modal/WelcomeModal';

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
  BackgroudColor,
} from '../assets/styles/pages/SignUp.styled';
import { HidePw, LargeLogo, ShowPw, Xbox20 } from '../assets/images/image';

const SignUp = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    tags: [],
    file: '',
    fileSrc: '',
  });
  const [errors, setErrors] = useState({});
  const [validCheck, setValidCheck] = useState({
    emailDupCheck: false,
    passwordValid: false,
    nicknameDupCheck: false,
  });
  const [views, setViews] = useState({
    email: false,
    passwordDelete: false,
    passwordView: false,
    passwordCheckDelete: false,
    passwordCheckView: false,
    nickname: false,
  });
  const [isOpen, setOpen] = useState(false);
  const [nicknameModal, setNicknameModal] = useState('');

  const emailRef = useRef();
  const emailSpanRef = useRef();
  const passwordRef = useRef();
  const passwordCheckRef = useRef();
  const passwordCheckSpanRef = useRef();
  const nicknameRef = useRef();
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
    email: values.email,
    password: values.password,
    nickname: values.nickname,
    hashtag: values.tags,
    imgUrl: values.file,
  };

  const deleteText = (state) => {
    switch (state) {
      case 'email': {
        setValues((prev) => {
          return { ...prev, email: '' };
        });
        break;
      }
      case 'password': {
        setValues((prev) => {
          return { ...prev, password: '' };
        });
        setViews((prev) => {
          return { ...prev, passwordView: false };
        });
        break;
      }
      case 'passwordCheck': {
        setValues((prev) => {
          return { ...prev, passwordCheck: '' };
        });
        setViews((prev) => {
          return { ...prev, passwordCheckView: false };
        });
        break;
      }
      case 'nickname': {
        setValues((prev) => {
          return { ...prev, nickname: '' };
        });
        break;
      }
      default:
        break;
    }
  };

  const viewPassword = useCallback(
    (state) => {
      switch (state) {
        case 'password': {
          if (values.password === '') {
            break;
          } else {
            const type = passwordRef.current.type;
            if (type === 'password') {
              setViews((prev) => {
                return { ...prev, passwordView: true };
              });
            } else {
              setViews((prev) => {
                return { ...prev, passwordView: false };
              });
            }
            break;
          }
        }
        case 'passwordCheck': {
          if (values.passwordCheck === '') {
            break;
          } else {
            const type = passwordCheckRef.current.type;
            if (type === 'password') {
              setViews((prev) => {
                return { ...prev, passwordCheckView: true };
              });
            } else {
              setViews((prev) => {
                return { ...prev, passwordCheckView: false };
              });
            }
            break;
          }
        }
        default:
          break;
      }
    },
    [values.password, values.passwordCheck]
  );

  const addTag = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (event.target.value.length > 0) {
          if (
            values.tags.findIndex((tag) => tag === event.target.value) === -1
          ) {
            const newTag = event.target.value;
            setValues((prev) => {
              return { ...prev, tags: [...prev.tags, newTag] };
            });
            event.target.value = '';
          } else {
            toast.warning(`중복되는 태그입니다.`, {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 1500,
              draggablePercent: 60,
              hideProgressBar: true,
            });
          }
        }
      }

      if (event.keyCode === 9) {
        event.preventDefault();
        if (event.target.value.length > 0) {
          if (
            values.tags.findIndex((tag) => tag === event.target.value) === -1
          ) {
            const newTag = event.target.value;
            setValues((prev) => {
              return { ...prev, tags: [...prev.tags, newTag] };
            });
            event.target.value = '';
          } else {
            toast.warning(`중복되는 태그입니다.`, {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 1500,
              draggablePercent: 60,
              hideProgressBar: true,
            });
          }
        }
      }
    },
    [values.tags]
  );

  const removeTag = useCallback(
    (removedTag) => {
      const newTags = values.tags.filter((tag) => tag !== removedTag);
      setValues((prev) => {
        return { ...prev, tags: newTags };
      });
    },
    [values.tags]
  );

  const checkEmail = useCallback(
    debounce((email) => {
      if (emailRegExp.test(email) === false) {
        emailSpanRef.current.innerText = '이메일 형식에 맞지 않습니다';
        emailSpanRef.current.style.color = '#f2153e';
        setValidCheck((prev) => {
          return { ...prev, emailDupCheck: false };
        });
      } else {
        emailDupCheck({ email }).then((res) => {
          if (res) {
            emailSpanRef.current.innerText = '사용가능한 이메일입니다';
            emailSpanRef.current.style.color = 'rgba(40, 202, 124, 1)';
            setValidCheck((prev) => {
              return { ...prev, emailDupCheck: false };
            });
          } else {
            emailSpanRef.current.innerText = '중복되는 이메일입니다';
            emailSpanRef.current.style.color = '#f2153e';
            setValidCheck((prev) => {
              return { ...prev, emailDupCheck: false };
            });
          }
        });
      }
    }, 500),
    [values.email]
  );

  const checkNickname = useCallback(
    debounce((nickname) => {
      nicknameDupCheck({ nickname }).then((res) => {
        if (res) {
          nicknameSpanRef.current.innerText = '사용가능한 닉네임입니다';
          nicknameSpanRef.current.style.color = 'rgba(40, 202, 124, 1)';
          setValidCheck((prev) => {
            return { ...prev, nicknameDupCheck: true };
          });
        } else {
          nicknameSpanRef.current.innerText = '중복되는 닉네임입니다';
          nicknameSpanRef.current.style.color = '#f2153e';
          setValidCheck((prev) => {
            return { ...prev, nicknameDupCheck: false };
          });
        }
      });
    }, 500),
    [values.nickname]
  );

  const setFile = (file) => {
    setValues((prev) => {
      return { ...prev, file };
    });
  };

  const setFileSrc = (fileSrc) => {
    setValues((prev) => {
      return { ...prev, fileSrc };
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    if (validCheck.emailDupCheck) {
      emailRef.current.focus();
      emailSpanRef.current.style.color = '#f2153e';
      emailSpanRef.current.innerText = '중복되는 이메일입니다.';
    } else {
      if (validCheck.passwordValid === false) {
        passwordRef.current.focus();
        alert('유효하지 않은 패스워드입니다.');
      } else {
        if (values.password !== values.passwordCheck) {
          passwordCheckRef.current.focus();
          alert('패스워드가 일치하지 않습니다.');
        } else {
          if (validCheck.nicknameDupCheck === false) {
            nicknameRef.current.focus();
            nicknameSpanRef.current.style.color = '#f2153e';
            nicknameSpanRef.current.innerText = '중복되는 닉네임입니다.';
          } else {
            signUpMember(newMember).then((res) => {
              if (res.success) {
                setNicknameModal(values.nickname);
                setOpen(true);
              }
            });
          }
        }
      }
    }
  };

  useEffect(() => {
    if (values.password === '' && values.passwordCheck === '') {
      passwordCheckSpanRef.current.innerText = '';
    } else {
      if (values.password !== values.passwordCheck) {
        passwordCheckSpanRef.current.style.color = '#f2153e';
        passwordCheckSpanRef.current.innerText = '입력한 비밀번호와 다릅니다';
      } else {
        passwordCheckSpanRef.current.innerText = '비밀번호가 일치합니다';
        passwordCheckSpanRef.current.style.color = 'rgba(40, 202, 124, 1)';
      }
    }
  }, [values.passwordCheck]);

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
    if (values.email !== '') {
      checkEmail(values.email);
    } else {
      emailSpanRef.current.innerText = '';
      emailSpanRef.current.style.color = '';
    }
  }, [values.email]);

  useEffect(() => {
    if (values.nickname !== '') {
      checkNickname(values.nickname);
    } else {
      nicknameSpanRef.current.innerText = '';
      nicknameSpanRef.current.style.color = '';
    }
  }, [values.nickname]);

  useEffect(() => {
    if (values.email !== '') {
      setViews((prev) => {
        return { ...prev, email: true };
      });
    } else {
      setViews((prev) => {
        return { ...prev, email: false };
      });
    }
    if (values.password !== '') {
      setViews((prev) => {
        return { ...prev, passwordDelete: true };
      });
    } else {
      setViews((prev) => {
        return { ...prev, passwordDelete: false };
      });
    }
    if (values.passwordCheck !== '') {
      setViews((prev) => {
        return { ...prev, passwordCheckDelete: true };
      });
    } else {
      setViews((prev) => {
        return { ...prev, passwordCheckDelete: false };
      });
    }
    if (values.nickname !== '') {
      setViews((prev) => {
        return { ...prev, nickname: true };
      });
    } else {
      setViews((prev) => {
        return { ...prev, nickname: false };
      });
    }
  }, [values]);

  useEffect(() => {
    if (values.password.search(regExpEngLg) >= 0) {
      passwordEngLgRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordEngLgRef.current.style.color = '#cecece';
    }

    if (values.password.search(regExpEngSm) >= 0) {
      passwordEngSmRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordEngSmRef.current.style.color = '#cecece';
    }

    if (values.password.search(regExpSpecial) >= 0) {
      passwordSpecailRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordSpecailRef.current.style.color = '#cecece';
    }

    if (values.password.search(regExpNum) >= 0) {
      passwordNumRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordNumRef.current.style.color = '#cecece';
    }

    if (values.password.length >= 6 && values.password.length <= 20) {
      passwordLengthRef.current.style.color = 'rgba(40, 202, 124, 1)';
    } else {
      passwordLengthRef.current.style.color = '#cecece';
    }

    if (
      values.password.search(regExpEngLg) >= 0 &&
      values.password.search(regExpEngSm) >= 0 &&
      values.password.search(regExpSpecial) >= 0 &&
      values.password.search(regExpNum) >= 0 &&
      values.password.length >= 6 &&
      values.password.length <= 20
    ) {
      setValidCheck((prev) => {
        return { ...prev, passwordValid: true };
      });
    } else {
      setValidCheck((prev) => {
        return { ...prev, passwordValid: false };
      });
    }
  }, [values.password]);

  return (
    <Fragment>
      <BackgroudColor />
      <ToastContainer />
      <SignUpContainer>
        <WelcomeModal isOpen={isOpen} nickname={nicknameModal} />
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
                <SignUpBoxInputGroupTitle>
                  이메일(필수)
                </SignUpBoxInputGroupTitle>
                <SignUpboxInputGroupData>
                  {views.email ? (
                    <SignUpDataInputGroupIcon
                      onClick={() => deleteText('email')}
                    >
                      <img src={Xbox20} alt='Xbox' className='icon-cancel' />
                    </SignUpDataInputGroupIcon>
                  ) : (
                    <Fragment />
                  )}
                  <Input
                    _type={'text'}
                    _placeholder={'아이디를 입력해 주세요.'}
                    _value={values.email}
                    _onChange={(e) =>
                      setValues((prev) => {
                        return { ...prev, email: e.target.value };
                      })
                    }
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
                  {views.passwordDelete ? (
                    <SignUpDataInputGroupIcon
                      onClick={() => deleteText('password')}
                    >
                      <img
                        src={Xbox20}
                        alt='Xbox'
                        className='icon-password-cancel'
                      />
                    </SignUpDataInputGroupIcon>
                  ) : (
                    <Fragment />
                  )}
                  {views.passwordView ? (
                    <img
                      src={ShowPw}
                      alt='패스워드 보기'
                      className='icon-hidden'
                      onClick={() => viewPassword('password')}
                    />
                  ) : (
                    <img
                      src={HidePw}
                      alt='패스워드 감추기'
                      className='icon-hidden'
                      onClick={() => viewPassword('password')}
                    />
                  )}
                  {views.passwordView ? (
                    <Input
                      _type={'text'}
                      _placeholder={'비밀번호를 입력해주세요.'}
                      _value={values.password}
                      _onChange={(e) =>
                        setValues((prev) => {
                          return { ...prev, password: e.target.value };
                        })
                      }
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
                  ) : (
                    <Input
                      _type={'password'}
                      _placeholder={'비밀번호를 입력해주세요.'}
                      _value={values.password}
                      _onChange={(e) =>
                        setValues((prev) => {
                          return { ...prev, password: e.target.value };
                        })
                      }
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
                  )}
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
                  {views.passwordCheckDelete ? (
                    <SignUpDataInputGroupIcon
                      onClick={() => deleteText('passwordCheck')}
                    >
                      <img
                        src={Xbox20}
                        alt='Xbox'
                        className='icon-password-cancel'
                      />
                    </SignUpDataInputGroupIcon>
                  ) : (
                    <Fragment />
                  )}
                  {views.passwordCheckView ? (
                    <img
                      src={ShowPw}
                      alt='패스워드 보기'
                      className='icon-hidden'
                      onClick={() => viewPassword('passwordCheck')}
                    />
                  ) : (
                    <img
                      src={HidePw}
                      alt='패스워드 감추기'
                      className='icon-hidden'
                      onClick={() => viewPassword('passwordCheck')}
                    />
                  )}
                  {views.passwordCheckView ? (
                    <Input
                      _type={'text'}
                      _placeholder={'비밀번호를 한번 더 입력해 주세요.'}
                      _value={values.passwordCheck}
                      _onChange={(e) =>
                        setValues((prev) => {
                          return { ...prev, passwordCheck: e.target.value };
                        })
                      }
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
                  ) : (
                    <Input
                      _type={'password'}
                      _placeholder={'비밀번호를 한번 더 입력해 주세요.'}
                      _value={values.passwordCheck}
                      _onChange={(e) =>
                        setValues((prev) => {
                          return { ...prev, passwordCheck: e.target.value };
                        })
                      }
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
                  )}
                </SignUpboxInputGroupData>
                <SignUpBoxInputGroupAlert
                  ref={passwordCheckSpanRef}
                ></SignUpBoxInputGroupAlert>
              </SignUpBoxInputGroup>
              <SignUpBoxInputGroup>
                <SignUpBoxInputGroupTitle>
                  닉네임(필수)
                </SignUpBoxInputGroupTitle>
                <SignUpboxInputGroupData>
                  {views.nickname ? (
                    <SignUpDataInputGroupIcon
                      onClick={() => deleteText('nickname')}
                    >
                      <img src={Xbox20} alt='Xbox' className='icon-cancel' />
                    </SignUpDataInputGroupIcon>
                  ) : (
                    <Fragment />
                  )}
                  <Input
                    _type={'text'}
                    _placeholder={'닉네임을 입력해 주세요. (15자리 이내)'}
                    _value={values.nickname}
                    _onChange={(e) =>
                      setValues((prev) => {
                        return { ...prev, nickname: e.target.value };
                      })
                    }
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
                {values.tags.length === 0 ? (
                  <Fragment />
                ) : (
                  <SignUpBoxTagBox>
                    {values.tags.map((tag) => {
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
                width={'45%'}
                setFile={setFile}
                setFileSrc={setFileSrc}
                text={'이미지 삽입하기'}
              />
              <SignUpBoxImagePreviewBox>
                {values.fileSrc === '' ? (
                  <SignUpBoxImagePreviewBoxSkeleton />
                ) : (
                  <SignUpBoxImagePreviewBoxImg
                    src={values.fileSrc}
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
                  ft_weight: '800',
                  line_height: '28',
                  bg_color: '#28CA7C',
                }}
              />
            </SignUpButtonContainer>
          </SignUpForm>
        </SignUpBox>
      </SignUpContainer>
    </Fragment>
  );
};

export default SignUp;
