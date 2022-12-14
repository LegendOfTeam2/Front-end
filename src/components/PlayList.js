// React
import { useState, Fragment } from 'react';

// Zustand
import usePlayerStore from '../zustand/player';
import useLikeStore from '../zustand/like';

// Components
import PlayListSong from './PlayListSong';
import PlayListModal from './modal/PlayListModal';
import PlayListCloseModal from './modal/PlayListCloseModal';

// Utils
import { getCookie } from '../utils/cookie';

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

const PlayList = () => {
  const playListState = usePlayerStore((state) => state.playListState);
  const playListMember = usePlayerStore((state) => state.playListMember);
  const singerIsLike = useLikeStore((state) => state.singerIsLike);
  const makerIsLike = useLikeStore((state) => state.makerIsLike);
  const playList = usePlayerStore((state) => state.playList);
  const singerIsLikeIsLoaded = useLikeStore(
    (state) => state.singerIsLikeIsLoaded
  );
  const playListStateChange = usePlayerStore(
    (state) => state.playListStateChange
  );
  const playListModalHandle = usePlayerStore(
    (state) => state.playListModalHandle
  );

  const [isOpen, setOpen] = useState(false);
  const [modalList, setModalList] = useState();

  const xboxClick = () => {
    playListStateChange(false);
  };

  const playListCloseModalOpen = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const listModalOpen = (postId) => {
    const filterListMember = playListMember.filter((x) => x.postId === postId);
    const fillterList = playList.filter((x) => x.postId === postId);

    if (getCookie('authorization') !== undefined) {
      setModalList({
        postId: filterListMember[0].postId,
        title: filterListMember[0].title,
        nickname: filterListMember[0].nickname,
        imageUrl: filterListMember[0].imageUrl,
        lyrics: filterListMember[0].lyrics,
        memberImageUrl: filterListMember[0].memberImageUrl,
        position: filterListMember[0].position,
      });
    } else {
      setModalList({
        postId: fillterList[0].postId,
        title: fillterList[0].title,
        nickname: fillterList[0].nickname,
        imageUrl: fillterList[0].imageUrl,
        lyrics: fillterList[0].lyrics,
        memberImageUrl: fillterList[0].memberImageUrl,
        position: fillterList[0].position,
      });
    }
    playListModalHandle(true);
  };

  return (
    <PlayListAllContainer ListyIndex={playListState ? 'flex' : 'none'}>
      <PlayListCloseModal
        isOpen={isOpen}
        onCancel={onCancel}
        playListMemberLength={playListMember.length}
      />
      <PlayListModal ModalList={modalList} />

      <PlayListContainer>
        <XboxDiv onClick={xboxClick}>
          <img src={Xbox20} alt='Xbox' />
        </XboxDiv>
        <PlayListDiv>
          <PlayListMidALlDiv>
            <PlayListTopDiv>
              <PlayListTopLeftSpan>????????????</PlayListTopLeftSpan>
              <PlayListTopRightSpan>
                {getCookie('authorization') !== undefined
                  ? `??? (${playListMember.length})`
                  : `??? ${playList.length}`}
              </PlayListTopRightSpan>
            </PlayListTopDiv>
            {getCookie('authorization') !== undefined ? (
              <PlayListTopRihtRightSpan onClick={playListCloseModalOpen}>
                ?????? ??????
              </PlayListTopRihtRightSpan>
            ) : (
              <></>
            )}
          </PlayListMidALlDiv>
          <PlayListMidDiv>
            <PlayListMidDivDiv>
              <PlayListTopLeftDiv>
                ``
                <MidDivDivSpan>??????</MidDivDivSpan>
              </PlayListTopLeftDiv>
              <MidMidDivDiv>
                <MidDivDivSpan>???????????????</MidDivDivSpan>
                <MidDivDivSpan>????????????</MidDivDivSpan>
              </MidMidDivDiv>
            </PlayListMidDivDiv>
            <MidRightDivDiv>
              <MidDivDivSpan>????????????</MidDivDivSpan>
              <MidDivDivSpan>?????????</MidDivDivSpan>
              <MidDivDivSpan>?????????</MidDivDivSpan>
            </MidRightDivDiv>
          </PlayListMidDiv>
          <BtmAllDiv>
            {getCookie('authorization') !== undefined ? (
              singerIsLikeIsLoaded ? (
                playListMember.map((x, idx) => {
                  if (
                    [...singerIsLike, ...makerIsLike].indexOf(x.postId) > -1
                  ) {
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
                <Fragment />
              )
            ) : (
              playList.map((x, idx) => {
                return (
                  <PlayListSong
                    key={idx}
                    data={x}
                    listModalOpen={listModalOpen}
                  />
                );
              })
            )}
          </BtmAllDiv>
        </PlayListDiv>
      </PlayListContainer>
    </PlayListAllContainer>
  );
};

export default PlayList;
