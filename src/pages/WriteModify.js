// React
import { useState, useRef, Fragment, useCallback, useEffect } from 'react';

// Zustand
import useUploadStore from '../zustand/upload';
import usePostStore from '../zustand/post';

// Packages
import { GrClose, GrAdd } from 'react-icons/gr';
import { TbDragDrop } from 'react-icons/tb';
import { ImHeadphones } from 'react-icons/im';
import { GiMicrophone } from 'react-icons/gi';
import { SiBeatsbydre } from 'react-icons/si';
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs';
import jwt_decode from 'jwt-decode';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import { debounce } from 'lodash';
import shortid from 'shortid';

// Components
import UploadImage from '../components/UploadImage';
import HashTagWithIcon from '../components/HashTagWithIcon';
import WriteModifyModal from '../components/modal/WriteModifyModal';
import WriteDeleteModal from '../components/modal/WriteDeleteModal';
import SuccessModal from '../components/modal/SuccessModal';

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
  WriteButtonDeleteContainer,
} from '../assets/styles/pages/Write.styled';
import { Xbox20 } from '../assets/images/image';

const WriteModify = () => {
  const uploadAudio = useUploadStore((state) => state.uploadAudio);
  const getDetail = usePostStore((state) => state.getDetail);
  const putModifyWrite = usePostStore((state) => state.putModifyWrite);
  const deleteDetail = usePostStore((state) => state.deleteDetail);

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
  const [cancelIsOpen, setCancelIsOpen] = useState(false);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [successIsOpen, setSuccessIsOpen] = useState(false);
  const [location, setLocation] = useState(null);

  const uploadInputRef = useRef();

  const params = useParams();
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

  const modifyPost = {
    postId: params.postId,
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

  const deletePost = {
    postId: params.postId,
    position: values.position,
  };

  const onHandleCancelModal = () => {
    setCancelIsOpen(true);
  };

  const onHandleDeleteModal = () => {
    setDeleteIsOpen(true);
  };

  const onHandleSuccessModal = () => {
    setSuccessIsOpen(true);
  };

  const onCancel = () => {
    setDeleteIsOpen(false);
    setCancelIsOpen(false);
  };

  const onDeleteDetail = () => {
    deleteDetail(deletePost).then((res) => {
      if (res) {
        onCancel();
        setLocation('/');
        onHandleSuccessModal();
      }
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
        warning('????????? ???????????? ??????????????????.');
        setValues((prev) => {
          return { ...prev, audio: '' };
        });
      }
    });
  };

  const onDropHandle = (e) => {
    e.preventDefault();

    const audioFile = e.dataTransfer.files[0].type;

    if (
      audioFile === 'audio/mpeg' ||
      audioFile === 'audio/x-m4a' ||
      audioFile === 'audio/wav' ||
      audioFile === 'audio/ogg'
    ) {
      addPreview(e.dataTransfer.files[0]);
      const formData = new FormData();
      formData.append('mediaUrl', e.dataTransfer.files[0]);
      uploadAudio(formData).then((res) => {
        if (res.success) {
          setValues((prev) => {
            return { ...prev, audio: res.data[0] };
          });
        } else {
          warning(`????????? ???????????? ??????????????????.`);
          setValues((prev) => {
            return { ...prev, audio: '' };
          });
        }
      });
    } else {
      alert('????????? ????????? ???????????????!!');
    }
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
            warning('???????????? ???????????????.');
          }
        }
      }

      if (event.key === 9) {
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
            warning('???????????? ???????????????.');
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
        return { ...prev, tags: newTags };
      });
    },
    [values.tags]
  );

  const onHandlePostionAlert = (newPosition) => {
    switch (newPosition) {
      case 'Singer': {
        if (values.position !== newPosition) {
          warning('????????? ????????? ??????????????????.');
        }
        break;
      }
      case 'Maker': {
        if (values.position !== newPosition) {
          warning('????????? ????????? ??????????????????.');
        }
        break;
      }
      default: {
        break;
      }
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

  const modifyPostHandle = () => {
    if (values.title === '') {
      warning(`???????????? ????????? ??????????????????.`);
    } else {
      if (values.intro === '') {
        warning(`????????? ????????? ??????????????????.`);
      } else {
        if (values.audio === '') {
          warning('???????????? ??????????????????.');
        } else {
          putModifyWrite(modifyPost).then((res) => {
            if (res.success) {
              setLocation(-1);
              onHandleSuccessModal();
            }
          });
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

  useEffect(() => {
    getDetail(params).then((res) => {
      if (res.success) {
        const data = res.data;
        setValues({
          title: data.title,
          lyrics: data.lyrics,
          intro: data.content,
          image: data.imageUrl,
          imageSrc: data.imageUrl,
          audio: data.mediaUrl,
          collaborate: data.collaborate,
          position: data.position,
          tags: data.tags,
        });

        setAudioPreview((prev) => {
          return { ...prev, fileName: data.mediaUrl.split('-').slice(-1) };
        });
      } else {
        warning('?????? ?????? ??????????????????.');
        navigate(-1);
      }
    });
  }, []);

  return (
    <Fragment>
      <ToastContainer />
      <WriteModifyModal isOpen={cancelIsOpen} onCancel={onCancel} />
      <WriteDeleteModal
        isOpen={deleteIsOpen}
        onCancel={onCancel}
        onDeleteDetail={onDeleteDetail}
      />
      <SuccessModal isOpen={successIsOpen} location={location} />
      <WriteContainer>
        <WriteBox>
          <WriteIconContainer onClick={onHandleCancelModal}>
            <GrClose color='#cecece' />
          </WriteIconContainer>
          {values.collaborate ? (
            <WriteCollaboContainerSuccess onClick={changeCollaborateStatus}>
              <WriteCollaboIcon>
                <ImHeadphones className='icon' color='white' />
              </WriteCollaboIcon>
              <WriteCollaboTextSuccess>?????????</WriteCollaboTextSuccess>
            </WriteCollaboContainerSuccess>
          ) : (
            <WriteCollaboContainer onClick={changeCollaborateStatus}>
              <WriteCollaboIcon>
                <ImHeadphones className='icon' />
              </WriteCollaboIcon>
              <WriteCollaboText>?????????</WriteCollaboText>
            </WriteCollaboContainer>
          )}
          {
            {
              none: (
                <Fragment>
                  <WriteSingerContainer>
                    <WriteSingerIcon>
                      <GiMicrophone className='icon' />
                    </WriteSingerIcon>
                    <WriteSingerText>??????</WriteSingerText>
                  </WriteSingerContainer>
                  <WriteMakerContainer>
                    <WriteMakerIcon>
                      <SiBeatsbydre className='icon' />
                    </WriteMakerIcon>
                    <WriteMakerText>?????????</WriteMakerText>
                  </WriteMakerContainer>
                </Fragment>
              ),
              Singer: (
                <Fragment>
                  <WriteSingerContainerSelected
                    onClick={() => onHandlePostionAlert('Singer')}
                  >
                    <WriteSingerIcon>
                      <GiMicrophone className='icon' color='white' />
                    </WriteSingerIcon>
                    <WriteSingerTextSelected>??????</WriteSingerTextSelected>
                  </WriteSingerContainerSelected>
                  <WriteMakerContainer
                    onClick={() => onHandlePostionAlert('Maker')}
                  >
                    <WriteMakerIcon>
                      <SiBeatsbydre className='icon' />
                    </WriteMakerIcon>
                    <WriteMakerText>?????????</WriteMakerText>
                  </WriteMakerContainer>
                </Fragment>
              ),
              Maker: (
                <Fragment>
                  <WriteSingerContainer
                    onClick={() => onHandlePostionAlert('Singer')}
                  >
                    <WriteSingerIcon>
                      <GiMicrophone className='icon' />
                    </WriteSingerIcon>
                    <WriteSingerText>??????</WriteSingerText>
                  </WriteSingerContainer>
                  <WriteMakerContainerSelected
                    onClick={() => onHandlePostionAlert('Maker')}
                  >
                    <WriteMakerIcon>
                      <SiBeatsbydre className='icon' color='white' />
                    </WriteMakerIcon>
                    <WriteMakerTextSelected>?????????</WriteMakerTextSelected>
                  </WriteMakerContainerSelected>
                </Fragment>
              ),
            }[values.position]
          }
          <WriteForm id='write'>
            <WriteInputContainer>
              {view.title ? (
                <WriteInputIcon onClick={() => deleteText('title')}>
                  <img src={Xbox20} alt='Xbox' className='icon' />
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
                  _placeholder={'???????????? ????????? ????????? ?????????.(30??? ??????)'}
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
                  _placeholder={'???????????? ????????? ????????? ?????????.(30??? ??????)'}
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
                    text={'????????? ????????????'}
                  />
                ) : (
                  <UploadImage
                    width={'236px'}
                    height={'236px'}
                    setFile={setImage}
                    setFileSrc={setImageSrc}
                    text={'????????? ????????????'}
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
                  placeholder='?????? ??????...'
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
                  placeholder='????????? ??????...'
                  value={values.intro}
                  onChange={(e) =>
                    setValues((prev) => {
                      return { ...prev, intro: e.target.value };
                    })
                  }
                  maxLength={20000}
                  required
                ></WriteTextArea>
              </WriteTextBox>
            </WriteImageTextContainer>
            <WriteAudioContainer>
              <WriteAudioBox
                onClick={uploadHandle}
                onDrop={(e) => onDropHandle(e)}
                onDragOver={(e) => onDragOverHandle(e)}
              >
                <WriteAudioIcon>
                  <TbDragDrop className='icon' />
                </WriteAudioIcon>
                <WriteAudioText>????????? ????????????</WriteAudioText>
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
              <WriteHashTagTitle>????????????</WriteHashTagTitle>
              <WriteHashTagTitleInfo>
                ?????????????????? ?????? ???????????? ???????????????!
              </WriteHashTagTitleInfo>
              <WriteHashTag
                onKeyDown={addTag}
                placeholder='Tab, Enter??? ???????????? ????????? ?????????.'
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
          {isSmallScreen ? (
            <Fragment>
              <WriteButtonContainer>
                <Button
                  _type={'button'}
                  _text={'????????? ??????'}
                  _style={{
                    bd_radius: '5px',
                    width: '104px',
                    height: '34px',
                    bg_color: '#28ca7c',
                    ft_weight: '800',
                    ft_size: '12',
                    line_height: '18',
                  }}
                  _onClick={modifyPostHandle}
                />
              </WriteButtonContainer>
              <WriteButtonDeleteContainer>
                <Button
                  _type={'button'}
                  _text={'????????? ????????????'}
                  _style={{
                    bd_radius: '5px',
                    width: '139px',
                    height: '34px',
                    bg_color: '#ffffff',
                    bd_px: '1px',
                    bd_color: '#b4b4b4',
                    ft_weight: '800',
                    ft_size: '12',
                    line_height: '18',
                    color: '#b4b4b4',
                  }}
                  _onClick={onHandleDeleteModal}
                />
              </WriteButtonDeleteContainer>
            </Fragment>
          ) : (
            <Fragment>
              <WriteButtonContainer>
                <Button
                  _type={'button'}
                  _text={'????????? ??????'}
                  _style={{
                    bd_radius: '5px',
                    width: '124px',
                    height: '44px',
                    bg_color: '#28ca7c',
                    ft_weight: '800',
                    ft_size: '12',
                    line_height: '18',
                  }}
                  _onClick={modifyPostHandle}
                />
              </WriteButtonContainer>
              <WriteButtonDeleteContainer>
                <Button
                  _type={'button'}
                  _text={'????????? ????????????'}
                  _style={{
                    bd_radius: '5px',
                    width: '159px',
                    height: '44px',
                    bg_color: '#ffffff',
                    bd_px: '1px',
                    bd_color: '#b4b4b4',
                    ft_weight: '800',
                    ft_size: '12',
                    line_height: '18',
                    color: '#b4b4b4',
                  }}
                  _onClick={onHandleDeleteModal}
                />
              </WriteButtonDeleteContainer>
            </Fragment>
          )}
        </WriteBox>
      </WriteContainer>
    </Fragment>
  );
};

export default WriteModify;
