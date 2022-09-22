// Packages

// Elements

// Assets
import {
  AboutSong,
  DisLike,
  LikeWhite,
  Likewhite,
  ListCollaborateWhite,
  WhiteCollaborate24,
  Xbox20,
} from '../assets/images/image';
import styled from 'styled-components';
import usePlayerStore from '../zustand/player';
import PlayListCloseModal from './modal/PlayListCloseModal';
import { useCallback, useEffect, useState } from 'react';
import PlayListModal from './modal/PlayListModal';
import { useRef } from 'react';

const PlayList = () => {
  const playListState = usePlayerStore((state) => state.playListState);
  const playListStateChange = usePlayerStore(
    (state) => state.playListStateChange
  );
  const playListMember = usePlayerStore((state) => state.playListMember);

  const [isOpen, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalList, setModalList] = useState();
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();

  const XboxClick = () => {
    playListStateChange(false);
  };

  const PlayListCloseModalOpen = () => {
    setOpen(true);
  };

  const onCancel = useCallback(() => {
    setOpen(false);
  }, [modalOpen]);

  const playListCancel = useCallback(() => {
    setModalOpen(false);
  }, [isOpen]);

  const ListModalOpen = (postId) => {
    const filterList = playListMember.filter((x) => x.postId === postId);
    setModalList({
      postId: filterList[0].postId,
      title: filterList[0].title,
      nickname: filterList[0].nickname,
      imageUrl: filterList[0].imageUrl,
      lyrics: filterList[0].lyrics,
    });
    setModalOpen(true);
  };

  function secondsToHms(seconds) {
    if (!seconds) return '00 : 00';

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)} : ${min} : ${sec}`;
    } else if (min === 0) {
      return `00 : ${sec}`;
    } else {
      return `${min} : ${sec}`;
    }
  }
  console.log(audioRef.current.duration);
  return (
    <PlayListAllContainer ListyIndex={playListState ? 'flex' : 'none'}>
      <PlayListCloseModal
        isOpen={isOpen}
        onCancel={onCancel}
        playListMemberLength={playListMember.length}
      />
      <PlayListModal
        modalOpen={modalOpen}
        playListCancel={playListCancel}
        ModalList={modalList}
      />
      <PlayListContainer>
        <XboxDiv onClick={XboxClick}>
          <img src={Xbox20} alt='Xbox' />
        </XboxDiv>
        <PlayListDiv>
          <PlayListMidALlDiv>
            <PlayListTopDiv>
              <PlayListTopLeftSpan>재생목록</PlayListTopLeftSpan>
              <PlayListTopRightSpan>
                곡({playListMember.length})
              </PlayListTopRightSpan>
            </PlayListTopDiv>
            <PlayListTopRihtRightSpan onClick={PlayListCloseModalOpen}>
              전체 삭제
            </PlayListTopRihtRightSpan>
          </PlayListMidALlDiv>
          <PlayListMidDiv>
            <PlayListMidDivDiv>
              <PlayListTopLeftDiv>
                <MidDivDivSpan>제목</MidDivDivSpan>
              </PlayListTopLeftDiv>
              <MidMidDivDiv>
                <MidDivDivSpan>아티스트명</MidDivDivSpan>
                <MidDivDivSpan>재생시간</MidDivDivSpan>
              </MidMidDivDiv>
            </PlayListMidDivDiv>

            <MidRightDivDiv>
              <MidDivDivSpan>작품정보</MidDivDivSpan>
              <MidDivDivSpan>좋아요</MidDivDivSpan>
              <MidDivDivSpan>콜라보</MidDivDivSpan>
            </MidRightDivDiv>
          </PlayListMidDiv>
          <BtmAllDiv>
            {playListMember.map((x) => (
              <BtmMapDiv key={x.postId}>
                <BtmMapImgDiv>
                  <BtmMapImg src={x.imageUrl} alt='커버 이미지'></BtmMapImg>
                </BtmMapImgDiv>
                <BtmMapImgSpan>{x.title}</BtmMapImgSpan>
                <BtmMapArtistDiv>
                  <BtmMapArtistSpan>{x.nickname}</BtmMapArtistSpan>
                  <audio
                  ref={audioRef}
                    src={x.mediaUrl}
                    onLoadedData={(e) => {
                      setDuration(e.currentTarget.duration.toFixed(2));
                    }}
                  ></audio>
                  <BtmMapArtistSpan>{secondsToHms(duration)}</BtmMapArtistSpan>
                </BtmMapArtistDiv>
                <BtmMapIconDiv>
                  <img
                    src={AboutSong}
                    alt='작품정보'
                    className='leftIcon'
                    onClick={() => ListModalOpen(x.postId)}
                  />
                  <img src={LikeWhite} alt='좋아요' className='midIcon' />
                  <img
                    src={ListCollaborateWhite}
                    alt='콜라보'
                    className='rightIcon'
                  />
                </BtmMapIconDiv>
              </BtmMapDiv>
            ))}
          </BtmAllDiv>
        </PlayListDiv>
      </PlayListContainer>
    </PlayListAllContainer>
  );
};

export default PlayList;

export const PlayListAllContainer = styled.div`
  width: 100%;
  height: auto;
  display: ${(props) => props.ListyIndex};
  justify-content: center;
  position: fixed;
  bottom: 200px;
  left: 0;
