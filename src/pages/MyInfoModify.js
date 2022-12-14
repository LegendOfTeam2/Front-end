// React
import { useState, Fragment, useCallback, useEffect } from 'react';

// Zustand
import useMyPageStore from '../zustand/mypage';
import useMemberStore from '../zustand/member';

// Packages
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import shortid from 'shortid';
import jwt_decode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utils
import { getCookie, removeCookie } from '../utils/cookie';
import { warning, info } from '../utils/toast';

// Components
import UploadImage from '../components/UploadImage';
import HashTagWithIcon from '../components/HashTagWithIcon';
import Header from '../components/Header';

// Elements
import Input from '../elements/Input';

// Assets
import {
  ModifyContainer,
  ModifyBox,
  ModifyNaviContainer,
  ModifyNaviInfo,
  ModifyNaviText,
  ModifyProfileContainer,
  ModifyProfileBox,
  ModifyProfileBoxImg,
  ModifyInputContainer,
  ModifyInputBox,
  ModifyInputTitle,
  ModifyInputText,
  ModifyInputDataBox,
  ModifyInputIconBox,
  ModifyHashTag,
  ModifyHashTagBox,
  ModifyMemberDeleteContainer,
  ModifyMemberDeleteText,
} from '../assets/styles/pages/MyInfoModify.styled';

