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
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs';
import shortid from 'shortid';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  const uploadAudio = useUploadStore((state) => state.uploadAudio);
  const addPost = usePostStore((state) => state.addPost);

  const collaboBoxRef = useRef();
  const collaboTextRef = useRef();
  const singerBoxRef = useRef();
  const singerTextRef = useRef();
  const makerBoxRef = useRef();
  const makerTextRef = useRef();
  const uploadInputRef = useRef();
  const titleIconRef = useRef();
  const lyricsIconRef = useRef();
  const introIconRef = useRef();
  const audioBoxRef = useRef();
  const audioNameRef = useRef();
  const audioSizeRef = useRef();

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

  useEffect(() => {
    if (title !== '') titleIconRef.current.style.display = 'block';
    else titleIconRef.current.style.display = 'none';
    if (lyrics !== '') lyricsIconRef.current.style.display = 'block';
    else lyricsIconRef.current.style.display = 'none';
    if (intro !== '') introIconRef.current.style.display = 'block';
    else introIconRef.current.style.display = 'none';
  }, [title, lyrics, intro]);

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case 'title': {
          setTitle('');
          break;
        }
        case 'lyrics': {
          setLyrics('');
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
    [title, lyrics, intro]
  );

  // Audio
  const addPreview = (fileBlob) => {
    console.log(fileBlob);
    const fileName = fileBlob.name;
    const fileSize = String((parseInt(fileBlob.size) / 1024 / 1024).toFixed(2));
    console.dir(audioNameRef.current.style);
    audioNameRef.current.innerText = fileName;
    audioSizeRef.current.innerText = `Size: ${fileSize}MB`;
    audioBoxRef.current.style.display = 'block';
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

    console.log(e.dataTransfer.files[0])
    addPreview(e.dataTransfer.files[0]);

    const formData = new FormData();
    formData.append('mediaUrl', e.dataTransfer.files[0]);
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

  const deleteAudio = useCallback(() => {
    audioBoxRef.current.style.display = 'none';
    setAudio('');
  }, [audio]);

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
        singerBoxRef.current.style.borderColor = '#28CA7C';
        singerBoxRef.current.style.backgroundColor = '#28CA7C';
        singerTextRef.current.style.color = '#ffffff';
        makerBoxRef.current.style.borderColor = '#b4b4b4';
        makerBoxRef.current.style.backgroundColor = '#ffffff';
        makerTextRef.current.style.color = '#b4b4b4';
        setPosition('Singer');
        break;
      case 'maker':
        makerBoxRef.current.style.borderColor = '#28CA7C';
        makerBoxRef.current.style.backgroundColor = '#28CA7C';
        makerTextRef.current.style.color = '#ffffff';
        singerBoxRef.current.style.borderColor = '#b4b4b4';
        singerBoxRef.current.style.backgroundColor = '#ffffff';
        singerTextRef.current.style.color = '#b4b4b4';
        setPosition('Maker');
        break;
      default:
        break;
    }
  };

  // Collabo
  const changeCollaborateStatus = () => {
    if (collaborate) {
      collaboBoxRef.current.style.borderColor = '#b4b4b4';
      collaboBoxRef.current.style.backgroundColor = '#ffffff';
      collaboTextRef.current.style.color = '#b4b4b4';
      setCollaborate(!collaborate);
    } else {
      collaboBoxRef.current.style.borderColor = '#28CA7C';
      collaboBoxRef.current.style.backgroundColor = '#28CA7C';
      collaboTextRef.current.style.color = '#ffffff';
      setCollaborate(!collaborate);
    }
  };

  const addPostHandle = (e) => {
    e.preventDefault();

    if (audio === '') {
      alert('오디오를 삽입해주세요.');
    } else {
      if (position === '') {
        alert('포지션을 선택해주세요.');
      } else {
        addPost(newPost).then((res) => {
          navigate('/');
        });
      }
    }
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
          {collaborate ? (
            <WriteCollaboIcon>
              <ImHeadphones className='icon' color='white' />
            </WriteCollaboIcon>
          ) : (
            <WriteCollaboIcon>
              <ImHeadphones className='icon' />
            </WriteCollaboIcon>
          )}
          <WriteCollaboText ref={collaboTextRef}>콜라보</WriteCollaboText>
        </WriteCollaboContainer>
        <WriteSingerContainer
          onClick={() => choosePostion('singer')}
          ref={singerBoxRef}
        >
          <WriteSingerIcon>
            {position === 'Singer' ? (
              <GiMicrophone className='icon' color='white' />
            ) : (
              <GiMicrophone className='icon' />
            )}
          </WriteSingerIcon>
          <WriteSingerText ref={singerTextRef}>싱어</WriteSingerText>
        </WriteSingerContainer>
        <WriteMakerContainer
          onClick={() => choosePostion('maker')}
          ref={makerBoxRef}
        >
          <WriteMakerIcon>
            {position === 'Maker' ? (
              <SiBeatsbydre className='icon' color='white' />
            ) : (
              <SiBeatsbydre className='icon' />
            )}
          </WriteMakerIcon>
          <WriteMakerText ref={makerTextRef}>메이커</WriteMakerText>
        </WriteMakerContainer>
        <WriteForm id='write' onSubmit={(e) => addPostHandle(e)}>
          <WriteInputContainer>
            <WriteInputIcon
              onClick={() => deleteText('title')}
              ref={titleIconRef}
            >
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
              <WriteTextIconBox
                onClick={() => deleteText('lyrics')}
                ref={lyricsIconRef}
              >
                <GrClose></GrClose>
              </WriteTextIconBox>
              <WriteTextArea
                placeholder='가사 첨부...'
                value={lyrics}
                onChange={(e) => setLyrics(e.target.value)}
              ></WriteTextArea>
            </WriteTextBox>
            <WriteTextBox>
              <WriteTextIconBox
                onClick={() => deleteText('intro')}
                ref={introIconRef}
              >
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
            <WriteAudioPreView>
              <WriteAudioPreviewFile ref={audioBoxRef}>
                <WriteAudioPreviewFileName
                  ref={audioNameRef}
                ></WriteAudioPreviewFileName>
                <WriteAudioPreviewFileSize
                  ref={audioSizeRef}
                ></WriteAudioPreviewFileSize>
                <WriteAudioPreviewFileIconMusic>
                  <BsFillFileEarmarkMusicFill className='icon-music'></BsFillFileEarmarkMusicFill>
                </WriteAudioPreviewFileIconMusic>
                <WriteAudioPreviewFileIconCancel onClick={deleteAudio}>
                  <GrClose className='icon-cancel'></GrClose>
                </WriteAudioPreviewFileIconCancel>
              </WriteAudioPreviewFile>
            </WriteAudioPreView>
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
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: #d9d9d9;
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
export const WriteAudioPreviewFile = styled.div`
  position: relative;
  width: 400px;
  height: 70px;
  background-color: #d2f8df;
  border-radius: 10px;
  display: none;
`;
export const WriteAudioPreviewFileName = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  top: 20%;
  left: 20%;
`;
export const WriteAudioPreviewFileSize = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  top: 60%;
  left: 20%;
`;
export const WriteAudioPreviewFileIconMusic = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  .icon-music {
    width: 30px;
    height: 30px;
  }
`;
export const WriteAudioPreviewFileIconCancel = styled.div`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  .icon-cancel {
    width: 20px;
    height: 20px;
  }
  &:hover {
    cursor: pointer;
  }
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
