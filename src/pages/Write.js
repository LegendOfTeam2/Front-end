// React
import { useState, useRef, Fragment, useCallback, useEffect } from 'react';

// Zustand
import useUploadStore from '../zustand/upload';
import usePostStore from '../zustand/post';

// Packages
import { GrClose, GrAdd } from 'react-icons/gr';
import { ImHeadphones } from 'react-icons/im';
import { GiMicrophone } from 'react-icons/gi';
import { SiBeatsbydre } from 'react-icons/si';
import shortid from 'shortid';
import jwt_decode from 'jwt-decode';

// Components
import UploadImage from '../components/UploadImage';
import HashTagWithIcon from '../components/HashTagWithIcon';

// Elements
import Input from '../elements/Input';
import Button from '../elements/Button';

import styled from 'styled-components';
import { getCookie } from '../utils/cookie';

const Write = () => {
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [audio, setAudio] = useState('');
  const [audioName, setAudioName] = useState('');
  const [tags, setTags] = useState([]);
  const [collaborate, setCollaborate] = useState(false);
  const [position, setPosition] = useState('');

  const uploadAudio = useUploadStore((state) => state.uploadAudio);
  const addPost = usePostStore((state) => state.addPost);

  const collaboBoxRef = useRef();
  const collaboIconRef = useRef();
  const collaboTextRef = useRef();
  const singerBoxRef = useRef();
  const singerIconRef = useRef();
  const singerTextRef = useRef();
  const makerBoxRef = useRef();
  const makerIconRef = useRef();
  const makerTextRef = useRef();
  const uploadInputRef = useRef();

  const newPost = {
    position: 'Singer',
    title,
    content: intro,
    // nickname: jwt_decode(getCookie('authorization')).sub,
    lyrics,
    imageUrl: image,
    mediaUrl: audio,
    tags,
    collaborate: true,
  };

  // Audio
  const addPreview = (fileBlob) => {
    console.log(fileBlob);
  };

  const onUploadAudio = (e) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('mediaUrl', e.target.files[0]);
    uploadAudio(formData).then((res) => {
      if (res.success) {
        setAudio(res.data[0]);
      } else {
        alert('오디오 업로드에 실패했습니다.');
        audioName('');
        setAudio('');
      }
    });
  };

  const onDropHandle = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('mediaUrl', e.target.files[0]);
    uploadAudio(formData).then((res) => {
      if (res.success) {
        setAudio(res.data[0]);
      } else {
        alert('오디오 업로드에 실패했습니다.');
        audioName('');
        setAudio('');
      }
    });
  };

  const onDragOverHandle = (e) => {
    e.preventDefault();
  };

  const uploadHandle = () => {
    uploadInputRef.current.click();
  };

  // Hashtag
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

  // Position
  const choosePostion = (position) => {
    switch (position) {
      case 'singer':
        singerBoxRef.current.style.backgroundColor = '#28CA7C';
        singerIconRef.current.style.color = 'white';
        singerTextRef.current.style.color = 'white';
        makerBoxRef.current.style.backgroundColor = 'transparent';
        setPosition('Singer');
        break;
      case 'maker':
        makerBoxRef.current.style.backgroundColor = '#28CA7C';
        makerIconRef.current.style.color = 'white';
        makerTextRef.current.style.color = 'white';
        singerTextRef.current.style.backgroundColor = 'transparent';
        setPosition('Maker');
        break;
      default:
        break;
    }
  };

  // Collabo
  const changeCollaborateStatus = () => {
    // collaboIconRef.current.style.backgroundColor = '#28CA7C'
    setCollaborate(!collaborate);
  };

  const addPostHandle = (e) => {
    e.preventDefault();

    addPost(newPost).then((res) => {
      console.log(res);
    });
  };

  return (
    <WriteContainer>
      <WriteBox>
        <WriteIconContainer>
          <GrClose></GrClose>
        </WriteIconContainer>
        <WriteCollaboContainer
          onClick={changeCollaborateStatus}
          ref={collaboBoxRef}
        >
          <WriteCollaboIcon ref={collaboIconRef}>
            <ImHeadphones className='icon' />
          </WriteCollaboIcon>
          <WriteCollaboText ref={collaboTextRef}>콜라보</WriteCollaboText>
        </WriteCollaboContainer>
        <WriteSingerContainer
          onClick={() => choosePostion('singer')}
          ref={singerBoxRef}
        >
          <WriteSingerIcon ref={singerIconRef}>
            <GiMicrophone className='icon' />
          </WriteSingerIcon>
          <WriteSingerText ref={singerTextRef}>싱어</WriteSingerText>
        </WriteSingerContainer>
        <WriteMakerContainer
          onClick={() => choosePostion('maker')}
          ref={makerBoxRef}
        >
          <WriteMakerIcon ref={makerIconRef}>
            <SiBeatsbydre className='icon' />
          </WriteMakerIcon>
          <WriteMakerText ref={makerTextRef}>메이커</WriteMakerText>
        </WriteMakerContainer>
        <WriteForm id='write' onSubmit={(e) => addPostHandle(e)}>
          <WriteInputContainer>
            <WriteInputIcon>
              <GrClose className='icon'></GrClose>
            </WriteInputIcon>
            <Input
              _type={'text'}
              _value={title}
              _onChange={(e) => setTitle(e.target.value)}
              _placeholder={'작업물의 제목을 입력해 주세요.'}
              _style={{
                width: '776px',
                height: 'auto',
                pd_left: '19px',
                pd_top: '20px',
                pd_bottom: '20px',
                ft_size: '14',
                line_height: '20',
                bd_radius: '10px',
                bd_color: '#d9d9d9',
              }}
            ></Input>
          </WriteInputContainer>
          <WriteImageTextContainer>
            <WriteImageBox>
              {imageSrc === '' ? (
                <Fragment />
              ) : (
                <WriteImagePreviewImg src={imageSrc}></WriteImagePreviewImg>
              )}
              <UploadImage
                width={'236px'}
                height={'236px'}
                setFile={setImage}
                setFileSrc={setImageSrc}
              ></UploadImage>
            </WriteImageBox>
            <WriteTextBox>
              <WriteTextIconBox>
                <GrClose></GrClose>
              </WriteTextIconBox>
              <WriteTextArea
                placeholder='가사 작성...'
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
              ></WriteTextArea>
            </WriteTextBox>
            <WriteTextBox>
              <WriteTextIconBox>
                <GrClose></GrClose>
              </WriteTextIconBox>
              <WriteTextArea
                placeholder='작업물 설명...'
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                required
              ></WriteTextArea>
            </WriteTextBox>
          </WriteImageTextContainer>
          <WriteAudioContainer>
            <WriteAudioBox
              width={'236px'}
              height={'100px'}
              onClick={uploadHandle}
              onDrop={(e) => onDropHandle(e)}
              onDragOver={(e) => onDragOverHandle(e)}
            >
              <WriteAudioIcon>
                <GrAdd className='icon'></GrAdd>
              </WriteAudioIcon>
              <WriteAudioText>오디오 삽입하기</WriteAudioText>
              <WriteAudioInput
                type={'file'}
                accept={'audio/*'}
                onChange={(e) => {
                  onUploadAudio(e);
                  addPreview(e.target.files[0]);
                }}
                ref={uploadInputRef}
              />
            </WriteAudioBox>
            <WriteAudioPreView></WriteAudioPreView>
          </WriteAudioContainer>
          <WriteHashTagContainer>
            <WriteHashTagTitle>해시태그</WriteHashTagTitle>
            <WriteHashTagTitleInfo>
              아티스트님의 음악 스타일을 나타내세요!
            </WriteHashTagTitleInfo>
            <WriteHashTag
              onKeyDown={addTag}
              placeholder='Tab, Enter로 구분하여 입력해 주세요.'
            />
            {tags.length === 0 ? (
              <Fragment></Fragment>
            ) : (
              <WriteHashTagBox>
                {tags.map((tag) => {
                  return (
                    <HashTagWithIcon
                      key={shortid.generate()}
                      tag={tag}
                      removeTag={removeTag}
                    />
                  );
                })}
              </WriteHashTagBox>
            )}
          </WriteHashTagContainer>
        </WriteForm>
        <WriteButtonContainer>
          <Button
            _type={'submit'}
            _text={'업로드'}
            _style={{
              bd_radius: '5px',
              width: '124px',
              height: '44px',
              bg_color: 'black',
              ft_weight: '800',
              ft_size: '12',
              line_height: '18',
            }}
            _form={'write'}
          ></Button>
        </WriteButtonContainer>
      </WriteBox>
    </WriteContainer>
  );
};
export default Write;