`;

export const XboxDiv = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 20px;
  top: 15px;
  :hover {
    cursor: pointer;
  }
`;

export const PlayListContainer = styled.div`
  width: 1024px;
  max-height: auto;
  background-color: rgba(27, 30, 47, 0.8);
  border: 1px solid #28ca72;
  box-shadow: 0px 1px 31px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 10px;
`;

export const PlayListDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 63px 72px;
  display: flex;
  flex-direction: column;
`;

export const PlayListTopDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const PlayListMidALlDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const PlayListTopLeftDiv = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
`;

export const PlayListTopLeftSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: #28ca72;
`;

export const PlayListTopRihtRightSpan = styled.span`
  width: 66px;
  display: flex;
  height: auto;
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: #25b868;
  :hover {
    cursor: pointer;
  }
`;

export const PlayListTopRightSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: #ffffff;
`;

export const PlayListMidDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ffffff;
  margin-top: 47px;
  padding-bottom: 13px;
`;

export const PlayListMidDivDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 205px;
  margin-left: 47px;
`;
export const MidDivDivSpan = styled.span`
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: #ffffff;
`;

export const MidMidDivDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 200px;
`;

export const MidRightDivDiv = styled.div`
  width: 300px;
  height: auto;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  gap: 35px;
`;

export const BtmAllDiv = styled.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  max-height: 415.5px;
  display: flex;
  flex-direction: column;
`;

export const BtmMapDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 5px 0;
  gap: 24px;
  border-bottom: 0.3px solid rgba(255, 255, 255, 1);
  padding: 12.5px 0;
`;

export const BtmMapImgDiv = styled.div`
  width: 56px;
  height: 56px;
`;

export const BtmMapImg = styled.img`
  width: 56px;
  height: 56px;
`;

export const BtmMapImgSpan = styled.span`
  width: 181px;
  display: flex;
  align-items: center;
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xs};
`;

export const BtmMapArtistDiv = styled.div`
  display: flex;
  align-items: center;
  width: 322px;
  justify-content: space-between;
`;

export const BtmMapArtistSpan = styled.span`
  color: #ffffff;
  line-height: ${(props) => props.theme.lineHeight.xs};
  font-weight: ${(props) => props.theme.fontWeight.Medium};
  font-size: ${(props) => props.theme.fontSizes.xs};
  display: flex;
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const BtmMapIconDiv = styled.div`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 46px;
  margin-left: auto;
  margin-right: 5px;
  .leftIcon {
    :hover {
      cursor: pointer;
    }
  }
  .midIcon {
    :hover {
      cursor: pointer;
    }
  }
  .rightIcon {
    :hover {
      cursor: pointer;
    }
  }
`;
