// React
import { useNavigate } from 'react-router-dom';

// Zustand
import usePlayerStore from '../../zustand/player';

// Packages
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';

// Assets
import {
  ListModalBtnDiv,
  ListModalBtnLeft,
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
  ListModalProfileDetailBtm,
  ListModalProfileDetailTop,
  ListModalProfileDiv,
  ListModalProfileDivDiv,
  ListModalProfileImg,
  ListModalProfileNickname,
  ListModalTitleSpan,
  ListModalTopDiv,
  XboxDiv,
} from '../../assets/styles/components/modal/PlayListModal.styled';
import { DisLike38, Like38, Share38, Xbox20 } from '../../assets/images/image';
import { getCookie } from '../../utils/cookie';
import useLikeStore from '../../zustand/like';
import { useEffect, useState } from 'react';

const PlayListModal = ({ modalOpen, playListCancel, ModalList }) => {
  const [isLike, setIsLike] = useState(false);
  const addLike = useLikeStore((state) => state.addLike);
  const playListStateChange = usePlayerStore(
    (state) => state.playListStateChange
  );
  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );

  const navigate = useNavigate();

  const playListClose = () => {
    playListCancel();
  };

  useEffect(()=>{
    if (ModalList !== undefined) {
      setIsLike(ModalList.likeState)  
    }
  },[modalOpen])

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
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
      width: '630px',
      height: '990px',
      borderRadius: '20px',
      backgroundColor: 'rgba(27, 30, 47, 0.8)',
      border: '1px solid #28ca72',
    },
  };

  const LikeClick = () => {
    if (getCookie('authorization') === undefined) {
      alert('로그인후 이용해주세요');
    } else {
      addLike({ postId: ModalList.postId, position: ModalList.position }).then(
        (res) => {
          if (res.success && res.data) {
            toast.info('게시글에 좋아요를 눌렀습니다.', {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 1500,
              draggablePercent: 60,
              hideProgressBar: true,
            });
            setIsLike(true);
          } else {
            toast.info('게시글에 좋아요를 취소했습니다.', {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 1500,
              draggablePercent: 60,
              hideProgressBar: true,
            });
            setIsLike(false);
          }
        }
      );
    }
  };

  const clip = () => {
    navigator.clipboard
      .writeText(
        `https://rhythme.shop/detail/${ModalList.position}/${ModalList.postId}`
      )
      .then(() => {
        toast.info('URL 복사가 완료되었습니다.', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1500,
          draggablePercent: 60,
          hideProgressBar: true,
        });
      });
  };

  const ProfilPage = () => {
    navigate(`/mypage/${ModalList.nickname}`);
    playListCancel();
    playListStateChange(false);
  };

  return (
    <ReactModal isOpen={modalOpen} style={customStyles}>
      {ModalList !== undefined ? (
        <ListModalContainer>
          <XboxDiv onClick={playListClose}>
            <img src={Xbox20} alt='Xbox' />
          </XboxDiv>
          <ListModalTopDiv>
            <ListModalTitleSpan>{ModalList.title}</ListModalTitleSpan>
            <ListModalNicknameSpan>{ModalList.nickname}</ListModalNicknameSpan>
          </ListModalTopDiv>
          <ListModalImgDiv>
            <ListModalImg src={ModalList.imageUrl} alt='리스트 이미지' />
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
              <ListModalProfileImg
                src={ModalList.memberImageUrl}
                alt='프로필 이미지'
              />
              <ListModalProfileNickname>
                {ModalList.nickname}
              </ListModalProfileNickname>
              {/* <ListModalProfilePosition>
                <ListModalProfilePositionLeft>
                  싱어
                </ListModalProfilePositionLeft>
                <ListModalProfilePositionrRight>
                  메이커
                </ListModalProfilePositionrRight>
              </ListModalProfilePosition> */}
              <ListModalProfileDetail>
                <ListModalProfileDetailTop onClick={ProfilPage}>
                  아티스트 보기
                </ListModalProfileDetailTop>
                <ListModalProfileDetailBtm>
                  팔로우 하기
                </ListModalProfileDetailBtm>
              </ListModalProfileDetail>
            </ListModalProfileDivDiv>
          </ListModalProfileDiv>
          <ListModalBtnDiv>
            <ListModalBtnLeft>
              {singerIsLikeIsLoaded ? (
                isLike ? (
                  <img src={Like38} alt='좋아요' onClick={LikeClick} />
                ) : (
                  <img src={DisLike38} alt='좋아요힌 상태' onClick={LikeClick} />
                )
              ) : (
                <></>
              )}

              <ListModalBtnSpan>좋아요</ListModalBtnSpan>
            </ListModalBtnLeft>
            <ListModalBtnRight onClick={clip}>
              <img src={Share38} alt='공유하기' />
              <ListModalBtnSpan>공유하기</ListModalBtnSpan>
            </ListModalBtnRight>
          </ListModalBtnDiv>
        </ListModalContainer>
      ) : (
        <></>
      )}
    </ReactModal>
  );
};

export default PlayListModal;