const MyInfoModify = () => {
  const nicknameDupCheck = useMemberStore((state) => state.nicknameDupCheck);
  const putProfile = useMyPageStore((state) => state.putProfile);
  const getProfileInfo = useMyPageStore((state) => state.getProfileInfo);

  const [nickname, setNickname] = useState('');
  const [nicknameCheck, setNicknameCheck] = useState('');
  const [view, setView] = useState({ nickname: false, intro: false });
  const [tags, setTags] = useState([]);
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const navigate = useNavigate();

  const newProfile = {
    nickname,
    imageUrl: image,
    introduce: intro,
    hashtag: tags,
  };

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case 'nickname': {
          setNickname('');
          break;
        }
        case 'intro': {
          setIntro('');
          break;
        }
        default:
          break;
      }
    },
    [nickname, intro]
  );

  const addTag = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        if (event.target.value.length > 0) {
          if (tags.findIndex((tag) => tag === event.target.value) === -1) {
            setTags([...tags, event.target.value]);
            event.target.value = '';
          } else {
            warning('???????????? ???????????????.');
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
            warning('???????????? ???????????????.');
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

  const onHandelModify = () => {
    if (nickname === '') {
      info('???????????? ????????? ?????????.');
    } else {
      if (nicknameCheck === false) {
        warning('???????????? ??????????????????.');
      } else {
        putProfile(newProfile).then((res) => {
          if (res.success) {
            navigate(`/mypage/${res.data.nickname}`);
          }
        });
      }
    }
  };

  useEffect(() => {
    const nickname = jwt_decode(getCookie('authorization')).sub;
    getProfileInfo(nickname).then((res) => {
      setNickname(res.nickname);
      setTags(res.hashtag);
      if (res.introduce !== null) setIntro(res.introduce);
      if (res.imageUrl !== null) {
        setImage(res.imageUrl);
        setImageSrc(res.imageUrl);
      }
    });
  }, []);

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
    if (nickname !== '') {
      setView((prev) => {
        return { ...prev, nickname: true };
      });
    } else {
      setView((prev) => {
        return { ...prev, nickname: false };
      });
    }
    if (intro !== '') {
      setView((prev) => {
        return { ...prev, intro: true };
      });
    } else {
      setView((prev) => {
        return { ...prev, intro: false };
      });
    }
  }, [nickname, intro]);

  useEffect(() => {
    if (jwt_decode(getCookie('authorization')).sub === nickname) {
      setNicknameCheck(true);
    } else {
      if (nickname !== '') {
        nicknameDupCheck({ nickname }).then((res) => {
          if (res) {
            setNicknameCheck(true);
          } else {
            setNicknameCheck(false);
          }
        });
      }
    }
  }, [nickname]);

  return (
    <Fragment>
      <Header />
      <ModifyContainer>
        <ToastContainer />
        <ModifyBox>
          <ModifyNaviContainer>
            <ModifyNaviText onClick={() => navigate(-1)}>??????</ModifyNaviText>
            <ModifyNaviInfo>????????? ??????</ModifyNaviInfo>
            <ModifyNaviText onClick={onHandelModify}>??????</ModifyNaviText>
          </ModifyNaviContainer>
          <ModifyProfileContainer>
            <ModifyProfileBox>
              {imageSrc === '' ? (
                <Fragment />
              ) : (
                <ModifyProfileBoxImg src={imageSrc}></ModifyProfileBoxImg>
              )}
              <UploadImage
                width={'300px'}
                height={'300px'}
                setFile={setImage}
                setFileSrc={setImageSrc}
                text={'????????? ?????? ????????????'}
              />
            </ModifyProfileBox>
          </ModifyProfileContainer>
          <ModifyInputContainer>
            <ModifyInputBox>
              <ModifyInputTitle>
                <ModifyInputText>?????????</ModifyInputText>
              </ModifyInputTitle>
              <ModifyInputDataBox>
                {view.nickname ? (
                  <ModifyInputIconBox onClick={() => deleteText('nickname')}>
                    <GrClose className='icon'></GrClose>
                  </ModifyInputIconBox>
                ) : (
                  <Fragment />
                )}
                <Input
                  _type={'text'}
                  _value={nickname}
                  _onChange={(e) => setNickname(e.target.value)}
                  _placeholder={'???????????? ????????? ?????????.'}
                  _style={{
                    width: '100%',
                    height: 'auto',
                    bd_px: '0px',
                    pd_top: '35px',
                    pd_bottom: '35px',
                    pd_right: '30px',
                    ft_size: '20',
                    line_height: '29',
                    bg_color: 'transparent',
                  }}
                />
              </ModifyInputDataBox>
            </ModifyInputBox>
            <ModifyInputBox>
              <ModifyInputTitle>
                <ModifyInputText>????????????</ModifyInputText>
              </ModifyInputTitle>
              <ModifyInputDataBox>
                <ModifyHashTag
                  onKeyDown={addTag}
                  placeholder='Tab, Enter??? ???????????? ????????? ?????????.'
                  maxLength={100}
                />
                {tags.length === 0 ? (
                  <Fragment />
                ) : (
                  <ModifyHashTagBox>
                    {tags.map((tag) => {
                      return (
                        <HashTagWithIcon
                          key={shortid.generate()}
                          tag={tag}
                          removeTag={removeTag}
                        />
                      );
                    })}
                  </ModifyHashTagBox>
                )}
              </ModifyInputDataBox>
            </ModifyInputBox>
            <ModifyInputBox>
              <ModifyInputTitle>
                <ModifyInputText>??????</ModifyInputText>
              </ModifyInputTitle>
              <ModifyInputDataBox>
                {view.intro ? (
                  <ModifyInputIconBox onClick={() => deleteText('intro')}>
                    <GrClose className='icon' />
                  </ModifyInputIconBox>
                ) : (
                  <Fragment />
                )}
                <Input
                  _type={'text'}
                  _value={intro}
                  _onChange={(e) => setIntro(e.target.value)}
                  _placeholder={'????????? ???????????? ?????? ????????? ?????????.'}
                  _style={{
                    width: '100%',
                    height: 'auto',
                    bd_px: '0px',
                    pd_top: '35px',
                    pd_bottom: '35px',
                    pd_right: '30px',
                    ft_size: '20',
                    line_height: '29',
                    bg_color: 'transparent',
                  }}
                />
              </ModifyInputDataBox>
            </ModifyInputBox>
            <ModifyMemberDeleteContainer>
              <ModifyMemberDeleteText onClick={() => navigate('/withdrawal')}>
                ????????????
              </ModifyMemberDeleteText>
            </ModifyMemberDeleteContainer>
          </ModifyInputContainer>
        </ModifyBox>
      </ModifyContainer>
    </Fragment>
  );
};

export default MyInfoModify;
