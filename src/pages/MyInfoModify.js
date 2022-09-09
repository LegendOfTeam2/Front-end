// React
import { useState, Fragment, useCallback, useEffect } from 'react';

// Packages
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import shortid from 'shortid';

// Components
import UploadImage from '../components/UploadImage';
import HashTagWithIcon from '../components/HashTagWithIcon';

// Elements
import Input from '../elements/Input';

// Assets
import {
  BackgroundCover,
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
  ModifyHashTagBox
} from '../assets/styles/pages/MyInfoModify.styled'

const MyInfoModify = () => {
  const [nickname, setNickname] = useState('');
  const [tags, setTags] = useState([]);
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const navigate = useNavigate();

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

  return (
    <Fragment>
      <BackgroundCover />
      <ModifyContainer>
        <ModifyBox>
          <ModifyNaviContainer>
            <ModifyNaviText onClick={() => navigate(-1)}>취소</ModifyNaviText>
            <ModifyNaviInfo>프로필 수정</ModifyNaviInfo>
            <ModifyNaviText>완료</ModifyNaviText>
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
                text={'프로필 사진 변경하기'}
              ></UploadImage>
            </ModifyProfileBox>
          </ModifyProfileContainer>
          <ModifyInputContainer>
            <ModifyInputBox>
              <ModifyInputTitle>
                <ModifyInputText>닉네임</ModifyInputText>
              </ModifyInputTitle>
              <ModifyInputDataBox>
                <ModifyInputIconBox>
                  <GrClose className='icon'></GrClose>
                </ModifyInputIconBox>
                <Input
                  _type={'text'}
                  _value={nickname}
                  _onChange={(e) => setNickname(e.target.value)}
                  _placeholder={'leeyoungji'}
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
                ></Input>
              </ModifyInputDataBox>
            </ModifyInputBox>
            <ModifyInputBox>
              <ModifyInputTitle>
                <ModifyInputText>해쉬태그</ModifyInputText>
              </ModifyInputTitle>
              <ModifyInputDataBox>
                <ModifyHashTag
                  onKeyDown={addTag}
                  placeholder='Tab, Enter로 구분하여 입력해 주세요.'
                  maxLength={100}
                ></ModifyHashTag>
                {tags.length === 0 ? (
                  <Fragment></Fragment>
                ) : (
                  <ModifyHashTagBox>
                    {tags.map((tag) => {
                      console.log(tag);
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
                <ModifyInputText>소개</ModifyInputText>
              </ModifyInputTitle>
              <ModifyInputDataBox>
                <ModifyInputIconBox>
                  <GrClose className='icon'></GrClose>
                </ModifyInputIconBox>
                <Input
                  _type={'text'}
                  _value={intro}
                  _onChange={(e) => setIntro(e.target.value)}
                  _placeholder={'감성을 전달하는 이영지'}
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
                ></Input>
              </ModifyInputDataBox>
            </ModifyInputBox>
          </ModifyInputContainer>
        </ModifyBox>
      </ModifyContainer>
    </Fragment>
  );
};

export default MyInfoModify;