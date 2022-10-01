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
import { TbDragDrop } from 'react-icons/tb';
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive';
import shortid from 'shortid';
import { debounce } from 'lodash';

// Components
import UploadImage from '../components/UploadImage';
import HashTagWithIcon from '../components/HashTagWithIcon';
import WriteModal from '../components/modal/WriteModal';

// Elements
import Input from '../elements/Input';
import Button from '../elements/Button';

// Utils
import { getCookie } from '../utils/cookie';
import { warning } from '../utils/toast';

// Essets
import {
  WriteContainer,
  WriteBox,
  WriteIconContainer,
  WriteCollaboContainer,
  WriteCollaboContainerSuccess,
  WriteCollaboIcon,
  WriteCollaboText,
  WriteCollaboTextSuccess,
  WriteSingerContainer,
  WriteSingerContainerSelected,
  WriteSingerIcon,
  WriteSingerText,
  WriteSingerTextSelected,
  WriteMakerContainer,
  WriteMakerContainerSelected,
  WriteMakerIcon,
  WriteMakerText,
  WriteMakerTextSelected,
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
import { Xbox20 } from '../assets/images/image';

const Write = () => {
  const uploadAudio = useUploadStore((state) => state.uploadAudio);
  const addPost = usePostStore((state) => state.addPost);

  const [values, setValues] = useState({
    title: '',
    lyrics: '',
    intro: '',
    image: '',
    imageSrc: '',
    audio: '',
    tags: [],
    collaborate: false,
    position: 'none',
  });
  const [view, setView] = useState({
    title: false,
    lyrics: false,
    intro: false,
  });
  const [audioPreview, setAudioPreview] = useState({
    fileName: '',
    fileSize: '',
  });
  const [isOpen, setOpen] = useState(false);

  const uploadInputRef = useRef();

  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1920px)',
  });

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    variableWidth: true,
    draggable: true,
  };

  const newPost = {
    position: values.position,
    title: values.title,
    content: values.intro,
    nickname: jwt_decode(getCookie('authorization')).sub,
    lyrics: values.lyrics,
    imageUrl: values.image,
    mediaUrl: values.audio,
    tags: values.tags,
    collaborate: values.collaborate,
  };

  const onHandleModal = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const setImage = (image) => {
    setValues((prev) => {
      return { ...prev, image };
    });
  };

  const setImageSrc = (imageSrc) => {
    setValues((prev) => {
      return { ...prev, imageSrc };
    });
  };

  const deleteText = (state) => {
    switch (state) {
      case 'title': {
        setValues((prev) => {
          return { ...prev, title: '' };
        });
        break;
      }
      case 'lyrics': {
        setValues((prev) => {
          return { ...prev, lyrics: '' };
        });
        break;
      }
      case 'intro': {
        setValues((prev) => {
          return { ...prev, intro: '' };
        });
        break;
      }
      default:
        break;
    }
  };

  const addPreview = (fileBlob) => {
    const fileName = fileBlob.name;
    const fileSize = String((parseInt(fileBlob.size) / 1024 / 1024).toFixed(2));
    setAudioPreview((prev) => {
      return { ...prev, fileName };
    });
    setAudioPreview((prev) => {
      return { ...prev, fileSize: `Size: ${fileSize}MB` };
    });
  };

  const onUploadAudio = (e) => {
    if (!e.target.files) {
      return;
    }

    const formData = new FormData();
    formData.append('mediaUrl', e.target.files[0]);
    uploadAudio(formData).then((res) => {
      if (res.success) {
        setValues((prev) => {
          return { ...prev, audio: res.data[0] };
        });
      } else {
        warning(`오디오 업로드에 실패했습니다.`);
        setValues((prev) => {
          return { ...prev, audio: '' };
        });
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
        setValues((prev) => {
          return { ...prev, audio: res.data[0] };
        });
      } else {
        warning(`오디오 업로드에 실패했습니다.`);
        setValues((prev) => {
          return { ...prev, audio: '' };
        });
      }
    });
  };

  const onDragOverHandle = (e) => {
    e.preventDefault();
  };

  const uploadHandle = () => {
    uploadInputRef.current.click();
  };

  const deleteAudio = () => {
    setValues((prev) => {
      return { ...prev, audio: '' };
    });
  };

  const addTag = useCallback(
    debounce((event) => {
      if (event.key === 'Enter') {
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
            warning(`중복되는 태그입니다.`);
          }
        }
      }

      if (event.key === 'Tab') {
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
            warning(`중복되는 태그입니다.`);
          }
        }
      }
    }, 10),
    [values.tags]
  );

  const removeTag = useCallback(
    (removedTag) => {
      const newTags = values.tags.filter((tag) => tag !== removedTag);
      setValues((prev) => {
        return { ...prev, tags: newTags.reverse() };
      });
    },
    [values.tags]
  );

  const choosePostion = (position) => {
    switch (position) {
      case 'Singer':
        setValues((prev) => {
          return { ...prev, position: 'Singer' };
        });
        break;
      case 'Maker':
        setValues((prev) => {
          return { ...prev, position: 'Maker' };
        });
        break;
      default:
        break;
    }
  };

  const changeCollaborateStatus = () => {
    if (values.collaborate) {
      setValues((prev) => {
        return { ...prev, collaborate: false };
      });
    } else {
      setValues((prev) => {
        return { ...prev, collaborate: true };
      });
    }
  };

  const addPostHandle = () => {
    if (values.title === '') {
      warning(`작업물의 제목을 작성해주세요.`);
    } else {
      if (values.intro === '') {
        warning(`작업물 설명을 작성해주세요.`);
      } else {
        if (values.audio === '') {
          warning(`오디오를 삽입해주세요.`);
        } else {
          if (values.position === 'none') {
            warning(`포지션을 선택해주세요.`);
          } else {
            addPost(newPost).then((res) => {
              if (res.success) {
                navigate('/');
              } else {
                warning(`업로드에 실패했습니다.`);
              }
            });
          }
        }
      }
    }
  };

  useEffect(() => {
    if (values.title !== '') {
      setView((prev) => {
        return { ...prev, title: true };
      });
    } else {
      setView((prev) => {
        return { ...prev, title: false };
      });
    }
    if (values.lyrics !== '') {
      setView((prev) => {
        return { ...prev, lyrics: true };
      });
    } else {
      setView((prev) => {
        return { ...prev, lyrics: false };
      });
    }
    if (values.intro !== '') {
      setView((prev) => {
        return { ...prev, intro: true };
      });
    } else {
      setView((prev) => {
        return { ...prev, intro: false };
      });
    }
  }, [values.title, values.lyrics, values.intro]);

  return (
    <Fragment>
      <WriteModal isOpen={isOpen} onCancel={onCancel} />
      <ToastContainer />
      <WriteContainer>
        <WriteBox>
          <WriteIconContainer onClick={onHandleModal}>
            <GrClose color='#cecece' />
          </WriteIconContainer>
          {values.collaborate ? (
            <WriteCollaboContainerSuccess onClick={changeCollaborateStatus}>
              <WriteCollaboIcon>
                <ImHeadphones className='icon' color='white' />
              </WriteCollaboIcon>
              <WriteCollaboTextSuccess>콜라보</WriteCollaboTextSuccess>
            </WriteCollaboContainerSuccess>
          ) : (
            <WriteCollaboContainer onClick={changeCollaborateStatus}>
              <WriteCollaboIcon>
                <ImHeadphones className='icon' />
              </WriteCollaboIcon>
              <WriteCollaboText>콜라보</WriteCollaboText>
            </WriteCollaboContainer>
          )}
          {
            {
              none: (
                <Fragment>
                  <WriteSingerContainer onClick={() => choosePostion('Singer')}>
                    <WriteSingerIcon>
                      <GiMicrophone className='icon' />
                    </WriteSingerIcon>
                    <WriteSingerText>싱어</WriteSingerText>
                  </WriteSingerContainer>
                  <WriteMakerContainer onClick={() => choosePostion('Maker')}>
                    <WriteMakerIcon>
                      <SiBeatsbydre className='icon' />
                    </WriteMakerIcon>
                    <WriteMakerText>메이커</WriteMakerText>
                  </WriteMakerContainer>
                </Fragment>
              ),
              Singer: (
                <Fragment>
                  <WriteSingerContainerSelected
                    onClick={() => choosePostion('Singer')}
                  >
                    <WriteSingerIcon>
                      <GiMicrophone className='icon' color='white' />
                    </WriteSingerIcon>
                    <WriteSingerTextSelected>싱어</WriteSingerTextSelected>
                  </WriteSingerContainerSelected>
                  <WriteMakerContainer onClick={() => choosePostion('Maker')}>
                    <WriteMakerIcon>
                      <SiBeatsbydre className='icon' />
                    </WriteMakerIcon>
                    <WriteMakerText>메이커</WriteMakerText>
                  </WriteMakerContainer>
                </Fragment>
              ),
              Maker: (
                <Fragment>
                  <WriteSingerContainer onClick={() => choosePostion('Singer')}>
                    <WriteSingerIcon>
                      <GiMicrophone className='icon' />
                    </WriteSingerIcon>
                    <WriteSingerText>싱어</WriteSingerText>
                  </WriteSingerContainer>
                  <WriteMakerContainerSelected
                    onClick={() => choosePostion('Maker')}
                  >
                    <WriteMakerIcon>
                      <SiBeatsbydre className='icon' color='white' />
                    </WriteMakerIcon>
                    <WriteMakerTextSelected>메이커</WriteMakerTextSelected>
                  </WriteMakerContainerSelected>
                </Fragment>
              ),
            }[values.position]
          }
          <WriteForm id='write'>
            <WriteInputContainer>
              {view.title ? (
                <WriteInputIcon onClick={() => deleteText('title')}>
                  <img src={Xbox20} alt='Xbox' className='icon-cancel' />
                </WriteInputIcon>
              ) : (
                <Fragment />
              )}
              {isSmallScreen ? (
                <Input
                  _type={'text'}
                  _value={values.title}
                  _onChange={(e) =>
                    setValues((prev) => {
                      return { ...prev, title: e.target.value };
                    })
                  }
                  _placeholder={'작업물의 제목을 입력해 주세요.(30자 이내)'}
                  _maxLength={30}
                  _style={{
                    width: '676px',
                    height: 'auto',
                    pd_left: '19px',
                    pd_top: '15px',
                    pd_bottom: '15px',
                    pd_right: '40px',
                    ft_size: '12',
                    line_height: '18',
                    bd_radius: '10px',
                    bd_color: '#28CA72',
                  }}
                />
              ) : (
                <Input
                  _type={'text'}
                  _value={values.title}
                  _onChange={(e) =>
                    setValues((prev) => {
                      return { ...prev, title: e.target.value };
                    })
                  }
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
                    bd_color: '#28CA72',
                  }}
                />
              )}
            </WriteInputContainer>
            <WriteImageTextContainer>
              <WriteImageBox>
                {values.imageSrc === '' ? (
                  <Fragment />
                ) : (
                  <WriteImagePreviewImg src={values.imageSrc} />
                )}
                {isSmallScreen ? (
                  <UploadImage
                    width={'186px'}
                    height={'186px'}
                    setFile={setImage}
                    setFileSrc={setImageSrc}
                    text={'이미지 삽입하기'}
                  />
                ) : (
                  <UploadImage
                    width={'236px'}
                    height={'236px'}
                    setFile={setImage}
                    setFileSrc={setImageSrc}
                    text={'이미지 삽입하기'}
                  />
                )}
              </WriteImageBox>
              <WriteTextBox>
                {view.lyrics ? (
                  <WriteTextIconBox onClick={() => deleteText('lyrics')}>
                    <img src={Xbox20} alt='Xbox' />
                  </WriteTextIconBox>
                ) : (
                  <Fragment />
                )}
                <WriteTextArea
                  placeholder='가사 첨부...'
                  value={values.lyrics}
                  onChange={(e) =>
                    setValues((prev) => {
                      return { ...prev, lyrics: e.target.value };
                    })
                  }
                  maxLength={20000}
                />
              </WriteTextBox>
              <WriteTextBox>
                {view.intro ? (
                  <WriteTextIconBox onClick={() => deleteText('intro')}>
                    <img src={Xbox20} alt='Xbox' />
                  </WriteTextIconBox>
                ) : (
                  <Fragment />
                )}
                <WriteTextArea
                  placeholder='작업물 설명...'
                  value={values.intro}
                  onChange={(e) =>
                    setValues((prev) => {
                      return { ...prev, intro: e.target.value };
                    })
                  }
                  maxLength={20000}
                  required
                />
              </WriteTextBox>
            </WriteImageTextContainer>
            <WriteAudioContainer>
              <WriteAudioBox
                onDrop={(e) => onDropHandle(e)}
                onDragOver={(e) => onDragOverHandle(e)}
              >
                <WriteAudioIcon>
                  <TbDragDrop className='icon' />
                </WriteAudioIcon>
                <WriteAudioText onClick={uploadHandle}>
                  오디오 삽입하기
                </WriteAudioText>
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
                {values.audio !== '' ? (
                  <WriteAudioPreviewFile>
                    <WriteAudioPreviewFileName>
                      {audioPreview.fileName}
                    </WriteAudioPreviewFileName>
                    <WriteAudioPreviewFileSize>
                      {audioPreview.fileSize}
                    </WriteAudioPreviewFileSize>
                    <WriteAudioPreviewFileIconMusic>
                      <BsFillFileEarmarkMusicFill className='icon-music' />
                    </WriteAudioPreviewFileIconMusic>
                    <WriteAudioPreviewFileIconCancel onClick={deleteAudio}>
                      <GrClose className='icon-cancel' />
                    </WriteAudioPreviewFileIconCancel>
                  </WriteAudioPreviewFile>
                ) : (
                  <Fragment />
                )}
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
              <WriteHashTagBox>
                <Slider {...settings}>
                  {values.tags.length === 0 ? (
                    <Fragment />
                  ) : (
                    [...values.tags].reverse().map((tag) => {
                      return (
                        <HashTagWithIcon
                          key={shortid.generate()}
                          tag={tag}
                          removeTag={removeTag}
                        />
                      );
                    })
                  )}
                </Slider>
              </WriteHashTagBox>
            </WriteHashTagContainer>
          </WriteForm>
          <WriteButtonContainer>
            {isSmallScreen ? (
              <Button
                _type={'button'}
                _text={'업로드'}
                _style={{
                  bd_radius: '5px',
                  width: '104px',
                  height: '34px',
                  bg_color: 'black',
                  ft_weight: '800',
                  ft_size: '12',
                  line_height: '18',
                }}
                _onClick={addPostHandle}
              />
            ) : (
              <Button
                _type={'button'}
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
                _onClick={addPostHandle}
              />
            )}
          </WriteButtonContainer>
        </WriteBox>
      </WriteContainer>
    </Fragment>
  );
};

export default Write;