export const WriteContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
export const WriteBox = styled.div`
  width: 961px;
  height: 809px;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 30px;
  box-shadow: 1px 1px 20px 5px grey;
`;
export const WriteIconContainer = styled.div`
  position: absolute;
  top: 26px;
  right: 26px;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  &:hover {
    cursor: pointer;
  }
`;
export const WriteCollaboContainer = styled.div`
  position: absolute;
  top: 102px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #b4b4b4;
  border-bottom: 1px solid #b4b4b4;
  border-left: 1px solid #b4b4b4;
  &:hover {
    cursor: pointer;
  }
`;
export const WriteCollaboBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;
export const WriteCollaboIcon = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  .icon {
    width: 20px;
    height: 20px;
    color: #b4b4b4;
  }
`;
export const WriteCollaboText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
`;
export const WriteSingerContainer = styled.div`
  position: absolute;
  top: 190px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #b4b4b4;
  border-bottom: 1px solid #b4b4b4;
  border-left: 1px solid #b4b4b4;
  &:hover {
    cursor: pointer;
  }
`;
export const WriteSingerBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;
export const WriteSingerIcon = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  .icon {
    width: 20px;
    height: 20px;
    color: #b4b4b4;
  }
`;
export const WriteSingerText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
`;
export const WriteMakerContainer = styled.div`
  position: absolute;
  top: 278px;
  right: 0;
  width: 113px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 8px 0 0 8px;
  border-top: 1px solid #b4b4b4;
  border-bottom: 1px solid #b4b4b4;
  border-left: 1px solid #b4b4b4;
  &:hover {
    cursor: pointer;
  }
`;
export const WriteMakerBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;
export const WriteMakerIcon = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  .icon {
    width: 20px;
    height: 20px;
    color: #b4b4b4;
  }
