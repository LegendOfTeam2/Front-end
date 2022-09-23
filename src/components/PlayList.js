// React
import { useCallback, useState } from 'react';
// Zustand
import usePlayerStore from '../zustand/player';
// Components
import PlayListSong from './PlayListSong';
import PlayListModal from './modal/PlayListModal';
import PlayListCloseModal from './modal/PlayListCloseModal';
// Assets
import {
  BtmAllDiv,
  MidDivDivSpan,
  MidMidDivDiv,
  MidRightDivDiv,
  PlayListAllContainer,
  PlayListContainer,
  PlayListDiv,
  PlayListMidALlDiv,
  PlayListMidDiv,
  PlayListMidDivDiv,
  PlayListTopDiv,
  PlayListTopLeftDiv,
  PlayListTopLeftSpan,
  PlayListTopRightSpan,
  PlayListTopRihtRightSpan,
  XboxDiv,
} from '../assets/styles/components/PlayList.styled';
import { Xbox20 } from '../assets/images/image';
import useLikeStore from '../zustand/like';

const PlayList = () => {
  const playListState = usePlayerStore((state) => state.playListState);

  const playListStateChange = usePlayerStore(
    (state) => state.playListStateChange
  );
  const playListMember = usePlayerStore((state) => state.playListMember);
  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);

  const [isOpen, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalList, setModalList] = useState();

  const xboxClick = () => {
    playListStateChange(false);
  };

  const playListCloseModalOpen = () => {
    setOpen(true);
  };

  const onCancel = useCallback(() => {
    setOpen(false);
  }, [modalOpen]);

  const playListCancel = useCallback(() => {
    setModalOpen(false);
  }, [isOpen]);

  const listModalOpen = (postId) => {
    const filterList = playListMember.filter((x) => x.postId === postId);
    if (singerIsLikeIsLoaded) {
      if ([...singerIsLike, ...makerIsLike].indexOf(postId) > -1){
        setModalList({
          postId: filterList[0].postId,
          title: filterList[0].title,
          nickname: filterList[0].nickname,
          imageUrl: filterList[0].imageUrl,
          lyrics: filterList[0].lyrics,
          memberImageUrl: filterList[0].memberImageUrl,
          position: filterList[0].position,
          likeState: true
        });  
      }else{
        setModalList({
          postId: filterList[0].postId,
          title: filterList[0].title,
          nickname: filterList[0].nickname,
          imageUrl: filterList[0].imageUrl,
          lyrics: filterList[0].lyrics,
          memberImageUrl: filterList[0].memberImageUrl,
          position: filterList[0].position,
          likeState: false
        });  
      }
    }
    
    setModalOpen(true);
  };

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
        <XboxDiv onClick={xboxClick}>
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
            <PlayListTopRihtRightSpan onClick={playListCloseModalOpen}>
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
            {singerIsLikeIsLoaded ? (
              playListMember.map((x, idx) => {
                if ([...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1) {
                  return (
                    <PlayListSong
                      key={idx}
                      data={x}
                      listModalOpen={listModalOpen}
                      likeState={true}
                    />
                  );
                } else {
                  return (
                    <PlayListSong
                      key={idx}
                      data={x}
                      listModalOpen={listModalOpen}
                      likeState={false}
                    />
                  );
                }
              })
            ) : (
              <></>
            )}
          </BtmAllDiv>
        </PlayListDiv>
      </PlayListContainer>
    </PlayListAllContainer>
  );
};

export default PlayList;
