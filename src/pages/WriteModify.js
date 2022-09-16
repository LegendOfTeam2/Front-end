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
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../utils/cookie';
// Components
import UploadImage from '../components/UploadImage';
import HashTagWithIcon from '../components/HashTagWithIcon';
import WriteModifyModal from '../components/modal/WriteModifyModal';
// Elements
import Input from '../elements/Input';
import Button from '../elements/Button';
// Essets
import {
  WriteContainer,
  WriteBox,
  WriteIconContainer,
  WriteCollaboContainer,
  WriteCollaboIcon,
  WriteCollaboText,
  WriteSingerContainer,
  WriteSingerIcon,
  WriteSingerText,
  WriteMakerContainer,
  WriteMakerIcon,
  WriteMakerText,
  WriteForm,
  WriteInputContainer,
  WriteInputIcon,
  WriteImageTextContainer,
  WriteImageBox,
  WriteImagePreviewImg,
  WriteTextBox,
  WriteTextIconBox,
  WriteTextArea,
  WriteAudioContainer,
  WriteAudioBox,
  WriteAudioIcon,
  WriteAudioText,
  WriteAudioInput,
  WriteAudioPreView,
  WriteAudioPreviewFile,
  WriteAudioPreviewFileName,
  WriteAudioPreviewFileSize,
  WriteAudioPreviewFileIconMusic,
  WriteAudioPreviewFileIconCancel,
  WriteHashTagContainer,
  WriteHashTagTitle,
  WriteHashTagTitleInfo,
  WriteHashTag,
  WriteHashTagBox,
  WriteButtonContainer,
} from '../assets/styles/pages/Write.styled';

const WriteModify = () => {
  const uploadAudio = useUploadStore((state) => state.uploadAudio);
  const getDetail = usePostStore((state) => state.getDetail);
  const putModifyWrite = usePostStore((state) => state.putModifyWrite);

  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [audio, setAudio] = useState('');
  const [tags, setTags] = useState([]);
  const [collaborate, setCollaborate] = useState(false);
  const [position, setPosition] = useState('');
  const [isOpen, setOpen] = useState(false);

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

  const Params = useParams();
  const navigate = useNavigate();

  const modifyPost = {
    postId: Params.postid,
    position,
    title,
    content: intro,
    nickname: jwt_decode(getCookie('authorization')).sub,
    lyrics,
    imageUrl: image,
    mediaUrl: audio,
    tags,
    collaborate,
  };

  const onHandleModal = () => {
    setOpen(true);
  };

  const onCancel = useCallback(() => {
    setOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (title !== '') titleIconRef.current.style.display = 'block';
    else titleIconRef.current.style.display = 'none';
    if (lyrics !== '') lyricsIconRef.current.style.display = 'block';
    else lyricsIconRef.current.style.display = 'none';
    if (intro !== '') introIconRef.current.style.display = 'block';
    else introIconRef.current.style.display = 'none';
  }, [title, lyrics, intro]);

  useEffect(() => {
    getDetail(Params).then((res) => {
      if (res.success) {
        const data = res.data;
        console.log(data);
        setTitle(data.title);
        setLyrics(data.lyrics);
        setIntro(data.content);
        setImage(data.imageUrl);
        setImageSrc(data.imageUrl);
        setAudio(data.mediaUrl);
        setCollaborate(data.collaborate);
        setPosition(data.position);
        setTags(data.tags);

        console.log(data.mediaUrl);

        audioNameRef.current.innerText = data.mediaUrl.split('-').slice(-1);
        audioBoxRef.current.style.display = 'block';

        if (data.collaborate) {
          collaboBoxRef.current.style.borderColor = '#28CA7C';
          collaboBoxRef.current.style.backgroundColor = '#28CA7C';
          collaboTextRef.current.style.color = '#ffffff';
        } else {
          collaboBoxRef.current.style.borderColor = '#b4b4b4';
          collaboBoxRef.current.style.backgroundColor = '#ffffff';
          collaboTextRef.current.style.color = '#b4b4b4';
        }

        if (data.position) {
          singerBoxRef.current.style.borderColor = '#28CA7C';
          singerBoxRef.current.style.backgroundColor = '#28CA7C';
          singerTextRef.current.style.color = '#ffffff';
          makerBoxRef.current.style.borderColor = '#b4b4b4';
          makerBoxRef.current.style.backgroundColor = '#ffffff';
          makerTextRef.current.style.color = '#b4b4b4';
        } else {
          makerBoxRef.current.style.borderColor = '#28CA7C';
          makerBoxRef.current.style.backgroundColor = '#28CA7C';
          makerTextRef.current.style.color = '#ffffff';
          singerBoxRef.current.style.borderColor = '#b4b4b4';
          singerBoxRef.current.style.backgroundColor = '#ffffff';
          singerTextRef.current.style.color = '#b4b4b4';
        }
      } else {
        alert('다시 시도 부탁드립니다.');
        navigate(-1);
      }
    });
  }, []);

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
    const fileName = fileBlob.name;
    const fileSize = String((parseInt(fileBlob.size) / 1024 / 1024).toFixed(2));
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
        setAudio('');
      }
    });
  };

  const onDropHandle = (e) => {
    e.preventDefault();

    addPreview(e.dataTransfer.files[0]);

    const formData = new FormData();
    formData.append('mediaUrl', e.dataTransfer.files[0]);
    uploadAudio(formData).then((res) => {
      if (res.success) {
        setAudio(res.data[0]);
      } else {
        alert('오디오 업로드에 실패했습니다.');
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

  const deleteAudio = useCallback(() => {
    audioBoxRef.current.style.display = 'none';
    setAudio('');
  }, [audio]);

  // Hashtag
  const addTag = useCallback(
    (event) => {
      if (event.key === 'Enter') {
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
  const onHandlePostionAlert = (newPosition) => {
    switch (newPosition) {
      case 'Singer': {
        if (position !== newPosition) {
          alert('포지션 변경은 불가능합니다');
        }
        break;
      }
      case 'Maker': {
        if (position !== newPosition) {
          alert('포지션 변경은 불가능합니다');
        }
        break;
      }
      default: {
        break;
      }
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

  const modifyPostHandle = (e) => {
    e.preventDefault();
    console.log(modifyPost);
    if (audio === '') {
      alert('오디오를 삽입해주세요.');
    } else {
      putModifyWrite(modifyPost).then((res) => {
        if(res.success) {
          alert('게시글 수정이 완료되었습니다.');
          navigate(-1);
        }
      });
    }
  };

  return (
    <Fragment>
      <WriteModifyModal isOpen={isOpen} onCancel={onCancel} />
      <WriteContainer>
        <WriteBox>
          <WriteIconContainer onClick={onHandleModal}>
            <GrClose color='#cecece'></GrClose>
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
            onClick={() => onHandlePostionAlert('Singer')}
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
            onClick={() => onHandlePostionAlert('Maker')}
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
          <WriteForm id='write' onSubmit={(e) => modifyPostHandle(e)}>
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
                _placeholder={'작업물의 제목을 입력해 주세요.(30자 이내)'}
                _maxLength={30}
                _style={{
                  width: '776px',
                  height: 'auto',
                  pd_left: '19px',
                  pd_top: '20px',
                  pd_bottom: '20px',
                  pd_right: '40px',
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
                  text={'이미지 삽입하기'}
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
                  maxLength={20000}
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
                  maxLength={20000}
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
                maxLength={100}
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
              _text={'게시글 수정'}
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
    </Fragment>
  );
};

export default WriteModify;
