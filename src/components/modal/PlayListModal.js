// React
import { Fragment } from 'react';

// Zustand
import usePlayerStore from '../../zustand/player';
import useMemberStore from '../../zustand/member';

// Packages
import ReactModal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

// Utils
import { getCookie } from '../../utils/cookie';
import { info } from '../../utils/toast';

// Assets
import {
  ListModalBtnDiv,
  ListModalBtnRight,
  ListModalBtnSpan,
  ListModalContainer,
  ListModalImg,
  ListModalImgDiv,
  ListModalLyrics,
  ListModalLyricsSpan,
  ListModalMidDiv,
  ListModalMidDivDiv,
  ListModalMidDivSpan,
  ListModalNicknameSpan,
  ListModalProfileDetail,
  ListModalProfileDetailTop,
  ListModalProfileDiv,
  ListModalProfileDivDiv,
  ListModalProfileImg,
  ListModalProfileNickname,
  ListModalTitleSpan,
  ListModalTopDiv,
  XboxDiv,
} from '../../assets/styles/components/modal/PlayListModal.styled';
import '../../assets/styles/components/modal/PlayListModal.css';
import { Share38, Xbox20 } from '../../assets/images/image';

const PlayListModal = ({ ModalList }) => {
  const profileImgArr = useMemberStore((state) => state.profileImgArr);
  const random = useMemberStore((state) => state.random);
  const playListStateChange = usePlayerStore(
    (state) => state.playListStateChange
  );
  const playListModalState = usePlayerStore(
    (state) => state.playListModalState
  );
  const playListModalHandle = usePlayerStore(
    (state) => state.playListModalHandle
  );

  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1920px)',
  });

  const location = useLocation().pathname.split('/')[2];

  const playListClose = () => {
    playListModalHandle();
  };

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: isSmallScreen ? '130px' : '0',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(20, 20, 20, 0.75)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: isSmallScreen ? '480px' : '630px',
      height: isSmallScreen ? '480px' : '990px',
      borderRadius: '20px',
      backgroundColor: 'rgba(27, 30, 47, 0.8)',
      border: '1px solid #28ca72',
      overflow: 'auto',
    },
  };

  const clip = () => {
    navigator.clipboard
      .writeText(
        `https://rhythme.shop/detail/${ModalList.position}/${ModalList.postId}`
      )
      .then(() => {
        info('URL 복사가 완료되었습니다.');
      });
  };

  const ProfilPage = () => {
    if (location === ModalList.nickname) {
      playListModalHandle(false);
    }
    playListStateChange(false);
    navigate(`/mypage/${ModalList.nickname}`);
  };

  return (
    // <ReactModal isOpen={playListModalState} style={customStyles}>
    //   {ModalList !== undefined ? (
    //     <ListModalContainer>
    //       <XboxDiv onClick={playListClose}>
    //         <img src={Xbox20} alt='Xbox' />
    //       </XboxDiv>
    //       <ListModalTopDiv>
    //         <ListModalTitleSpan>{ModalList.title}</ListModalTitleSpan>
    //         <ListModalNicknameSpan>{ModalList.nickname}</ListModalNicknameSpan>
    //       </ListModalTopDiv>
    //       <ListModalImgDiv>
    //         <ListModalImg
    //           src={
    //             ModalList.imageUrl === null
    //               ? profileImgArr[random]
    //               : ModalList.imageUrl === ''
    //               ? profileImgArr[random]
    //               : ModalList.imageUrl
    //           }
    //           alt='리스트 이미지'
    //         />
    //       </ListModalImgDiv>
    //       <ListModalMidDiv>
    //         <ListModalMidDivDiv>
    //           <ListModalMidDivSpan>소개글</ListModalMidDivSpan>
    //         </ListModalMidDivDiv>
    //       </ListModalMidDiv>
    //       <ListModalLyrics>
    //         <ListModalLyricsSpan>{ModalList.lyrics}</ListModalLyricsSpan>
    //       </ListModalLyrics>
    //       <ListModalProfileDiv>
    //         <ListModalProfileDivDiv>
    //           {getCookie('authorization') !== undefined ? (
    //             <ListModalProfileImg
    //               src={
    //                 ModalList.memberImageUrl === null
    //                   ? profileImgArr[random]
    //                   : ModalList.memberImageUrl === ''
    //                   ? profileImgArr[random]
    //                   : ModalList.memberImageUrl
    //               }
    //               alt='프로필 이미지'
    //             />
    //           ) : (
    //             <></>
    //           )}

    //           <ListModalProfileNickname>
    <Fragment>
      <ToastContainer />
      {/* <div className='background' /> */}
      {/* <ReactModal isOpen={playListModalState} className='modal'> */}
      <ReactModal
        isOpen={playListModalState}
        style={customStyles}
        className='box'
      >
        {ModalList !== undefined ? (
          <ListModalContainer>
            <XboxDiv onClick={playListClose}>
              <img src={Xbox20} alt='Xbox' />
            </XboxDiv>
            <ListModalTopDiv>
              <ListModalTitleSpan>{ModalList.title}</ListModalTitleSpan>
              <ListModalNicknameSpan>
                {ModalList.nickname}
              </ListModalNicknameSpan>
            </ListModalTopDiv>
            <ListModalImgDiv>
              <ListModalImg
                src={
                  ModalList.imageUrl === null
                    ? profileImgArr[random]
                    : ModalList.imageUrl === ''
                    ? profileImgArr[random]
                    : ModalList.imageUrl
                }
                alt='리스트 이미지'
              />
            </ListModalImgDiv>
            <ListModalMidDiv>
              <ListModalMidDivDiv>
                <ListModalMidDivSpan>소개글</ListModalMidDivSpan>
              </ListModalMidDivDiv>
            </ListModalMidDiv>
            <ListModalLyrics>
              <ListModalLyricsSpan>{ModalList.lyrics}</ListModalLyricsSpan>
            </ListModalLyrics>
            <ListModalProfileDiv>
              <ListModalProfileDivDiv>
                {getCookie('authorization') !== undefined ? (
                  <ListModalProfileImg
                    src={
                      ModalList.memberImageUrl === null
                        ? profileImgArr[random]
                        : ModalList.memberImageUrl === ''
                        ? profileImgArr[random]
                        : ModalList.memberImageUrl
                    }
                    alt='프로필 이미지'
                  />
                ) : (
                  <></>
                )}

                <ListModalProfileNickname>
                  {ModalList.nickname}
                </ListModalProfileNickname>

                <ListModalProfileDetail>
                  <ListModalProfileDetailTop onClick={ProfilPage}>
                    아티스트 보기
                  </ListModalProfileDetailTop>
                </ListModalProfileDetail>
              </ListModalProfileDivDiv>
            </ListModalProfileDiv>
            <ListModalBtnDiv>
              <ListModalBtnRight onClick={clip}>
                <img src={Share38} alt='공유하기' />
                <ListModalBtnSpan>공유하기</ListModalBtnSpan>
              </ListModalBtnRight>
            </ListModalBtnDiv>
          </ListModalContainer>
        ) : (
          <Fragment />
        )}
      </ReactModal>
    </Fragment>
  );
};

export default PlayListModal;
