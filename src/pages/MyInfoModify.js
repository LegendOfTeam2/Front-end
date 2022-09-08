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

import styled from 'styled-components';

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
  );
};

export default MyInfoModify;

export const ModifyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-position: fixed;
  background-color: #eeeceb;
  display: flex;
  justify-content: center;
`;
export const ModifyBox = styled.div`
  width: 1024px;
  height: auto;
`;
export const ModifyNaviContainer = styled.div`
  margin-top: 187px;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 356px;
`;
export const ModifyNaviInfo = styled.span`
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xxxxl};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #28ca7c;
`;
export const ModifyNaviText = styled.span`
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
  &:hover {
    cursor: pointer;
  }
`;
export const ModifyProfileContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 60px 0 60px 0;
  border-bottom: 1px solid #e7e7e7;
`;
export const ModifyProfileBox = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  overflow: hidden;
  position: relative;
`;
export const ModifyProfileBoxImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
export const ModifyInputContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const ModifyInputBox = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
`;
export const ModifyInputTitle = styled.div`
  width: 100%;
  height: auto;
  flex: 1;
  position: relative;
`;
export const ModifyInputText = styled.span`
  position: absolute;
  left: 0;
  top: 35px;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const ModifyInputDataBox = styled.div`
  width: 654.01px;
  height: auto;
  position: relative;
`;
export const ModifyInputIconBox = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  .icon {
    width: 20px;
    height: 20px;
  }
`;
export const ModifyHashTag = styled.input`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.fontSizes.lg};
  font-size: ${(props) => props.theme.fontSizes.xl};
  background-color: transparent;
  padding: 35px 0;
  outline: none;
  border: none;
  &::placeholder {
    color: #b4b4b4;
  }
`;
export const ModifyHashTagBox = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