`;
export const WriteMakerText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-10%, -50%);
  width: auto;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.base};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #b4b4b4;
`;
export const WriteForm = styled.form`
  position: absolute;
  top: 102px;
  left: 48px;
  width: 776px;
  height: auto;
`;
export const WriteInputContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
export const WriteInputIcon = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: ${(props) => props.theme.fontSizes.xxl};
  &:hover {
    cursor: pointer;
  }
`;
export const WriteImageTextContainer = styled.div`
  margin-top: 11px;
  width: 100%;
  height: 236px;
  display: flex;
  gap: 14px;
`;
export const WriteImageBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;
export const WriteImagePreviewImg = styled.img`
  width: 236px;
  height: 236px;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 10px;
`;
export const WriteTextBox = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;
export const WriteTextIconBox = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: ${(props) => props.theme.fontSizes.xl};
  &:hover {
    cursor: pointer;
  }
`;
export const WriteTextArea = styled.textarea`
  width: 255px;
  height: 236px;
  padding: 31px 31px 15px 35px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  resize: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #b4b4b4;
  }
`;
export const WriteAudioContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 14px;
  margin-top: 14px;
`;
export const WriteAudioBox = styled.div`
  width: 236px;
  height: 100px;
  border: 1px solid red;
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const WriteAudioIcon = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
  .icon {
    width: 30px;
    height: 30px;
  }
`;
export const WriteAudioText = styled.span`
  position: absolute;
  z-index: 1;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`;
export const WriteAudioInput = styled.input`
  display: none;
`;

export const WriteAudioPreView = styled.div`
  width: 524px;
  height: 100px;
  border: 1px solid #dedede;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WriteHashTagContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 23px;
`;
export const WriteHashTagTitle = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
export const WriteHashTagTitleInfo = styled.span`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.xxs};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  color: #d9d9d9;
  margin-top: 5px;
`;
export const WriteHashTag = styled.input`
  width: 100%;
  height: auto;
  line-height: ${(props) => props.theme.fontSizes.sm};
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding: 20px 40px 20px 19px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  line-height: ${(props) => props.theme.lineHeight.xs};
  outline: none;
  &::placeholder {
    color: #d9d9d9;
  }
`;
export const WriteHashTagBox = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
`;
export const WriteButtonContainer = styled.div`
  position: absolute;
  right: 14px;
  bottom: 17px;
  width: auto;
  height: auto;
`;